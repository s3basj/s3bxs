'use client';

import { useEffect, useState } from 'react';
import { applySky } from '../lib/sky';

/** Mantiene el cielo sincronizado con la hora de Colombia y muestra la hora. */
export default function SkyClock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'America/Bogota',
    });
    const tick = () => {
      const now = new Date();
      applySky(now);
      setTime(fmt.format(now));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} aria-live="off">
      {time ? `${time} · Colombia` : ' '}
    </span>
  );
}
