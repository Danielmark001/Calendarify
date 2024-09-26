import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

type Event = {
  id: string
  title: string
  start: string
  end: string
  description?: string
}

// In-memory storage for events (replace with a database in a real application)
let events: Event[] = [
  { id: "1", title: "Meditate", start: "2024-09-25T08:00:00", end: "2024-09-25T08:30:00" },
  { id: "2", title: "Check emails", start: "2024-09-25T09:00:00", end: "2024-09-25T09:30:00" },
  { id: "3", title: "SC1004 Homework", start: "2024-09-25T10:15:00", end: "2024-09-25T10:45:00" },
  { id: "4", title: "MH1812 Mid-Sem Quiz", start: "2024-09-25T10:45:00", end: "2024-09-25T11:15:00" },
  { id: "5", title: "Lunch", start: "2024-09-25T11:15:00", end: "2024-09-25T11:45:00" },
  { id: "6", title: "SC1005 Lab", start: "2024-09-25T11:45:00", end: "2024-09-25T12:15:00" },
  { id: "7", title: "Exercise", start: "2024-09-25T14:00:00", end: "2024-09-25T14:30:00" },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getEvents(req, res)
    case 'POST':
      return createEvent(req, res)
    case 'PUT':
      return updateEvent(req, res)
    case 'DELETE':
      return deleteEvent(req, res)
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

function getEvents(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(events)
}

function createEvent(req: NextApiRequest, res: NextApiResponse) {
  const { title, start, end, description } = req.body
  if (!title || !start || !end) {
    return res.status(400).json({ message: 'Missing required fields' })
  }
  const newEvent: Event = {
    id: uuidv4(),
    title,
    start,
    end,
    description,
  }
  events.push(newEvent)
  res.status(201).json(newEvent)
}

function updateEvent(req: NextApiRequest, res: NextApiResponse) {
  const { id, title, start, end, description } = req.body
  const eventIndex = events.findIndex(e => e.id === id)
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' })
  }
  events[eventIndex] = { ...events[eventIndex], title, start, end, description }
  res.status(200).json(events[eventIndex])
}

function deleteEvent(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const eventIndex = events.findIndex(e => e.id === id)
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' })
  }
  events.splice(eventIndex, 1)
  res.status(204).end()
}