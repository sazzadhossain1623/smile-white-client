import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

function AppointmentBanner({ selectedDate, setSelecteddate }) {

    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelecteddate}
                        />
                    </div>
                </div>

            </div>
            {/* <h2 className='text-center text-2xl font-bold'>The selected date is: <span className='text-primary'>{format(selectedDate, 'PP')}</span></h2> */}
        </header>
    )
}

export default AppointmentBanner