import Image from 'next/image';
import { ChevronDown, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import NightScene from './components/NightScene';
import Reveal from './components/Reveal';

const socialLinks = [
  { icon: Github, href: 'https://github.com/s3basj', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sebastian-jaramillo3/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/s3basj', label: 'Instagram' },
];

const roles = ['Ingeniero Civil', 'Diseñador UX/IX', 'Desarrollador Full Stack'];

function Tape({ reverse = false, className = '' }: { reverse?: boolean; className?: string }) {
  const items = Array.from({ length: 8 });
  return (
    <div className={`tape overflow-hidden border-y-[3px] border-[#111] py-2 ${className}`} aria-hidden>
      <div className={`marquee flex w-max ${reverse ? 'marquee-reverse' : ''}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {items.map((_, i) => (
              <span key={i} className="font-pixel flex items-center gap-4 px-4 text-sm whitespace-nowrap text-[#111] md:text-base">
                En construcción <span className="text-lg">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComingSoon() {
  return (
    <main className="paper overflow-x-clip text-[#343537]">
      {/* ---------- Pantalla 1: escena ---------- */}
      <section className="flex h-svh min-h-[560px] flex-col px-4 pt-4 pb-4 md:px-8 md:pt-6 md:pb-6">
        <header className="reveal mx-auto mb-4 flex w-full max-w-7xl items-center justify-between rounded-full border border-[#343537]/10 bg-white/60 px-5 py-2.5 backdrop-blur md:mb-5">
          <span className="font-pixel text-sm tracking-wider">S3BXS</span>
          <span className="font-pixel flex items-center gap-2 text-[11px] text-[#343537]/70 md:text-xs">
            <span className="blink-dot h-2 w-2 rounded-full bg-[#00d4ff]" aria-hidden />
            En construcción
          </span>
        </header>

        <div className="reveal relative mx-auto w-full max-w-7xl flex-1 [animation-delay:120ms]">
          <div className="h-full rounded-[26px] bg-[#343537] p-2 shadow-[0_30px_60px_-20px_rgba(52,53,55,0.55),0_10px_20px_-10px_rgba(52,53,55,0.4)] md:rounded-[34px] md:p-3">
            <div className="relative h-full overflow-hidden rounded-[19px] ring-1 ring-white/10 md:rounded-[24px]">
              <NightScene />
              <a
                href="#alto"
                className="font-pixel absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center text-[11px] text-white/70 transition hover:text-[#00d4ff]"
              >
                Desliza
                <ChevronDown className="nudge h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pantalla 2: ¡Alto! ---------- */}
      <section id="alto" className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden py-24">
        <Tape className="absolute top-[12%] left-[-5%] w-[110%] -rotate-3" />

        <Reveal className="relative z-10 px-4">
          <div className="relative -rotate-[4deg]">
            {/* Cola del globo apuntando al semáforo */}
            <svg className="absolute -top-[86px] left-[58%] h-[92px] w-[70px]" viewBox="0 0 70 92" aria-hidden>
              <path d="M8 90 L58 2 L44 90 Z" fill="#fff" stroke="#111" strokeWidth="4" strokeLinejoin="round" />
              <path d="M5 90 L48 90" stroke="#fff" strokeWidth="8" />
            </svg>
            <div className="max-w-[640px] rounded-[16px] border-[4px] border-[#111] bg-white px-7 py-8 text-center shadow-[10px_10px_0_#111] md:px-14 md:py-12">
              <p className="font-marker text-[clamp(3.5rem,13vw,7.5rem)] leading-none text-[#111]">
                ¡Alto!
              </p>
              <p className="font-marker mt-3 text-[clamp(1.35rem,4.2vw,2.4rem)] leading-tight text-[#111]">
                Estoy construyendo algo nuevo
              </p>
              <p className="font-marker mt-4 text-lg text-[#00a9cc] md:text-2xl">vuelve pronto :)</p>
            </div>
          </div>
        </Reveal>

        <Tape reverse className="absolute bottom-[12%] left-[-5%] w-[110%] rotate-2" />
      </section>

      {/* ---------- Pantalla 3: contacto ---------- */}
      <section className="relative flex min-h-svh items-end overflow-hidden px-6 pt-20 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl items-end gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="self-center pb-6 text-center md:pb-24 md:text-left">
            <Reveal>
              <p className="font-pixel mb-4 text-xs text-[#00a9cc] md:text-sm">Hola, soy</p>
              <h1 className="text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[0.9] font-black tracking-tighter italic">
                SEBASTIÁN
                <br />
                JARAMILLO
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-6 flex flex-col items-center gap-1 text-base font-medium text-[#343537]/70 md:flex-row md:flex-wrap md:items-center md:gap-3 md:text-xl">
                {roles.map((role, i) => (
                  <li key={role} className="flex items-center gap-3">
                    {i > 0 && <span className="hidden text-[#00d4ff] md:inline" aria-hidden>|</span>}
                    {role}
                  </li>
                ))}
              </ul>

              <p className="mt-5 flex items-center justify-center gap-2 text-sm text-[#343537]/70 md:justify-start md:text-base">
                <MapPin className="h-4 w-4 text-[#00b8e0]" aria-hidden />
                San Juan de Pasto, Colombia
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <nav aria-label="Redes sociales" className="mt-8 flex justify-center gap-5 md:justify-start md:gap-7">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1.5 focus-visible:outline-none"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#343537] text-[#f2f2f3] shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#00d4ff] group-hover:text-[#343537] group-hover:shadow-[0_8px_20px_-6px_rgba(0,212,255,0.7)] group-focus-visible:ring-2 group-focus-visible:ring-[#00d4ff] group-focus-visible:ring-offset-2">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-xs font-medium text-[#343537]/60 transition-colors group-hover:text-[#343537]">
                      {label}
                    </span>
                  </a>
                ))}
              </nav>

              <p className="mt-10 text-xs text-[#343537]/50 md:text-sm">Trabajando en algo increíble. Vuelve pronto.</p>
              <p className="font-pixel mt-2 text-[10px] text-[#343537]/35">© {new Date().getFullYear()} Sebastián Jaramillo</p>
            </Reveal>
          </div>

          {/* Foto anclada abajo */}
          <Reveal y={40} delay={0.15} className="relative mx-auto h-[min(62svh,640px)] w-full max-w-[420px] md:h-[min(82svh,780px)] md:max-w-none">
            <div className="absolute bottom-[12%] left-1/2 aspect-square w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.28),rgba(0,212,255,0)_68%)]" aria-hidden />
            <Image
              src="/img/one.png"
              alt="Sebastián Jaramillo"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-contain object-bottom"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
