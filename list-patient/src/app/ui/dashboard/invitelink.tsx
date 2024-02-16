import React from 'react';
import link from 'next/link';

const infoLink = [
    {
        id: 1,
        link: 'yourclinic.doxy.me/derkgkdf',
        patientImage: '/img.jpg',
    },
];
export default function InviteLink() {
    return (
        <div>
            {infoLink.map(test => (
                <div key={test.id} className="flex items-center ml-40">
                    <img src={test.patientImage} alt='img' className="h-80" />
                    <div className='flex flex-col ml-60'>
                        <p className=" mb-20 text-4xl text-center">To invite{' '}
                        <span className="text-gray-500">someone to your room<br/> share the link below</span>
                        </p>
                        <div className='text-black text-xl rounded-full bg-[#EBF6F5] pt-5 pb-5 pl-8 w-[600px]'>
                            <a href={test.link} target='_blank' rel='noopener noreferrer'>{test.link}</a>
                        </div>
                    </div>
                </div>
                ))}   
        </div>
    );
}
