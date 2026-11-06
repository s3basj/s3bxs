/** Fondo nocturno: niebla, montañas y luces de ciudad desenfocadas. */

// Generador pseudoaleatorio determinista: mismas luces en servidor y cliente.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const rand = rng(42);
const palette = ['#ffd9a0', '#ffc27a', '#fff1d6', '#ffb36b', '#ffe7bf'];

const lights = Array.from({ length: 46 }, (_, i) => {
  const near = rand() < 0.3;
  return {
    id: i,
    left: rand() * 100,
    bottom: 2 + rand() * 20,
    size: near ? 7 + rand() * 9 : 2 + rand() * 4,
    blur: near ? 2 + rand() * 3 : rand() * 1.2,
    opacity: near ? 0.35 + rand() * 0.35 : 0.45 + rand() * 0.5,
    color: palette[Math.floor(rand() * palette.length)],
    twinkle: rand() < 0.35,
    delay: rand() * 6,
    duration: 3 + rand() * 4,
  };
});

export default function CityScape() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Niebla */}
      <div className="fog absolute top-[18%] -left-[20%] h-[45%] w-[80%] rounded-full bg-[#2c3a52]/40 blur-[90px]" />
      <div className="fog fog-slow absolute top-[35%] -right-[25%] h-[50%] w-[85%] rounded-full bg-[#33415a]/35 blur-[100px]" />

      {/* Montañas */}
      <svg className="absolute bottom-0 left-0 h-[48%] w-full" viewBox="0 0 1440 480" preserveAspectRatio="none">
        <path
          d="M0 170 C 140 120, 260 90, 380 140 S 600 230, 760 170 S 1040 60, 1200 120 S 1380 180, 1440 150 L1440 480 L0 480 Z"
          fill="#1a2232"
          opacity="0.75"
        />
        <path
          d="M0 260 C 180 210, 300 250, 470 230 S 760 170, 920 220 S 1220 300, 1440 240 L1440 480 L0 480 Z"
          fill="#131a27"
        />
        <path
          d="M0 360 C 240 330, 420 380, 700 350 S 1180 320, 1440 360 L1440 480 L0 480 Z"
          fill="#0d121c"
        />
      </svg>

      {/* Luces de ciudad */}
      {lights.map((l) => (
        <span
          key={l.id}
          className={`absolute rounded-full ${l.twinkle ? 'twinkle' : ''}`}
          style={{
            left: `${l.left}%`,
            bottom: `${l.bottom}%`,
            width: l.size,
            height: l.size,
            background: l.color,
            opacity: l.opacity,
            filter: `blur(${l.blur}px)`,
            boxShadow: `0 0 ${l.size * 2}px ${l.color}`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.duration}s`,
          }}
        />
      ))}

      {/* Viñeta */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,7,12,0.65)_100%)]" />
    </div>
  );
}
