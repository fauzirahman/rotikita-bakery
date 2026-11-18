"use client";

import { useEffect, useState } from "react";

function getTimeLeft() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const remaining = Math.max(0, end.getTime() - now.getTime());

  return {
    hours: Math.floor(remaining / 3_600_000),
    minutes: Math.floor((remaining % 3_600_000) / 60_000),
    seconds: Math.floor((remaining % 60_000) / 1_000),
  };
}

export function PromoCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const items = [
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div
      aria-label={`Sisa waktu demo: ${items
        .map((item) => `${item.value} ${item.label.toLowerCase()}`)
        .join(", ")}`}
      className="mt-5 flex gap-2"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="min-w-[58px] rounded-md bg-ink px-3 py-2 text-center text-cream"
        >
          <span className="block font-display text-[22px] leading-6">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-wide text-footer-text">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
