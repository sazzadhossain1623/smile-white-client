import React from 'react'

function AppointmentOption({ appointmentOption, setTreatment }) {
  const { name, slots, } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
        <div className="card-actions justify-center">
          {/* <button htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</button> */}
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >book appointment</label>
        </div>
      </div>
    </div>
  )
}

export default AppointmentOption