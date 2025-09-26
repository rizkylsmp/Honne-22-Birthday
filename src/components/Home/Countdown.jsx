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
    <div className="flex flex-col items-center justify-center min-h-screen  font-mono">
      <h1 className="text-3xl md:text-5xl mb-8 font-bold tracking-widest text-accent">
        Shevy’s Day ✨
      </h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="bg-accent dark:bg-accent-darker p-4 rounded-xl shadow-lg">
      <p className="text-4xl md:text-6xl font-bold text-accent-lighter">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-light">
        {label}
      </p>
    </div>
  );
}
