/**
 * Semáforo vectorial colgando de un brazo que sale del borde derecho.
 * La luz roja parpadea lentamente (ver `.lamp` / `.halo` en globals.css).
 */
export default function TrafficLight() {
  return (
    <div className="relative" role="img" aria-label="Semáforo con la luz roja parpadeando">
      {/* Halo rojo detrás del semáforo */}
      <div className="halo pointer-events-none absolute top-[32%] left-[47%] h-[min(110vw,680px)] w-[min(110vw,680px)] rounded-full" />

      {/* Brazo + cables: desde el centro del semáforo hasta el borde derecho */}
      <div className="pointer-events-none absolute top-[1%] left-1/2 h-24 w-[100vw]">
        <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 96" aria-hidden>
          <path d="M0 6 C 260 30, 520 40, 1000 -10" fill="none" stroke="#0b0f17" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          <path d="M0 10 C 300 70, 600 72, 1000 30" fill="none" stroke="#0b0f17" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="absolute top-[2px] left-0 h-[9px] w-full rounded-l-full bg-gradient-to-b from-[#4a5263] via-[#2a303c] to-[#141821] shadow-[0_6px_14px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-0 left-[38%] h-[13px] w-3 rounded-sm bg-[#1b2029]" />
      </div>

      <svg
        className="sway relative block h-[clamp(200px,31svh,320px)] w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
        viewBox="0 0 150 340"
        aria-hidden
      >
        <defs>
          <linearGradient id="tl-body" x1="0" x2="1">
            <stop offset="0" stopColor="#2b313d" />
            <stop offset="0.45" stopColor="#3a4250" />
            <stop offset="1" stopColor="#222731" />
          </linearGradient>
          <linearGradient id="tl-side" x1="0" x2="1">
            <stop offset="0" stopColor="#1a1e26" />
            <stop offset="1" stopColor="#0e1117" />
          </linearGradient>
          <linearGradient id="tl-hood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3d4552" />
            <stop offset="1" stopColor="#1a1e26" />
          </linearGradient>
          <radialGradient id="tl-red" cx="0.42" cy="0.4" r="0.65">
            <stop offset="0" stopColor="#ffe1d2" />
            <stop offset="0.25" stopColor="#ff6a4d" />
            <stop offset="0.7" stopColor="#ff2a17" />
            <stop offset="1" stopColor="#a10f06" />
          </radialGradient>
          <radialGradient id="tl-red-off" cx="0.45" cy="0.4" r="0.7">
            <stop offset="0" stopColor="#4a1410" />
            <stop offset="1" stopColor="#1e0705" />
          </radialGradient>
          <radialGradient id="tl-amber-off" cx="0.45" cy="0.4" r="0.7">
            <stop offset="0" stopColor="#4a3b12" />
            <stop offset="1" stopColor="#191306" />
          </radialGradient>
          <radialGradient id="tl-green-off" cx="0.45" cy="0.4" r="0.7">
            <stop offset="0" stopColor="#163a26" />
            <stop offset="1" stopColor="#06140c" />
          </radialGradient>
          <radialGradient id="tl-glass" cx="0.35" cy="0.3" r="0.5">
            <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <filter id="tl-bloom" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Soporte */}
        <rect x="63" y="0" width="14" height="22" rx="2" fill="#2a303b" />
        <rect x="56" y="18" width="28" height="10" rx="2" fill="#1d222b" />
        <rect x="59" y="26" width="22" height="8" fill="#141821" />

        {/* Cara lateral (profundidad) */}
        <path d="M122 36 L138 46 L138 330 L122 336 Z" fill="url(#tl-side)" />

        {/* Cuerpo */}
        <rect x="18" y="32" width="104" height="304" rx="12" fill="url(#tl-body)" stroke="#11141a" strokeWidth="2" />
        <rect x="24" y="38" width="92" height="292" rx="8" fill="none" stroke="#ffffff" strokeOpacity="0.05" />

        {/* Rojo */}
        <g>
          <circle cx="70" cy="98" r="34" fill="#0b0d12" />
          <circle cx="70" cy="98" r="29" fill="url(#tl-red-off)" />
          <circle className="lamp" cx="70" cy="98" r="29" fill="url(#tl-red)" />
          <circle className="lamp" cx="70" cy="98" r="30" fill="#ff3b22" filter="url(#tl-bloom)" opacity="0.9" />
          <circle cx="70" cy="98" r="29" fill="url(#tl-glass)" />
          <path d="M30 100 A40 40 0 0 1 110 100 L104 100 A34 34 0 0 0 36 100 Z" fill="url(#tl-hood)" />
        </g>

        {/* Ámbar */}
        <g>
          <circle cx="70" cy="184" r="34" fill="#0b0d12" />
          <circle cx="70" cy="184" r="29" fill="url(#tl-amber-off)" />
          <circle cx="70" cy="184" r="29" fill="url(#tl-glass)" opacity="0.5" />
          <path d="M30 186 A40 40 0 0 1 110 186 L104 186 A34 34 0 0 0 36 186 Z" fill="url(#tl-hood)" />
        </g>

        {/* Verde */}
        <g>
          <circle cx="70" cy="270" r="34" fill="#0b0d12" />
          <circle cx="70" cy="270" r="29" fill="url(#tl-green-off)" />
          <circle cx="70" cy="270" r="29" fill="url(#tl-glass)" opacity="0.5" />
          <path d="M30 272 A40 40 0 0 1 110 272 L104 272 A34 34 0 0 0 36 272 Z" fill="url(#tl-hood)" />
        </g>

        {/* Reflejo rojo sobre el cuerpo */}
        <g opacity="0.12">
          <ellipse className="lamp" cx="70" cy="150" rx="46" ry="22" fill="#ff3b22" filter="url(#tl-bloom)" />
        </g>
      </svg>
    </div>
  );
}
