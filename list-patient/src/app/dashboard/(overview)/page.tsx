import React from 'react';

export default function Page() {
  const today = new Date();
  const dayOfWeek = today.toLocaleString('default', { weekday: 'long' });
  // Pour mettre la première lettre en majuscule
  const capitalizedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  const dateNumber = today.getDate();
  const meetingsMessage = "Hi Martha, you have s13 meetings today";

  return (
      <div className="font-sans">
          <p className="text-4xl font-bold text-[#2e4f52]">{capitalizedDayOfWeek}</p>
          <p className="text-9xl text-[#2e4f52]">{dateNumber}</p>
          <div className="flex items-center">
              <div className="w-2 h-20 bg-teal-500"></div>
              <p className="ml-4 text-xl">{meetingsMessage}</p>
          </div>
      </div>
  )
}
