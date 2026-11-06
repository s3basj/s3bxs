import { Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import NightScene from './components/NightScene';

const socialLinks = [
  { icon: Github, href: 'https://github.com/s3basj', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sebastian-jaramillo3/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/s3basj', label: 'Instagram' },
];

const roles = ['Ingeniero Civil', 'Diseñador UX/IX', 'Desarrollador Full Stack'];

export default function ComingSoon() {
  return (
    <main className="paper relative flex min-h-svh flex-col items-center px-4 pt-4 pb-10 text-[#343537] md:px-8 md:pt-6">
      {/* Barra superior */}
      <header className="reveal mb-4 flex w-full max-w-6xl items-center justify-between rounded-full border border-[#343537]/10 bg-white/60 px-5 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur md:mb-5">
        <span className="font-pixel text-sm tracking-wider">S3BXS</span>
        <span className="font-pixel flex items-center gap-2 text-[11px] text-[#343537]/70 md:text-xs">
          <span className="blink-dot h-2 w-2 rounded-full bg-[#00d4ff]" aria-hidden />
          En construcción
        </span>
      </header>

      {/* Ventana con la ilustración */}
      <div className="reveal relative w-full max-w-6xl [animation-delay:120ms]">
        <div className="rounded-[26px] bg-[#343537] p-2 shadow-[0_30px_60px_-20px_rgba(52,53,55,0.55),0_10px_20px_-10px_rgba(52,53,55,0.4)] md:rounded-[34px] md:p-3">
          <div className="relative h-[min(58svh,640px)] min-h-[340px] overflow-hidden rounded-[19px] ring-1 ring-white/10 md:rounded-[24px]">
            <NightScene />
          </div>
        </div>

        {/* Globo de cómic */}
        <div className="bubble absolute -bottom-12 left-1/2 w-[min(80vw,330px)] -translate-x-1/2 md:-translate-x-[105%]">
          <div className="relative -rotate-[5deg]">
            <svg className="absolute -top-[46px] right-6 h-[52px] w-[46px]" viewBox="0 0 46 52" aria-hidden>
              <path d="M6 50 L40 2 L30 50 Z" fill="#fff" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
              <path d="M4 50 L34 50" stroke="#fff" strokeWidth="6" />
            </svg>
            <div className="rounded-[10px] border-[3px] border-[#111] bg-white px-5 py-3 text-center shadow-[5px_5px_0_#111]">
              <p className="font-marker text-[17px] leading-tight text-[#111] md:text-xl">
                ¡Alto! Estoy construyendo algo nuevo
              </p>
              <p className="font-marker mt-0.5 text-sm text-[#00a9cc]">vuelve pronto :)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Datos */}
      <section className="reveal mt-20 flex w-full max-w-4xl flex-col items-center text-center [animation-delay:240ms] md:mt-24">
        <h1 className="text-[clamp(2.4rem,8.5vw,6.5rem)] leading-[0.9] font-black tracking-tighter text-balance italic">
          SEBASTIÁN JARAMILLO
        </h1>

        <ul className="mt-5 flex flex-col items-center gap-1 text-base font-medium text-[#343537]/70 sm:flex-row sm:gap-3 md:text-xl">
          {roles.map((role, i) => (
            <li key={role} className="flex items-center gap-3">
              {i > 0 && <span className="hidden text-[#00d4ff] sm:inline" aria-hidden>|</span>}
              {role}
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center gap-2 text-sm text-[#343537]/70 md:text-base">
          <MapPin className="h-4 w-4 text-[#00b8e0]" aria-hidden />
          San Juan de Pasto, Colombia
        </p>

        <nav aria-label="Redes sociales" className="mt-7 flex gap-5 md:gap-7">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 focus-visible:outline-none"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#343537] text-[#f2f2f3] shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#00d4ff] group-hover:text-[#343537] group-hover:shadow-[0_8px_20px_-6px_rgba(0,212,255,0.7)] group-focus-visible:ring-2 group-focus-visible:ring-[#00d4ff] group-focus-visible:ring-offset-2">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-medium text-[#343537]/60 transition-colors group-hover:text-[#343537]">
                {label}
              </span>
            </a>
          ))}
        </nav>

        <p className="mt-9 text-xs text-[#343537]/50 md:text-sm">Trabajando en algo increíble. Vuelve pronto.</p>
        <p className="font-pixel mt-2 text-[10px] text-[#343537]/35">© {new Date().getFullYear()} Sebastián Jaramillo</p>
      </section>
    </main>
  );
}
