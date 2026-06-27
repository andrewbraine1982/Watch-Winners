"use client";

import { useEffect, useRef, useState } from "react";

function Counter({
  end,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="stats-number">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">

        <div className="stat-card">
          <Counter end={24} prefix="£" suffix="M+" />
          <p>PRIZES AWARDED</p>
        </div>

        <div className="stat-card">
          <Counter end={8700} suffix="+" />
          <p>VERIFIED WINNERS</p>
        </div>

        <div className="stat-card">
          <Counter end={100} suffix="%" />
          <p>LIVE DRAWS</p>
        </div>

        <div className="stat-card">
          <Counter end={49} suffix="★" />
          <p>TRUSTPILOT</p>
        </div>

      </div>
    </section>
  );
}
