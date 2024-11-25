import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Settings, Bell } from 'lucide-react'
import Link from "next/link"

export default function PetCalendar() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="PetPal Logo" className="h-8 w-8" />
            <span className="font-semibold">PetPal</span>
          </Link>
          <nav className="flex items-center space-x-6 ml-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">Overview</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Health</Link>
            <Link href="#" className="text-primary font-medium">Appointments</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Community</Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Bell className="h-5 w-5" />
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Pet profile" />
              <AvatarFallback>MP</AvatarFallback>
            </Avatar>
            <Settings className="h-5 w-5" />
          </div>
        </div>
      </header>

      <main className="container px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Missed Appointments */}
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Missed Appointments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Pet" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Max's Vaccine</div>
                      <div className="text-xs text-muted-foreground">25/10/2024</div>
                    </div>
                    <Button variant="outline" size="sm">Reschedule</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Calendar */}
          <div className="col-span-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Appointments</CardTitle>
                  <p className="text-sm text-muted-foreground">02 - 08 December</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Time slots */}
                  <div className="grid grid-cols-6 gap-4">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                      <div key={day} className="text-center">
                        <div className="text-sm font-medium">{day}</div>
                        <div className="text-xs text-muted-foreground">{i + 2}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Appointments */}
                  <div className="space-y-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <div className="font-medium">Max's Vaccine</div>
                      <div className="text-sm text-muted-foreground">10:44 am</div>
                    </div>
                    <div className="rounded-lg bg-green-100 p-2">
                      <div className="font-medium">Angel's Cleaning</div>
                      <div className="text-sm text-muted-foreground">12:30 pm</div>
                    </div>
                    <div className="rounded-lg bg-blue-100 p-2">
                      <div className="font-medium">Tisa's Grooming</div>
                      <div className="text-sm text-muted-foreground">14:25 pm</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side */}
          <div className="col-span-3 space-y-6">
            {/* Mini Calendar */}
            <Card>
              <CardContent className="p-0">
                <Calendar
                  mode="single"
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-accent/50 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Pet" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">Max's Vaccine</div>
                      <div className="text-xs text-muted-foreground">9:45 am Wednesday</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quote Card */}
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <blockquote className="space-y-2">
                  <p className="text-sm">
                    "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    - Mahatma Gandhi
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

