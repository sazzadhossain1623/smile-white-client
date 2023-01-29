import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

function MakeAppointment() {
    return (
        <section className='mt-32' style={{background: `url(${appointment})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 lg:w-1/2 hidden md:block rounded-lg shadow-2xl" />
                    <div>
                        <h3 className='pb-2 text-xl font-bold text-primary'>Appointment</h3>
                        <h1 className="text-4xl font-bold text-white">Make an Appointment Today!</h1>
                        <p className="py-2 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeAppointment