'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, User, Server, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: Home, href: '#inicio' },
  { id: 'proyectos', label: 'Proyectos', icon: Briefcase, href: '#proyectos' },
  { id: 'sobre-mi', label: 'Sobre mí', icon: User, href: '#sobre-mi' },
  { id: 'servicios', label: 'Servicios', icon: Server, href: '#servicios' },
  { id: 'contacto', label: 'Contacto', icon: Mail, href: '#contacto' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-3">
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label={item.label}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`}
                  />

                  {/* Tooltip */}
                  <span
                    className={`absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 ${
                      isActive ? 'opacity-0' : ''
                    }`}
                  >
                    {item.label}
                    <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
