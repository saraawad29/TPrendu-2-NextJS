import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const patients = [
  {
    id: 1,
    patientName: 'Dean Ferrera',
    patientImage: '/path/to/profile-image.jpg',
    time: '8AM',
  },
  {
    id: 2,
    patientName: 'Dean Ferrera',
    patientImage: '/path/to/profile-image.jpg',
    time: '8AM',
  },
];

export default function PatientQueue() {
  return (
    <div className="border-2 border-[#BFDDD9] rounded-xl pt-6 p-2 ml-16  w-60 font-sans">
      <div className="">
        <span className="text-center p-10 font-medium text-xl">Patient Queue</span>
      </div>
      <div className=" h-50">
        {patients.map((patient, i) => (
          <div
            key={patient.id}
            className={clsx('flex flex-row items-center justify-between py-4', {
              'border-t': i !== 0,
            })}
          >
            <div className="flex items-center">
            <p className="hidden text-sm text-gray-500 mr-9 ml-3 sm:block">{patient.time}</p>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold md:text-base">{patient.patientName}</p>
                <Image
                src={patient.patientImage}
                alt={`${patient.patientName}'s profile picture`}
                className="mr-4 rounded-full "
                width={40}
                height={40}
                />

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
