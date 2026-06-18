"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  numeric: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { numeric: 10,  suffix: "+",  label: "Years of Excellence" },
  { numeric: 119, suffix: "K+", label: "Followers on Facebook" },
  { numeric: 7,   suffix: "+",  label: "Kishore Kumar Tribute Seasons" },
  { numeric: 2,   suffix: "",   label: "Iconic IPs Owned by Theism" },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({ stat, triggered }: { stat: Stat; triggered: boolean }) {
  const count = useCountUp(stat.numeric, 1800, triggered);
  return (
    <div className="px-8 py-10 text-center">
      <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2 tabular-nums">
        {count}
        {stat.suffix}
      </p>
      <p className="text-zinc-500 text-xs uppercase tracking-widest leading-relaxed">
        {stat.label}
      </p>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800 divide-y md:divide-y-0"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} triggered={triggered} />
      ))}
    </div>
  );
}
