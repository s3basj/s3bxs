/**
 * Ilustración nocturna estilo cómic/tinta: cielo pintado, montañas, luces de
 * ciudad y un semáforo colgante con trazos irregulares. Todo es vectorial.
 * La luz roja parpadea con las clases `.lamp` / `.halo` de globals.css.
 */

// Pseudoaleatorio determinista para que servidor y cliente coincidan.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}
const rand = rng(7);
const warm = ['#ffd59a', '#ffc078', '#fff0d2', '#ffb168', '#ffe3b5'];
const lights = Array.from({ length: 90 }, (_, i) => {
  const near = rand() < 0.25;
  return {
    id: i,
    x: rand() * 1600,
    y: 545 + rand() * 230,
    r: near ? 6 + rand() * 9 : 1.5 + rand() * 3,
    o: near ? 0.3 + rand() * 0.35 : 0.5 + rand() * 0.5,
    c: warm[Math.floor(rand() * warm.length)],
    near,
    twinkle: rand() < 0.3,
    delay: rand() * 6,
    dur: 3 + rand() * 4,
  };
});

const INK = '#0b0c10';
const LAMPS = [
  { cy: 252, off: 'url(#off-red)' },
  { cy: 344, off: 'url(#off-amber)' },
  { cy: 436, off: 'url(#off-green)' },
];

