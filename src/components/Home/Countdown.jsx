import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-10-27T00:00:00"); // target H-0
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[url('/bg-parchment.jpg')] bg-cover bg-center text-amber-100 font-medieval">
      <div className="flex flex-col items-center justify-center min-h-screen dark:bg-shadow">
        <h1 className="text-3xl sm:text-5xl md:text-7xl mb-8 font-bold tracking-wider text-accent drop-shadow-sm ">
          The Enchanted Day ✨
        </h1>
        <div className="grid grid-cols-4 gap-4 text-center">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="bg-[url('/paper-parchment.png')] bg-center bg-contain md:px-10 md:py-12 sm:py-7 sm:px-5 py-4 px-3 rotate-[-2deg]">
      <p className="text-2xl sm:text-4xl md:text-6xl text-accent font-bold drop-shadow-2xl">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-2 md:text-lg text-[10px] uppercase tracking-widest text-dark">
        {label}
      </p>
    </div>
  );
}
