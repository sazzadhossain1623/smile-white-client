import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

function Footer() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var monthName = months[date.getMonth()];

        var days = new Array(7);
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";
        var day = days[date.getDay()];

    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className="p-10">
            <div className='footer'>
                <div className='m-auto'>
                    <span className="footer-title">Services</span>
                    <Link to="" className="link link-hover">Monthly Checkup</Link>
                    <Link to="" className="link link-hover">Weekly Checkup</Link>
                    <Link to="" className="link link-hover">Emergency Checkup</Link>
                    <Link to="" className="link link-hover">Deep Checkup</Link>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Company</span>
                    <Link to="" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="" className="link link-hover">Cavity Filling</Link>
                    <Link to="" className="link link-hover">Teeth Whitening</Link>
                    <Link to="" className="link link-hover">Dental Implants</Link>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Gentle Care</span>
                    <Link to="" className="link link-hover">About US</Link>
                    <Link to="" className="link link-hover">Contact US</Link>
                    <Link to="" className="link link-hover">Services</Link>
                    <Link to="" className="link link-hover">Appointment</Link>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p className='bg-red-50 py-2 font-bold'>Copyright © {day}, {monthName} {new Date().getDate()}, {new Date().getFullYear()} || All Rights Reserved by Gentle Care.</p>
            </div>
        </footer>
    )
}

export default Footer;