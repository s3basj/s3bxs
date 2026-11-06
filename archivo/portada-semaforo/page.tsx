import { Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import TrafficLight from './components/TrafficLight';
import CityScape from './components/CityScape';

const socialLinks = [
  { icon: Github, href: 'https://github.com/s3basj', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sebastian-jaramillo3/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/s3basj', label: 'Instagram' },
];

const roles = ['Civil Engineer', 'UX/IX Designer', 'Full Stack Developer'];

export default function ComingSoon() {
  return (
    <main className="scene relative flex min-h-svh flex-col items-center overflow-hidden px-4 text-[#eef0f6]">
      <CityScape />

      {/* Semáforo colgando del brazo */}
      <div className="relative z-10 mt-[4svh] flex flex-col items-center">
        <TrafficLight />
      </div>

      {/* Contenido */}
      <section className="fade-up relative z-10 mt-5 flex w-full max-w-3xl flex-col items-center pb-8 text-center md:mt-6">
        <p className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] text-white/70 uppercase backdrop-blur-sm md:text-xs">
          <span className="blink-dot h-2 w-2 rounded-full bg-[#ff3b2f]" aria-hidden />
          Próximamente
        </p>

        <h1 className="text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.95] font-black tracking-tight text-balance">
          Sebastián Jaramillo
        </h1>

        <ul className="mt-4 flex flex-col items-center justify-center gap-x-3 gap-y-1 sm:flex-row text-sm font-medium text-white/65 md:text-lg">
          {roles.map((role, i) => (
            <li key={role} className="flex items-center gap-3">
              {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-[#ff3b2f]/80 sm:block" aria-hidden />}
              {role}
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-md text-sm text-white/50 md:text-base text-balance">
          Mi portafolio está en construcción. Alto un momento: muy pronto le doy luz verde.
        </p>

        <p className="mt-4 flex items-center gap-1.5 text-xs text-white/55 md:text-sm">
          <MapPin className="h-4 w-4 text-[#ff5a47]" aria-hidden />
          San Juan de Pasto, Colombia
        </p>

        <nav aria-label="Redes sociales" className="mt-6 flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/80 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#ff3b2f]/60 hover:bg-[#ff3b2f]/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b2f]"
            >
              <Icon className="h-5 w-5" aria-hidden />
            </a>
          ))}
        </nav>

        <p className="mt-8 text-[11px] tracking-wider text-white/30">
          © {new Date().getFullYear()} Sebastián Jaramillo
        </p>
      </section>
    </main>
  );
}
