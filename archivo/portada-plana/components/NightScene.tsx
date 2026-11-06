/**
 * Escena nocturna en ilustración plana: formas geométricas, colores sólidos
 * y sombras largas. La luz roja "respira" con `.lamp` / `.glow` (globals.css).
 */

// Pseudoaleatorio determinista para que servidor y cliente coincidan.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}
const rand = rng(21);

const stars = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  x: 200 + rand() * 1200,
  y: 80 + rand() * 340,
  r: 1.2 + rand() * 1.8,
  twinkle: rand() < 0.4,
  delay: rand() * 5,
}));

// Silueta de ciudad: edificios con ventanas
type Building = { x: number; w: number; h: number; windows: { x: number; y: number; lit: boolean; warm: boolean; blink: boolean; delay: number }[] };
const buildings: Building[] = [];
{
  let x = 180;
  while (x < 1420) {
    const w = 46 + Math.floor(rand() * 60);
    const h = 70 + Math.floor(rand() * 150);
    const windows: Building['windows'] = [];
    for (let wy = 790 - h + 16; wy < 772; wy += 22) {
      for (let wx = x + 10; wx < x + w - 14; wx += 18) {
        windows.push({
          x: wx,
          y: wy,
          lit: rand() < 0.32,
          warm: rand() < 0.75,
          blink: rand() < 0.08,
          delay: rand() * 8,
        });
      }
    }
    buildings.push({ x, w, h, windows });
    x += w + 4 + Math.floor(rand() * 18);
  }
}

const LAMPS = [
  { cy: 250, off: '#4a1f22' },
  { cy: 344, off: '#4d3f1d' },
  { cy: 438, off: '#1c3d30' },
];

export default function NightScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="200 70 1200 720"
      preserveAspectRatio="xMidYMin slice"
      role="img"
      aria-label="Ilustración de un semáforo de noche con la luz roja encendiéndose suavemente"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2536" />
          <stop offset="1" stopColor="#2a3850" />
        </linearGradient>
      </defs>

      {/* ---------- Cielo ---------- */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" />

      {/* Resplandor plano: anillos concéntricos */}
      <g className="glow">
        <circle cx="800" cy="250" r="330" fill="#ff5a4a" opacity="0.05" />
        <circle cx="800" cy="250" r="230" fill="#ff5a4a" opacity="0.07" />
        <circle cx="800" cy="250" r="140" fill="#ff5a4a" opacity="0.1" />
      </g>

      {stars.map((s) => (
        <circle
          key={s.id}
          className={s.twinkle ? 'twinkle' : undefined}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#f2f2f3"
          opacity="0.75"
          style={s.twinkle ? { animationDelay: `${s.delay}s`, animationDuration: '4s' } : undefined}
        />
      ))}

      {/* Luna creciente */}
      <g>
        <circle cx="380" cy="190" r="46" fill="#f2f2f3" />
        <circle cx="402" cy="176" r="42" fill="#1e2939" />
      </g>

      {/* ---------- Montañas ---------- */}
      <path d="M180 600 L360 470 L470 545 L620 430 L780 560 L900 480 L1060 590 L1200 460 L1340 540 L1420 500 L1420 900 L180 900 Z" fill="#2c3b54" />
      <path d="M180 650 L330 570 L520 640 L700 560 L880 650 L1080 575 L1260 640 L1420 590 L1420 900 L180 900 Z" fill="#24314a" />

      {/* ---------- Ciudad ---------- */}
      <g>
        {buildings.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={790 - b.h} width={b.w} height={b.h + 20} fill={i % 3 === 0 ? '#1a2335' : '#1d2739'} />
            {b.windows.map((w, j) =>
              w.lit ? (
                <rect
                  key={j}
                  className={w.blink ? 'window-blink' : undefined}
                  x={w.x}
                  y={w.y}
                  width="8"
                  height="10"
                  rx="1"
                  fill={w.warm ? '#ffcf7a' : '#00d4ff'}
                  opacity={w.warm ? 0.8 : 0.7}
                  style={w.blink ? { animationDelay: `${w.delay}s` } : undefined}
                />
              ) : null,
            )}
          </g>
        ))}
        <rect x="180" y="772" width="1240" height="40" fill="#151c2a" />
      </g>

      {/* ---------- Brazo y cables ---------- */}
      <path d="M800 158 C 980 190, 1200 205, 1420 150" fill="none" stroke="#11161f" strokeWidth="3" />
      <path d="M806 162 C 1000 240, 1250 245, 1420 210" fill="none" stroke="#11161f" strokeWidth="2.5" />
      <rect x="784" y="104" width="640" height="20" rx="4" fill="#343537" />
      <rect x="784" y="104" width="640" height="6" rx="3" fill="#4a4c50" />
      <rect x="1120" y="98" width="24" height="32" rx="4" fill="#2a2b2e" />
      <rect x="776" y="96" width="30" height="36" rx="6" fill="#2a2b2e" />
      <rect x="790" y="124" width="20" height="36" fill="#2a2b2e" />

      {/* ---------- Semáforo ---------- */}
      {/* Sombra larga a 45° */}
      <path d="M892 168 L1592 868 L1408 1232 L708 532 Z" fill="#000" opacity="0.12" />

      {/* Placa de fondo con borde cian */}
      <rect x="708" y="168" width="184" height="364" rx="22" fill="#26282b" stroke="#00d4ff" strokeWidth="5" />

      {/* Cuerpo */}
      <rect x="738" y="186" width="124" height="328" rx="18" fill="#343537" />
      <rect x="738" y="186" width="62" height="328" rx="18" fill="#3c3e42" />
      <rect x="770" y="186" width="30" height="328" fill="#3c3e42" />
      <rect x="770" y="160" width="60" height="26" rx="5" fill="#2a2b2e" />

      {LAMPS.map(({ cy, off }, i) => (
        <g key={cy}>
          <circle cx="800" cy={cy} r="42" fill="#1f2023" />
          <circle cx="800" cy={cy} r="33" fill={off} />
          {i === 0 && <circle className="lamp" cx="800" cy={cy} r="33" fill="#ff4d3d" />}
          {/* Brillo plano */}
          <path
            d={`M778 ${cy - 6} A 24 24 0 0 1 804 ${cy - 26}`}
            fill="none"
            stroke="#fff"
            strokeOpacity={i === 0 ? 0.55 : 0.18}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  );
}
