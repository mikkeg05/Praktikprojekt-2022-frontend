/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react"
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"

export const CalendarComponent = () => (
  <FullCalendar
    plugins={[interactionPlugin, timeGridPlugin]}
    initialView='timeGridWeek'
    nowIndicator={true}
    editable={true}
    initialEvents={[{ title: "nice event", start: new Date() }]
  }
  />
)
