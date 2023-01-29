import React, { useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

function Appointment() {

  const [selectedDate, setSelecteddate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelecteddate={setSelecteddate}
      ></AppointmentBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
    </div>
  )
}

export default Appointment