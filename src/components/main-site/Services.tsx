'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Sparkles,
  Smartphone,
  Layout,
  PenTool,
  Zap,
  CheckCircle,
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: 'Desarrollo Frontend',
    description: 'Aplicaciones web modernas y escalables con las últimas tecnologías',
    features: [
      'React & Next.js',
      'TypeScript',
      'Responsive Design',
      'Performance Optimization',
      'SEO Friendly',
    ],
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Palette,
    title: 'Diseño UX/UI',
    description: 'Interfaces intuitivas centradas en la experiencia del usuario',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Usability Testing',
      'Responsive Design',
    ],
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Diseño de Marca',
    description: 'Identidades visuales memorables que conectan con tu audiencia',
    features: [
      'Logo Design',
      'Brand Identity',
      'Style Guides',
      'Marketing Materials',
      'Packaging Design',
    ],
    gradient: 'from-orange-400 to-red-500',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Web Progresivas',
    description: 'PWAs que funcionan como apps nativas en cualquier dispositivo',
    features: [
      'Offline Functionality',
      'Push Notifications',
      'Fast Loading',
      'App-like Experience',
      'Cross-platform',
    ],
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'Páginas de aterrizaje optimizadas para conversión',
    features: [
      'High Conversion Design',
      'A/B Testing Ready',
      'Fast Performance',
      'SEO Optimized',
      'Analytics Integration',
    ],
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: PenTool,
    title: 'Consultoría de Diseño',
    description: 'Asesoría experta para mejorar tus productos digitales',
    features: [
      'Design Audit',
      'UX Strategy',
      'Design System Setup',
      'Team Training',
      'Best Practices',
    ],
    gradient: 'from-indigo-400 to-purple-500',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Servicios
            <span className="text-cyan-400">.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas para llevar tu proyecto digital al siguiente nivel
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative element */}
                <div
                  className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-3xl border border-gray-200">
            <Zap className="w-12 h-12 text-cyan-500" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-600 max-w-lg">
              Trabajemos juntos para convertir tu visión en realidad. Conversemos sobre cómo puedo ayudarte.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Iniciar Conversación
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
