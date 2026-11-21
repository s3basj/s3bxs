/**
 * Paisaje de fondo: cielo, luna o sol, nubes, montañas y luces de la ciudad.
 *
 * Los colores del cielo, montañas, nubes y luces vienen de variables CSS que
 * `lib/sky.ts` ajusta según la hora de Colombia.
 */

function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}
const rand = rng(9);
const warm = ['#ffd49a', '#ffc27c', '#fff0d4', '#ffb36c'];

const bokeh = Array.from({ length: 60 }, (_, i) => {
  const near = rand() < 0.3;
  return {
    id: i,
    x: 200 + rand() * 1200,
    y: 600 + rand() * 190,
    r: near ? 5 + rand() * 8 : 1.6 + rand() * 2.6,
    o: near ? 0.35 + rand() * 0.35 : 0.5 + rand() * 0.45,
    c: warm[Math.floor(rand() * warm.length)],
    near,
  };
});

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: 200 + rand() * 1200,
  y: 80 + rand() * 330,
  r: 0.8 + rand() * 1.5,
  o: 0.35 + rand() * 0.55,
}));

export default function NightScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="200 70 1200 720"
      preserveAspectRatio="xMidYMin slice"
      role="img"
      aria-label="Paisaje de montañas con las luces de la ciudad; el cielo cambia según la hora de Colombia"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--sky-top)' }} />
          <stop offset="0.55" style={{ stopColor: 'var(--sky-mid)' }} />
          <stop offset="1" style={{ stopColor: 'var(--sky-low)' }} />
        </linearGradient>

        {/* Nubes pintadas: ruido convertido en transparencia y teñido con --cloud */}
        <filter id="clouds" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.0022 0.0055" numOctaves="4" seed="4" result="noise" />
          <feColorMatrix
            in="noise"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    1.7 0 0 0 -0.62"
            result="alpha"
          />
          <feFlood style={{ floodColor: 'var(--cloud)' }} result="tint" />
          <feComposite in="tint" in2="alpha" operator="in" />
          <feGaussianBlur stdDeviation="9" />
        </filter>

        <filter id="b2"><feGaussianBlur stdDeviation="2" /></filter>
        <filter id="b4"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="b30" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="30" /></filter>
        <filter id="b60" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="60" /></filter>

        <mask id="moon-cut">
          <circle cx="380" cy="190" r="34" fill="#fff" />
          <circle cx="396" cy="180" r="30" fill="#000" />
        </mask>

      </defs>

      {/* ---------- Cielo ---------- */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" />

      <g style={{ opacity: 'var(--stars)' }}>
        {stars.map((s) => (
          <circle key={s.id} cx={s.x} cy={s.y} r={s.r} fill="#e8ecf4" opacity={s.o} />
        ))}
      </g>

      <g style={{ opacity: 'var(--moon)' }}>
        <circle cx="380" cy="190" r="70" fill="#dfe6f2" opacity="0.12" filter="url(#b30)" />
        <rect x="340" y="150" width="80" height="80" fill="#e6eaf2" mask="url(#moon-cut)" />
      </g>

      <g style={{ opacity: 'var(--sun)', transform: 'translate(var(--sun-x), var(--sun-y))' }}>
        <circle r="150" fill="#fff1c9" opacity="0.45" filter="url(#b60)" />
        <circle r="46" fill="#fff6dc" />
      </g>

      <rect x="0" y="0" width="1600" height="900" filter="url(#clouds)" opacity="0.6" />

      {/* ---------- Montañas y bruma ---------- */}
      <path
        d="M180 560 C 260 470, 360 430, 450 470 S 560 560, 650 590 S 900 560, 1000 520 S 1180 420, 1300 470 S 1400 540, 1420 520 L1420 900 L180 900 Z"
        style={{ fill: 'var(--mount-far)' }}
        filter="url(#b4)"
      />
      <ellipse cx="800" cy="640" rx="760" ry="80" style={{ fill: 'var(--haze)' }} opacity="0.35" filter="url(#b30)" />
      <path
        d="M180 690 C 300 630, 420 650, 540 690 S 820 720, 980 680 S 1260 600, 1420 660 L1420 900 L180 900 Z"
        style={{ fill: 'var(--mount-near)' }}
        filter="url(#b2)"
      />

      {/* Luces de la ciudad (se apagan de día) */}
      <g style={{ opacity: 'var(--lights)' }}>
        {bokeh.map((l) => (
          <circle key={l.id} cx={l.x} cy={l.y} r={l.r} fill={l.c} opacity={l.o} filter={l.near ? 'url(#b2)' : undefined} />
        ))}
      </g>

    </svg>
  );
}
