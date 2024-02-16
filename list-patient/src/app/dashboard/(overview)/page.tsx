import React from 'react';
import UpcomingAppointments from '../../ui/dashboard/upcomingPatients';
import { Suspense } from 'react';
import PatientQueue from '../../ui/dashboard/patientqueue';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const today = new Date();
  const dayOfWeek = today.toLocaleString('default', { weekday: 'long' });
  // Pour mettre la première lettre en majuscule
  const capitalizedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  const dateNumber = today.getDate();

  return (
        <div className="font-sans flex flex-row">
          <div className='flex flex-col ml-10'>
            <p className="text-4xl font-bold text-[#2e4f52]">{capitalizedDayOfWeek}</p>
            <p className="text-9xl text-[#2e4f52]">{dateNumber}</p>
            <div className="flex items-center">
                <div className="w-2 h-20 bg-teal-500"></div>
                <p className="ml-4 text-s font-bold">Hi Martha, you<br/> have{' '}
                <span className="text-gray-500">13 meetings</span> {' '} <br />today
                </p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div className='ml-60'>
                <Suspense fallback={<UpcomingAppointments />}>
                  <UpcomingAppointments />
                </Suspense>
              </div>
              <div className=''>
                <Suspense fallback={<PatientQueue />}>
                <PatientQueue />
                </Suspense>
              </div>
            </div>
            <div className='flex flex-row text-center ml-80 mt-10'>
              <p className='font-bold ml-60 text-xl '>More</p>
              <ChevronDownIcon className=" flex h-5 mr-6 w-12 mt-2 text-[#82c6cc]" />
            </div>
          </div>
    </div>
  )
}
