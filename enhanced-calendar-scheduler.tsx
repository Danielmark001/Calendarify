"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon, Loader2Icon, BellIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Switch } from "@/components/ui/switch"

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`)

type Event = {
  id: string
  title: string
  start: Date
  end: Date
  description?: string
}

export default function EnhancedCalendarScheduler() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 25)) // September 25, 2024
  const [events, setEvents] = useState<Event[]>([
    { id: "1", title: "Meditate", start: new Date(2024, 8, 25, 8, 0), end: new Date(2024, 8, 25, 8, 30) },
    { id: "2", title: "Check emails", start: new Date(2024, 8, 25, 9, 0), end: new Date(2024, 8, 25, 9, 30) },
    { id: "3", title: "SC1004 Homework", start: new Date(2024, 8, 25, 10, 15), end: new Date(2024, 8, 25, 10, 45) },
    { id: "4", title: "MH1812 Mid-Sem Quiz", start: new Date(2024, 8, 25, 10, 45), end: new Date(2024, 8, 25, 11, 15) },
    { id: "5", title: "Lunch", start: new Date(2024, 8, 25, 11, 15), end: new Date(2024, 8, 25, 11, 45) },
    { id: "6", title: "SC1005 Lab", start: new Date(2024, 8, 25, 11, 45), end: new Date(2024, 8, 25, 12, 15) },
    { id: "7", title: "Exercise", start: new Date(2024, 8, 25, 14, 0), end: new Date(2024, 8, 25, 14, 30) },
  ])
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  })
  const [aiSuggestion, setAiSuggestion] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if notifications are supported and permission is granted
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        setNotificationsEnabled(true)
      }
    }
  }, [])

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        setNotificationsEnabled(true)
        toast({
          title: "Notifications enabled",
          description: "You will now receive notifications for upcoming events.",
        })
      } else {
        toast({
          title: "Notifications disabled",
          description: "You will not receive notifications for upcoming events.",
          variant: "destructive",
        })
      }
    }
  }

  const scheduleNotification = (event: Event) => {
    if (notificationsEnabled) {
      const now = new Date()
      const timeUntilEvent = event.start.getTime() - now.getTime()
      if (timeUntilEvent > 0) {
        setTimeout(() => {
          new Notification(`Upcoming Event: ${event.title}`, {
            body: `Your event "${event.title}" starts in 15 minutes.`,
            icon: "/calendar-icon.png" // Make sure to add this icon to your public folder
          })
        }, timeUntilEvent - 15 * 60 * 1000) // Notify 15 minutes before the event
      }
    }
  }

  const startOfWeek = new Date(currentDate)
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  }

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() - 7)
    setCurrentDate(newDate)
  }

  const handleNextWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + 7)
    setCurrentDate(newDate)
  }

  const getEventsForDay = (date: Date) => {
    return events.filter(event => formatDate(event.start) === formatDate(date))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewEvent({ ...newEvent, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.random().toString(36).substr(2, 9)
    const event: Event = {
      id,
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      description: newEvent.description,
    }
    setEvents([...events, event])
    setNewEvent({ title: "", description: "", start: "", end: "" })
    toast({
      title: "Event added",
      description: "Your new event has been added to the calendar.",
    })
    scheduleNotification(event)
  }

  const getAISuggestion = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Given the following events in my calendar: ${events.map(e => e.title).join(', ')}, suggest a good time and duration for a new event titled "${newEvent.title}". Consider typical working hours and existing commitments.`,
        }),
      })
      const data = await response.json()
      setAiSuggestion(data.result)
    } catch (error) {
      console.error('Error fetching AI suggestion:', error)
      toast({
        title: "Error",
        description: "Failed to get AI suggestion. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <div className="flex items-center space-x-2">
          <Button onClick={handlePrevWeek} variant="outline" size="icon">
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button onClick={handleNextWeek} variant="outline" size="icon">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline">Today</Button>
          <Button variant="outline">
            Display options
            <MoreHorizontalIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-1"></div>
        {weekDays.map((day, index) => {
          const date = new Date(startOfWeek)
          date.setDate(startOfWeek.getDate() + index)
          return (
            <div key={day} className="text-center">
              <div className="font-medium">{day}</div>
              <div className={`text-2xl ${formatDate(date) === formatDate(currentDate) ? 'bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto' : ''}`}>
                {date.getDate()}
              </div>
            </div>
          )
        })}
        {timeSlots.map((time) => (
          <React.Fragment key={time}>
            <div className="text-right text-sm text-gray-500 pr-2">{time}</div>
            {weekDays.map((_, dayIndex) => {
              const date = new Date(startOfWeek)
              date.setDate(startOfWeek.getDate() + dayIndex)
              const eventsForDay = getEventsForDay(date)
              const [hour] = time.split(':').map(Number)
              const eventsForHour = eventsForDay.filter(event => event.start.getHours() === hour)
              return (
                <div key={`${dayIndex}-${time}`} className="border-t border-l min-h-[40px] relative">
                  {eventsForHour.map(event => (
                    <div
                      key={event.id}
                      className="absolute bg-blue-100 border border-blue-300 rounded p-1 text-xs overflow-hidden"
                      style={{
                        top: `${(event.start.getMinutes() / 60) * 100}%`,
                        height: `${((event.end.getTime() - event.start.getTime()) / (30 * 60 * 1000)) * 100}%`,
                        width: '90%',
                      }}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Add New Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input id="title" value={newEvent.title} onChange={handleInputChange} placeholder="Enter event title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea id="description" value={newEvent.description} onChange={handleInputChange} placeholder="Enter event description" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start">Start Time</Label>
                <Input id="start" type="datetime-local" value={newEvent.start} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end">End Time</Label>
                <Input id="end" type="datetime-local" value={newEvent.end} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button type="submit">Add Event</Button>
              <Button type="button" onClick={getAISuggestion} disabled={isLoading}>
                {isLoading ? <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> : null}
                Get AI Suggestion
              </Button>
            </div>
          </form>
          {aiSuggestion && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <h3 className="font-semibold mb-2">AI Suggestion:</h3>
              <p>{aiSuggestion}</p>
            </div>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              onCheckedChange={() => {
                if (!notificationsEnabled) {
                  requestNotificationPermission()
                } else {
                  setNotificationsEnabled(false)
                  toast({
                    title: "Notifications disabled",
                    description: "You will not receive notifications for upcoming events.",
                  })
                }
              }}
            />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {notificationsEnabled
              ? "You will receive notifications for upcoming events."
              : "Enable notifications to receive reminders for upcoming events."}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}