'use client';

import { useEffect, useState } from 'react';

/** Hora actual de Colombia, al día cada 30 segundos. */
export default function SkyClock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'America/Bogota',
    });
    const tick = () => setTime(fmt.format(new Date()));
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
