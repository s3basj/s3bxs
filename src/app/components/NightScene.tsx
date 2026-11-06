/**
 * Escena del semáforo, basada en la ilustración de referencia: caja angosta
 * vista desde abajo a la izquierda, luces dentro de tubos redondos, tubo
 * vertical que atraviesa el brazo y resplandor rojo en la niebla.
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

const INK = '#101215';
const LAMPS = [
  { cy: 254, off: 'url(#lens-red-off)' },
  { cy: 348, off: 'url(#lens-amber-off)' },
  { cy: 442, off: 'url(#lens-green-off)' },
];

export default function NightScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="200 70 1200 720"
      preserveAspectRatio="xMidYMin slice"
      role="img"
      aria-label="Ilustración de un semáforo colgante con la luz roja encendida; el cielo cambia según la hora de Colombia"
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

        {/* Trazo fino de lápiz, apenas irregular */}
        <filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="2" />
          <feDisplacementMap in="SourceGraphic" scale="1.8" />
        </filter>
        <filter id="b2"><feGaussianBlur stdDeviation="2" /></filter>
        <filter id="b4"><feGaussianBlur stdDeviation="4" /></filter>
        <filter id="b30" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="30" /></filter>
        <filter id="b60" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="60" /></filter>

        <mask id="moon-cut">
          <circle cx="380" cy="190" r="34" fill="#fff" />
          <circle cx="396" cy="180" r="30" fill="#000" />
        </mask>

        {/* Metal y caja */}
        <linearGradient id="pipe" x1="0" x2="1">
          <stop offset="0" stopColor="#2a2e34" />
          <stop offset="0.4" stopColor="#5a616b" />
          <stop offset="1" stopColor="#24282d" />
        </linearGradient>
        <linearGradient id="arm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#626a75" />
          <stop offset="0.45" stopColor="#3c424a" />
          <stop offset="1" stopColor="#1f2227" />
        </linearGradient>
        <linearGradient id="front" x1="0" x2="1">
          <stop offset="0" stopColor="#30353c" />
          <stop offset="0.3" stopColor="#4a5059" />
          <stop offset="1" stopColor="#3a3f47" />
        </linearGradient>
        <linearGradient id="front-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="side" x1="0" x2="1">
          <stop offset="0" stopColor="#262a30" />
          <stop offset="1" stopColor="#17191d" />
        </linearGradient>
        <radialGradient id="tube" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#4d535c" />
          <stop offset="1" stopColor="#25292e" />
        </radialGradient>

        {/* Lentes */}
        <radialGradient id="lens-red-on" cx="0.55" cy="0.5" r="0.6">
          <stop offset="0" stopColor="#ffd6c8" />
          <stop offset="0.3" stopColor="#ff6048" />
          <stop offset="0.75" stopColor="#e3261a" />
          <stop offset="1" stopColor="#8c0e08" />
        </radialGradient>
        <radialGradient id="lens-red-off" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#4a1a17" />
          <stop offset="1" stopColor="#1f0908" />
        </radialGradient>
        <radialGradient id="lens-amber-off" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#5c4a1e" />
          <stop offset="1" stopColor="#241b08" />
        </radialGradient>
        <radialGradient id="lens-green-off" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#24432f" />
          <stop offset="1" stopColor="#0b1a10" />
        </radialGradient>

        {LAMPS.map(({ cy }, i) => (
          <clipPath key={cy} id={`tube-in-${i}`}>
            <circle cx="790" cy={cy - 2} r="37" />
          </clipPath>
        ))}
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

      {/* Resplandor rojo en la niebla */}
      <g style={{ opacity: 'var(--glow)' }}>
        <g className="glow">
          <circle cx="792" cy="262" r="250" fill="#ff5a30" opacity="0.32" filter="url(#b60)" />
          <circle cx="792" cy="258" r="135" fill="#ff6a3a" opacity="0.55" filter="url(#b30)" />
        </g>
      </g>

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

      {/* ---------- Brazo, tubo y cables ---------- */}
      <g filter="url(#pencil)">
        <path d="M806 100 C 980 96, 1200 104, 1420 72" fill="none" stroke={INK} strokeWidth="1.6" />
        <path d="M806 116 C 940 150, 1150 205, 1420 196" fill="none" stroke={INK} strokeWidth="1.6" />

        <rect x="772" y="108" width="660" height="12" rx="5" fill="url(#arm)" stroke={INK} strokeWidth="1.5" />
        <rect x="1244" y="104" width="34" height="20" rx="3" fill="url(#arm)" stroke={INK} strokeWidth="1.5" />

        <rect x="794" y="82" width="12" height="108" fill="url(#pipe)" stroke={INK} strokeWidth="1.5" />
        <rect x="789" y="78" width="22" height="8" rx="3" fill="#3a3f46" stroke={INK} strokeWidth="1.5" />
        <circle cx="800" cy="72" r="5" fill="#4a5058" stroke={INK} strokeWidth="1.5" />
        <rect x="788" y="102" width="24" height="24" rx="3" fill="#353a41" stroke={INK} strokeWidth="1.5" />
        <rect x="789" y="160" width="22" height="9" rx="2" fill="#353a41" stroke={INK} strokeWidth="1.5" />
        <rect x="776" y="182" width="48" height="9" rx="2" fill="#2b2f35" stroke={INK} strokeWidth="1.5" />
      </g>

      {/* ---------- Semáforo ---------- */}
      <g filter="url(#pencil)">
        {/* Cara lateral */}
        <path d="M846 192 L896 204 L896 490 L846 500 Z" fill="url(#side)" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
        {/* Frente */}
        <rect x="746" y="190" width="100" height="312" rx="5" fill="url(#front)" stroke={INK} strokeWidth="1.6" />
        <rect x="746" y="190" width="100" height="312" rx="5" fill="url(#front-shade)" />
        <path d="M751 196 L751 496" stroke="#7a828e" strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M846 192 L896 204" stroke="#6a727e" strokeOpacity="0.4" strokeWidth="1.2" />
      </g>

      {/* Luz roja bañando el frente */}
      <g opacity="0.45">
        <ellipse className="lamp" cx="796" cy="262" rx="60" ry="80" fill="#ff4a2a" filter="url(#b30)" style={{ mixBlendMode: 'screen' }} />
      </g>

      {/* Luces dentro de sus tubos */}
      {LAMPS.map(({ cy, off }, i) => (
        <g key={cy}>
          <g filter="url(#pencil)">
            <circle cx="788" cy={cy - 4} r="45" fill="url(#tube)" stroke={INK} strokeWidth="1.6" />
            <circle cx="790" cy={cy - 2} r="37" fill="#111418" stroke={INK} strokeWidth="1.2" />
          </g>
          <g clipPath={`url(#tube-in-${i})`}>
            <circle cx="796" cy={cy + 2} r="34" fill={off} />
            {i === 0 && (
              <g className="lamp">
                <circle cx="796" cy={cy + 2} r="34" fill="url(#lens-red-on)" />
                <path
                  d={`M812 ${cy - 22} A 28 28 0 0 1 812 ${cy + 26} A 34 34 0 0 0 812 ${cy - 22} Z`}
                  fill="#ffc6b8"
                  opacity="0.55"
                />
              </g>
            )}
            {/* Sombra del tubo sobre el vidrio */}
            <path d={`M754 ${cy - 2} A 36 36 0 0 1 790 ${cy - 39} L 790 ${cy - 30} A 30 30 0 0 0 762 ${cy + 4} Z`} fill="#000" opacity="0.35" />
          </g>
          {/* Brillo del borde del tubo */}
          <path d={`M752 ${cy - 14} A 44 44 0 0 1 778 ${cy - 47}`} fill="none" stroke="#8a929e" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
          {i === 0 && (
            <g opacity="0.85" style={{ mixBlendMode: 'screen' }}>
              <circle className="lamp" cx="796" cy={cy + 2} r="40" fill="#ff3a22" filter="url(#b30)" />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
