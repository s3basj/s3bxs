'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Ruler, Coffee, Lightbulb, Users } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Desarrollo Frontend',
    description: 'Especializado en React, Next.js, TypeScript y frameworks modernos para crear aplicaciones web escalables.',
  },
  {
    icon: Palette,
    title: 'Diseño UX/UI',
    description: 'Creación de interfaces intuitivas centradas en el usuario con herramientas como Figma y Adobe XD.',
  },
  {
    icon: Ruler,
    title: 'Ingeniería Civil',
    description: 'Pensamiento estructurado y análisis detallado aplicado a soluciones digitales.',
  },
  {
    icon: Lightbulb,
    title: 'Diseño de Marca',
    description: 'Desarrollo de identidades visuales coherentes que comunican la esencia de cada proyecto.',
  },
];

const stats = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos completados' },
  { value: '15+', label: 'Clientes satisfechos' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
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
            Sobre mí
            <span className="text-cyan-400">.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Combinando ingeniería, diseño y desarrollo para crear experiencias digitales que importan
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Soy un profesional multidisciplinario con una <strong className="text-gray-900">pasión por crear soluciones digitales</strong> que combinan funcionalidad, estética y experiencia de usuario excepcional.
              </p>
              <p>
                Mi formación como <strong className="text-cyan-500">Ingeniero Civil</strong> me ha enseñado a pensar de manera estructurada y analítica, habilidades que aplico en cada proyecto de desarrollo y diseño.
              </p>
              <p>
                Me especializo en el <strong className="text-cyan-500">desarrollo frontend</strong> con tecnologías modernas como React y Next.js, el <strong className="text-cyan-500">diseño UX/UI</strong> centrado en el usuario, y la creación de <strong className="text-cyan-500">identidades de marca</strong> memorables.
              </p>
              <p>
                Creo firmemente que la mejor tecnología es aquella que se vuelve invisible para el usuario, permitiéndole enfocarse en lo que realmente importa: <strong className="text-gray-900">lograr sus objetivos</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-cyan-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Tecnologías y Herramientas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'Figma',
              'Adobe XD',
              'Illustrator',
              'Photoshop',
              'Git',
              'Framer Motion',
              'PostgreSQL',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-500 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
