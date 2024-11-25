// import React, { useState, useEffect } from 'react'
// import '../Appointment.css'
// import CalendarComponent from './CalendarComponent'
// import Calendar from 'react-calendar'
// import './calendar.css'
// import 'react-calendar/dist/Calendar.css'

// type ValuePiece = Date | null
// type Value = ValuePiece | [ValuePiece, ValuePiece]
import CalendarComponent from './CalendarComponent'
// import { Calendar } from "@/components/ui/calendar"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Settings, Bell } from 'lucide-react'
// import Link from "next/link"

export default function Appointment() {
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


// interface Event {
//   start: Date
//   end: Date
//   title: string
// }

// export const Appointment = () => {
//   const [events, setEvents] = useState<Event[]>([])

//   const [value, onChange] = useState<Value>(new Date())
//   console.log(value)

//   useEffect(() => {
//     const exampleEvents: Event[] = [
//       {
//         start: new Date(),
//         end: new Date(new Date().setHours(new Date().getHours() + 1)),
//         title: 'Sample Event',
//       },
//     ]
//     setEvents(exampleEvents)
//   }, [])

//   return (
//     <div className='appointments'>
//       <div className='div-2'>
//         {/* <Group className="group-37" /> */}

//         <div className='calendar-div'>
//           <div className='calendar-div1'>
//             <Calendar onChange={onChange} value={value} />
//           </div>

//           <div className='text-wrapper-6'>Upcomimg Events</div>

//           <div className='frame-2'>
//             <div className='text-wrapper-7'>Missed Appointments</div>

//             <div className='frame-3'>
//               <div className='ellipse' />

//               <div className='ellipse-2' />
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={lilly1} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={vector} /> */}
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={image1} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={image} /> */}
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={lilly12} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={vector2} /> */}
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={lilly13} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={vector3} /> */}
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={lilly14} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={vector4} /> */}
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={lilly15} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={vector5} /> */}
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={lilly16} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={vector6} /> */}
//             </div>

//             <div className='frame-4'>
//               <div className='text-wrapper-8'>Max’s Vaccine</div>

//               <div className='lilly-wrapper'>
//                 {/* <img className="lilly" alt="Lilly" src={lilly17} /> */}
//               </div>

//               <div className='text-wrapper-9'>24/03/2024</div>

//               <div className='button-greys'>
//                 <div className='container'>
//                   <button className='label'>Reschedule</button>
//                 </div>
//               </div>

//               {/* <img className="vector" alt="Vector" src={vector7} /> */}
//             </div>
//           </div>

//           <div className='App'>
//             <header className='App-header'>
//               <h1>.</h1>
//             </header>
//             <main>
//               <CalendarComponent events={events} />
//             </main>
//           </div>

//           {/* <div className="div-3">
//           <div className="text-wrapper-10">Appointments</div>

//           <div className="frame-5">
//             <div className="mon">
//               <div className="text-wrapper-11">Mon</div>

//               <div className="text-wrapper-12">02</div>
//             </div>

//             <div className="text-wrapper-13">09:00</div>

//             <div className="text-wrapper-14">10:00</div>

//             <div className="text-wrapper-15">11:00</div>

//             <div className="text-wrapper-16">12:00</div>

//             <div className="text-wrapper-17">13:00</div>

//             <div className="text-wrapper-18">14:00</div>

//             <div className="text-wrapper-19">15:00</div>

//             <div className="tues">
//               <div className="text-wrapper-12">03</div>

//               <div className="text-wrapper-11">Tues</div>
//             </div>

//             <div className="wed">
//               <div className="text-wrapper-20">04</div>

//               <div className="text-wrapper-11">Wed</div>
//             </div>

//             <div className="thu">
//               <div className="text-wrapper-21">05</div>

//               <div className="text-wrapper-22">Thu</div>
//             </div>

//             <div className="fri">
//               <div className="text-wrapper-23">06</div>

//               <div className="text-wrapper-11">Fri</div>
//             </div>

//             <div className="sat">
//               <div className="text-wrapper-21">07</div>

//               <div className="text-wrapper-11">Sat</div>
//             </div>

//             <div className="overlap-group-2">
//               <div className="UX-research">
//                 <div className="text-wrapper-24">Max’s Vaccine</div>

//                 <div className="text-wrapper-25">
//                   Karisa Veterinary Services
//                 </div>

//                 <div className="text-wrapper-26">10:44 am</div>

//                 <div className="img-wrapper"> */}
//           {/* <img className="lilly-2" alt="Lilly" src={lilly18} /> */}
//           {/* </div>
//               </div>

//               <div className="UX-research-2">
//                 <div className="text-wrapper-27">Angel’s Cleaning</div>

//                 <div className="text-wrapper-28">The Vet Lab</div>

