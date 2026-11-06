/**
 * Colores del cielo según la hora de Colombia (UTC-5, sin horario de verano).
 *
 * `applySky` es autocontenida a propósito: se serializa con `toString()` para
 * correr como script en línea antes del primer pintado (sin parpadeo), y
 * también se llama desde el cliente cada minuto.
 */
export function applySky(now?: Date) {
  const d = now ?? new Date();
  const h = (d.getUTCHours() - 5 + 24) % 24 + d.getUTCMinutes() / 60;

  type Pal = Record<string, string | number>;
  // [hora, paleta]
  const stops: [number, Pal][] = [];
  const night: Pal = {
    'sky-top': '#161d2a', 'sky-mid': '#222b3b', 'sky-low': '#2c3546',
    'cloud': '#3b4659', 'haze': '#2a3242',
    'mount-far': '#1f2734', 'mount-near': '#151b25',
    lights: 1, stars: 1, moon: 1, sun: 0, glow: 1,
  };
  const dawn: Pal = {
    'sky-top': '#334166', 'sky-mid': '#8a7a96', 'sky-low': '#f1a98a',
    'cloud': '#c9a2a6', 'haze': '#f3b79a',
    'mount-far': '#5a5a74', 'mount-near': '#3c3d55',
    lights: 0.55, stars: 0.15, moon: 0.2, sun: 1, glow: 0.6,
  };
  const day: Pal = {
    'sky-top': '#5ea8db', 'sky-mid': '#93c6e8', 'sky-low': '#d6ecf6',
    'cloud': '#ffffff', 'haze': '#e9f4fa',
    'mount-far': '#86a2b8', 'mount-near': '#647f96',
    lights: 0, stars: 0, moon: 0, sun: 1, glow: 0.35,
  };
  const dusk: Pal = {
    'sky-top': '#2f3463', 'sky-mid': '#7b5a83', 'sky-low': '#f08a5d',
    'cloud': '#b9878f', 'haze': '#f09a72',
    'mount-far': '#4f4562', 'mount-near': '#342e48',
    lights: 0.75, stars: 0.25, moon: 0.3, sun: 1, glow: 0.7,
  };
  stops.push([0, night], [5, night], [6.2, dawn], [7.6, day], [16.6, day], [18, dusk], [19.3, night], [24, night]);

  let i = 0;
  while (i < stops.length - 2 && h >= stops[i + 1][0]) i++;
  const [h0, a] = stops[i];
  const [h1, b] = stops[i + 1];
  const t = h1 === h0 ? 0 : Math.min(1, Math.max(0, (h - h0) / (h1 - h0)));

  const hex = (s: string) => [1, 3, 5].map((k) => parseInt(s.slice(k, k + 2), 16));
  const mix = (x: string, y: string) => {
    const p = hex(x);
    const q = hex(y);
    return '#' + p.map((v, k) => Math.round(v + (q[k] - v) * t).toString(16).padStart(2, '0')).join('');
  };

  const root = document.documentElement;
  for (const key of Object.keys(a)) {
    const va = a[key];
    const vb = b[key];
    const val = typeof va === 'number' ? String(va + ((vb as number) - va) * t) : mix(va, vb as string);
    root.style.setProperty('--' + key, val);
  }

  // Sol: recorre el lado izquierdo (sale a las 6, cenit a las 12, se oculta a las 18).
  const p = Math.min(1, Math.max(0, (h - 6) / 12));
  root.style.setProperty('--sun-x', 260 + p * 440 + 'px');
  root.style.setProperty('--sun-y', 580 - Math.sin(p * Math.PI) * 420 + 'px');
  root.dataset.sky = h >= 6.2 && h < 18 ? 'day' : 'night';
}

export const skyInlineScript = `(${applySky.toString()})()`;
