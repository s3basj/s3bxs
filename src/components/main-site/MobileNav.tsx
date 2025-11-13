'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, User, Server, Mail, Menu, X } from 'lucide-react';
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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-40 lg:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                {/* Logo/Name */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-black text-gray-900">
                    Sebastián
                    <span className="text-cyan-400">.</span>
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Full Stack Developer
                  </p>
                </motion.div>

                {/* Navigation items */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;

                      return (
                        <motion.li
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                        >
                          <button
                            onClick={() => handleNavClick(item.href, item.id)}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                              isActive
                                ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                          </button>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <p className="text-xs text-gray-500 text-center">
                    © {new Date().getFullYear()} Sebastián Jaramillo
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
