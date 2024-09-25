"use client"

import { useState, ChangeEvent } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { UploadIcon, XIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif']

export default function AICalendarScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [eventTitle, setEventTitle] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([])
  const [calendarImage, setCalendarImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [notification, setNotification] = useState<{ title: string; description: string; type: 'success' | 'error' } | null>(null)

  const handleSchedule = () => {
    const mockSuggestions = [
      "How about scheduling this event for tomorrow at 2 PM?",
      "I noticed you have a free slot next Monday at 10 AM.",
      "Based on your usual routine, Wednesday at 3 PM might be a good time.",
    ]
    setAiSuggestions(mockSuggestions)
  }

  const validateImage = (file: File): boolean => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setNotification({
        title: "Invalid file type",
        description: "Please upload a JPEG, PNG, or GIF image.",
        type: "error"
      })
      return false
    }
    if (file.size > MAX_FILE_SIZE) {
      setNotification({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        type: "error"
      })
      return false
    }
    return true
  }

  const simulateServerUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) { // 90% success rate
          resolve(URL.createObjectURL(file))
        } else {
          reject(new Error("Server error"))
        }
      }, 1500) // Simulate network delay
    })
  }

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && validateImage(file)) {
      setIsUploading(true)
      try {
        const imageUrl = await simulateServerUpload(file)
        setCalendarImage(imageUrl)
        setNotification({
          title: "Image uploaded successfully",
          description: "Your calendar background has been updated.",
          type: "success"
        })
      } catch (error) {
        setNotification({
          title: "Upload failed",
          description: "There was an error uploading your image. Please try again.",
          type: "error"
        })
      } finally {
        setIsUploading(false)
      }
    }
  }

  const handleRemoveImage = () => {
    setCalendarImage(null)
    setNotification({
      title: "Image removed",
      description: "Your calendar background has been reset.",
      type: "success"
    })
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-4xl mx-auto">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {calendarImage && (
              <img
                src={calendarImage}
                alt="Uploaded calendar background"
                className="absolute inset-0 w-full h-full object-cover rounded-md opacity-25"
              />
            )}
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border bg-white bg-opacity-90"
            />
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="calendar-image" className="block text-sm font-medium text-gray-700">
              Upload Calendar Image
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="calendar-image"
                type="file"
                accept="image/jpeg,image/png,image/gif"
                onChange={handleImageUpload}
                disabled={isUploading}
                className="sr-only"
              />
              <Label
                htmlFor="calendar-image"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <UploadIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                {isUploading ? "Uploading..." : calendarImage ? "Change Image" : "Upload Image"}
              </Label>
              {calendarImage && (
                <Button
                  onClick={handleRemoveImage}
                  variant="destructive"
                  size="sm"
                  className="flex items-center"
                >
                  <XIcon className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Max file size: 5MB. Supported formats: JPEG, PNG, GIF
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="flex-1 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Schedule Event</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-title">Event Title</Label>
                <Input
                  id="event-title"
                  placeholder="Enter event title"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-description">Event Description</Label>
                <Textarea
                  id="event-description"
                  placeholder="Enter event description"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                />
              </div>
              <Button onClick={handleSchedule} type="button">Get AI Suggestions</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px] rounded-md border p-4">
              {aiSuggestions.length > 0 ? (
                <ul className="space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="bg-secondary p-2 rounded-md">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">
                  No suggestions yet. Fill out the event details and click "Get AI Suggestions" to receive scheduling recommendations.
                </p>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      {notification && (
        <Alert className="fixed bottom-4 right-4 max-w-md" variant={notification.type === 'error' ? 'destructive' : 'default'}>
          <AlertTitle>{notification.title}</AlertTitle>
          <AlertDescription>{notification.description}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}