import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';


const upcomingAppointments = [
    {
        id: 1,
        patientName: 'Dean Ferrera',
        patientImage: '/path/to/profile-image.jpg',
        since: 'Jan, 2021',
        time: '3:00 -> 3:30',
    },
];

export default function UpcomingPatients() {
    return (
        <div>
            <div className="flex items-center rounded-full bg-[#82c6cc]">
                <h2 className="text-2xl font-medium py-6 pl-20 pr-10 text-[#29474a] ">Upcoming Patient</h2>
                <ArrowDownCircleIcon className="h-10 w-10 text-[#29474a] mr-8"/>
            </div>
            {upcomingAppointments.map(appointment => (
            <div key={appointment.id} className="flex items-center mt-6 rounded-2xl bg-white">
                <img src={appointment.patientImage} alt={appointment.patientName} className="w-12 pl-5 h-12 rounded-full mr-4" />
                <div className='py-6 pl-4'>
                    <p className=" font-bold text-l">{appointment.patientName}</p>
                    <p className="text-s">Patient since {appointment.since}</p>
                    <p className="py-2 text-s font-bold">{appointment.time}</p>
                </div>
            </div>
            ))}
        </div>
    );
}