export default function NightScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="200 70 1200 720"
      preserveAspectRatio="xMidYMin slice"
      role="img"
      aria-label="Ilustración de un semáforo de noche con la luz roja parpadeando"
    >
      <defs>
        {/* Cielo */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b3548" />
          <stop offset="0.55" stopColor="#1b2231" />
          <stop offset="1" stopColor="#10141d" />
        </linearGradient>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff5a3c" stopOpacity="0.75" />
          <stop offset="0.35" stopColor="#ff4a30" stopOpacity="0.28" />
          <stop offset="1" stopColor="#ff4a30" stopOpacity="0" />
        </radialGradient>

        {/* Cuerpo del semáforo */}
        <linearGradient id="body" x1="0" x2="1">
          <stop offset="0" stopColor="#3b414c" />
          <stop offset="0.4" stopColor="#4a515d" />
          <stop offset="1" stopColor="#2c3139" />
        </linearGradient>
        <linearGradient id="side" x1="0" x2="1">
          <stop offset="0" stopColor="#23272f" />
          <stop offset="1" stopColor="#15181d" />
        </linearGradient>
        <linearGradient id="hood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4f5662" />
          <stop offset="1" stopColor="#262a32" />
        </linearGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5d6573" />
          <stop offset="0.5" stopColor="#3a404b" />
          <stop offset="1" stopColor="#1e2229" />
        </linearGradient>

        {/* Lentes */}
        <radialGradient id="on-red" cx="0.42" cy="0.38" r="0.65">
          <stop offset="0" stopColor="#fff0e6" />
          <stop offset="0.18" stopColor="#ff8a6a" />
          <stop offset="0.6" stopColor="#ff2e1c" />
          <stop offset="1" stopColor="#b01208" />
        </radialGradient>
        <radialGradient id="off-red" cx="0.42" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#5a1a14" />
          <stop offset="1" stopColor="#250806" />
        </radialGradient>
        <radialGradient id="off-amber" cx="0.42" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#5e4a1a" />
          <stop offset="1" stopColor="#1f1707" />
        </radialGradient>
        <radialGradient id="off-green" cx="0.42" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#1f4a33" />
          <stop offset="1" stopColor="#08170f" />
        </radialGradient>

        {/* Rayado de sombra estilo cómic */}
        <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-40)">
          <line x1="0" y1="0" x2="0" y2="7" stroke={INK} strokeWidth="1.4" strokeOpacity="0.55" />
        </pattern>
        <clipPath id="body-clip">
          <rect x="738" y="168" width="124" height="344" rx="12" />
        </clipPath>

        {/* Trazo de tinta irregular */}
        <filter id="ink" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="3.2" />
        </filter>
        {/* Textura de pintura para nubes */}
        <filter id="clouds" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.0028 0.006" numOctaves="4" seed="11" />
          <feColorMatrix
            values="0 0 0 0 0.42
                    0 0 0 0 0.48
                    0 0 0 0 0.6
                    0 0 0 1.25 -0.45"
          />
          <feGaussianBlur stdDeviation="6" />
        </filter>
        {/* Grano de papel */}
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <filter id="blur-sm"><feGaussianBlur stdDeviation="2.5" /></filter>
        <filter id="blur-md"><feGaussianBlur stdDeviation="10" /></filter>
        <filter id="blur-lg"><feGaussianBlur stdDeviation="30" /></filter>
      </defs>

      {/* ---------- Fondo ---------- */}
      <rect width="1600" height="900" fill="url(#sky)" />
      <rect className="drift" width="1600" height="900" filter="url(#clouds)" opacity="0.5" />
      <circle className="halo" cx="800" cy="300" r="430" fill="url(#halo)" />

      {/* Montañas */}
      <g filter="url(#ink)" transform="translate(0 -60)">
        <path d="M0 600 C 160 540, 300 500, 450 560 S 700 650, 880 590 S 1180 470, 1360 540 S 1540 600, 1600 570 L1600 900 L0 900 Z" fill="#1d2534" stroke={INK} strokeOpacity="0.5" strokeWidth="2.5" />
        <path d="M0 690 C 200 640, 360 690, 540 660 S 860 600, 1040 650 S 1360 720, 1600 660 L1600 900 L0 900 Z" fill="#151b27" stroke={INK} strokeOpacity="0.6" strokeWidth="2.5" />
      </g>
      <ellipse cx="800" cy="640" rx="900" ry="70" fill="#3a4659" opacity="0.35" filter="url(#blur-lg)" />

      {/* Luces de ciudad */}
      {lights.map((l) => (
        <circle
          key={l.id}
          className={l.twinkle ? 'twinkle' : undefined}
          cx={l.x}
          cy={l.y}
          r={l.r}
          fill={l.c}
          opacity={l.o}
          filter={l.near ? 'url(#blur-sm)' : undefined}
          style={l.twinkle ? { animationDelay: `${l.delay}s`, animationDuration: `${l.dur}s` } : undefined}
        />
      ))}

      {/* ---------- Brazo y cables ---------- */}
      <g filter="url(#ink)">
        <path d="M805 150 C 1000 175, 1250 200, 1640 120" fill="none" stroke={INK} strokeWidth="2.6" />
        <path d="M812 156 C 1050 240, 1350 250, 1640 190" fill="none" stroke={INK} strokeWidth="2.2" />
        <rect x="780" y="104" width="880" height="22" rx="4" fill="url(#metal)" stroke={INK} strokeWidth="3" />
        <path d="M800 110 L1640 110" stroke="#8a93a3" strokeOpacity="0.45" strokeWidth="2" />
        <rect x="1150" y="98" width="26" height="34" rx="4" fill="#2a2f38" stroke={INK} strokeWidth="3" />
        <rect x="772" y="96" width="26" height="38" rx="5" fill="#2f343d" stroke={INK} strokeWidth="3" />

        {/* Soporte */}
        <rect x="789" y="126" width="22" height="34" fill="url(#metal)" stroke={INK} strokeWidth="3" />
        <rect x="770" y="152" width="60" height="18" rx="3" fill="#2a2f38" stroke={INK} strokeWidth="3" />
        <circle cx="780" cy="161" r="3" fill="#7d8594" />
        <circle cx="820" cy="161" r="3" fill="#7d8594" />
      </g>

      {/* ---------- Semáforo ---------- */}
      <g className="sway">
        {/* Sombra proyectada suave */}
        <rect x="748" y="186" width="150" height="340" rx="16" fill="#000" opacity="0.35" filter="url(#blur-md)" />

        <g filter="url(#ink)">
          {/* Cara lateral */}
          <path d="M860 176 L888 192 L888 500 L860 512 Z" fill="url(#side)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <path d="M860 176 L888 192 L888 500 L860 512 Z" fill="url(#hatch)" />
          {/* Cuerpo */}
          <rect x="738" y="168" width="124" height="344" rx="12" fill="url(#body)" stroke={INK} strokeWidth="3.5" />
        </g>

        {/* Sombreado rayado y desgaste dentro del cuerpo */}
        <g clipPath="url(#body-clip)">
          <rect x="828" y="160" width="40" height="360" fill="url(#hatch)" opacity="0.8" />
          <rect x="738" y="480" width="124" height="40" fill="url(#hatch)" opacity="0.6" />
          <path d="M748 182 L852 182" stroke="#fff" strokeOpacity="0.12" strokeWidth="2" />
          <g filter="url(#ink)" stroke={INK} strokeOpacity="0.45" strokeWidth="1.4" fill="none">
            <path d="M752 300 l10 -4" />
            <path d="M846 392 l-8 6 l-3 -2" />
            <path d="M756 486 l14 2" />
            <path d="M840 214 l6 10" />
          </g>
        </g>

        {/* Reflejo rojo sobre el cuerpo */}
        <g opacity="0.3" style={{ mixBlendMode: 'screen' }}>
          <ellipse className="lamp" cx="800" cy="300" rx="70" ry="60" fill="#ff4a30" filter="url(#blur-md)" />
        </g>

        {/* Lentes con viseras */}
        {LAMPS.map(({ cy, off }, i) => (
          <g key={cy}>
            <circle cx="800" cy={cy} r="40" fill="#0f1116" stroke={INK} strokeWidth="3" filter="url(#ink)" />
            <circle cx="800" cy={cy} r="33" fill={off} />
            {i === 0 && (
              <>
                <circle className="lamp" cx="800" cy={cy} r="33" fill="url(#on-red)" />
                <g opacity="0.85" style={{ mixBlendMode: 'screen' }}>
                  <circle className="lamp" cx="800" cy={cy} r="44" fill="#ff3a22" filter="url(#blur-md)" />
                </g>
              </>
            )}
            {/* Brillo del vidrio */}
            <path d={`M778 ${cy - 10} Q 786 ${cy - 26} 804 ${cy - 28}`} fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
            <circle cx="812" cy={cy + 14} r="3" fill="#fff" opacity="0.25" />
            {/* Visera */}
            <g filter="url(#ink)">
              <path
                d={`M752 ${cy + 4} A48 48 0 0 1 848 ${cy + 4} L 858 ${cy + 16} A60 58 0 0 0 742 ${cy + 16} Z`}
                fill="url(#hood)"
                stroke={INK}
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d={`M752 ${cy + 4} A48 48 0 0 1 848 ${cy + 4}`} fill="none" stroke={INK} strokeWidth="2" />
              <path d={`M770 ${cy - 34} A48 48 0 0 1 830 ${cy - 34}`} fill="none" stroke="#fff" strokeOpacity="0.15" strokeWidth="2" />
            </g>
          </g>
        ))}
      </g>

      {/* Grano y viñeta */}
      <rect width="1600" height="900" filter="url(#grain)" opacity="0.07" style={{ mixBlendMode: 'overlay' }} />
      <rect width="1600" height="900" fill="url(#vignette)" />
      <defs>
        <radialGradient id="vignette" cx="0.5" cy="0.45" r="0.75">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.55" />
        </radialGradient>
      </defs>
    </svg>
  );
}
