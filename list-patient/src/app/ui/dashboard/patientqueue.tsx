
import React from 'react';

const patient = [
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
        <div>
            {patient.map(patients => (
            <div key={patients.id} className="flex items-center mt-6 rounded-2xl bg-white">
                <img src={patients.patientImage} alt={patients.patientName} className="w-12 pl-5 h-12 rounded-full mr-4" />
                <div className='py-6 pl-4'>
                    <p>Patient Queue</p>
                    <p className=" font-bold text-l">{patients.patientName}</p>
                    <p className="py-2 text-s font-bold">{patients.time}</p>
                </div>
            </div>
            ))}
        </div>
    );
}