//                 <div className="text-wrapper-29">12:30 pm</div> */}

//           {/* <img className="image" alt="Image" src={image77} /> */}
//           {/* </div>

//               <div className="overlap-3">
//                 <div className="UX-research-3">
//                   <div className="text-wrapper-27">Tisa’s Grooming</div>

//                   <div className="text-wrapper-28">Karisa Pet Grooming</div>

//                   <div className="text-wrapper-30">14:25 pm</div>
//                 </div> */}

//           {/* <img className="image-2" alt="Image" src={image78} /> */}
//           {/* </div>
//             </div>
//           </div> */}

//           {/* <Arrow className="arrow-instance" />
//                     <IconComponentNode className="icon-instance-node" />
//                     <Arrow1 className="arrow-2" /> */}
//           {/* <div className="text-wrapper-31">02 - 08 December</div>

//           <div className="text-wrapper-32">(GMT +06:00) Public Time</div>
//         </div>*/}

//         <div className="UX-research-4">
//           <div className="text-wrapper-33">Max’s Vaccine</div>

//           <div className="text-wrapper-34">10:45 am | Wednesday</div>

//           <div className="img-wrapper"> 
//           {/* <img className="lilly-3" alt="Lilly" src={lilly19} /> */}
//            </div>

//           <div className="frame-6">
//             <div className="ellipse" />

//             <div className="ellipse-2" />
//           </div>
//         </div> 

//           <div className='UX-research-5'>
//             <div className='text-wrapper-33'>Max’s Vaccine</div>

//             <div className='text-wrapper-34'>10:45 am | Wednesday</div>

//             <div className='img-wrapper'>
//               {/* <img className="lilly-3" alt="Lilly" src={lilly110} /> */}
//             </div>

//             <div className='frame-6'>
//               <div className='ellipse' />

//               <div className='ellipse-2' />
//             </div>
//           </div>

//           <div className='UX-research-6'>
//             <div className='text-wrapper-33'>Max’s Vaccine</div>

//             <div className='text-wrapper-34'>10:45 am | Wednesday</div>

//             <div className='img-wrapper'>
//               {/* <img className="lilly-3" alt="Lilly" src={lilly111} /> */}
//             </div>

//             <div className='frame-6'>
//               <div className='ellipse' />

//               <div className='ellipse-2' />
//             </div>
//           </div>

//           <div className='UX-research-7'>
//             <div className='text-wrapper-33'>Max’s Vaccine</div>

//             <div className='text-wrapper-34'>10:45 am | Wednesday</div>

//             <div className='img-wrapper'>
//               {/* <img className="lilly-3" alt="Lilly" src={lilly112} /> */}
//             </div>

//             <div className='frame-6'>
//               <div className='ellipse' />

//               <div className='ellipse-2' />
//             </div>
//           </div>

//           {/* <div className="menu">
//           <div className="frame-7">
//             <div className="group-2"> */}
//           {/* <img className="logo" alt="Logo" src={logo1} /> */}

//           {/* <img className="pet-pal" alt="Pet pal" src={petPal} /> */}
//           {/* </div> */}

//           {/* <div className="frame-8"> */}
//           {/* <img
//                                 className="mynaui-notification"
//                                 alt="Mynaui notification"
//                                 src={mynauiNotificationSolid}
//                             /> */}

//           {/* <div className="frame-9"> */}
//           {/* <img className="lilly-2" alt="Lilly" src={lilly113} /> */}

//           {/* <img
//                                     className="oui-arrow-up"
//                                     alt="Oui arrow up"
//                                     src={ouiArrowUp}
//                                 /> */}
//           {/* </div> */}

//           {/* <img
//                                 className="iconamoon-settings"
//                                 alt="Iconamoon settings"
//                                 src={iconamoonSettingsFill}
//                             /> */}

//           {/* <img
//                                 className="iconamoon-settings-2"
//                                 alt="Iconamoon settings"
//                                 src={iconamoonSettingsFill2}
//                             /> */}
//           {/* </div>
//           </div>
//         </div> */}

//           <div className='group-3'>
//             <div className='overlap-4'>
//               <div className='h-[500px] mt-[200px]'>
//                 <div className='w-[600px] h-full text-[1.5rem] mt-[00px]'>
//                   <p className='p'>
//                     The greatness of a nation and its moral progress can be
//                     judged by the way its animals are treated.
//                   </p>

//                   <div className='frame-12'>
//                     {/* <img
//                                         className="mask-group"
//                                         alt="Mask group"
//                                         src={maskGroup}
//                                     /> */}

//                     <div className='text-wrapper-38'>Mahatma Gandhi</div>
//                   </div>
//                 </div>

//                 {/* <img
//                                 className="dog-high-five-cuate"
//                                 alt="Dog high five cuate"
//                                 src={cuate}
//                             /> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
