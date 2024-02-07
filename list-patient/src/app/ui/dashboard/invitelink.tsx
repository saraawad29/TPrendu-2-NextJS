import React from 'react';
import link from 'next/link';

const infoLink = [
    {
        id: 1,
        link: 'yourclinic.doxy.me/derkgkdf',
        patientImage: './img.png',
    },
];
export default function InviteLink() {
    return (
        <div>
            {infoLink.map(test => (
                <div key={test.id} className="flex items-center mt-6 rounded-2xl bg-white">
                    <img src={test.patientImage} alt='img' className="w-12 pl-5 h-12 rounded-full mr-4" />
                    <p>To invite someone to your room share the link below</p>
                </div>
                ))}
            
        </div>
    );
}
