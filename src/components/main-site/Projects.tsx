'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type ProjectCategory = 'all' | 'frontend' | 'uxui' | 'branding';

interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  description: string;
  image: string;
  tags: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: ['frontend'],
    description: 'Plataforma moderna de comercio electrónico con carrito de compras y pasarela de pagos integrada.',
    image: '/img/one.png', // Placeholder
    tags: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    id: '2',
    title: 'Brand Identity - Tech Startup',
    category: ['branding'],
    description: 'Identidad de marca completa para startup tecnológica, incluyendo logo, paleta de colores y guía de estilo.',
    image: '/img/one.png', // Placeholder
    tags: ['Branding', 'Logo Design', 'Style Guide'],
  },
  {
    id: '3',
    title: 'Banking App Redesign',
    category: ['uxui'],
    description: 'Rediseño de experiencia de usuario para aplicación bancaria móvil, mejorando la usabilidad y accesibilidad.',
    image: '/img/one.png', // Placeholder
    tags: ['Figma', 'UX Research', 'Prototyping', 'Mobile'],
  },
  {
    id: '4',
    title: 'Dashboard Analytics',
    category: ['frontend', 'uxui'],
    description: 'Panel de control interactivo para análisis de datos con visualizaciones en tiempo real.',
    image: '/img/one.png', // Placeholder
    tags: ['React', 'D3.js', 'TypeScript', 'Charts'],
    links: {
      live: '#',
    },
  },
  {
    id: '5',
    title: 'Coffee Shop Branding',
    category: ['branding'],
    description: 'Creación de identidad visual para cafetería artesanal, incluyendo packaging y material promocional.',
    image: '/img/one.png', // Placeholder
    tags: ['Packaging', 'Print Design', 'Brand Strategy'],
  },
  {
    id: '6',
    title: 'Fitness Tracking App',
    category: ['frontend', 'uxui'],
    description: 'Aplicación web para seguimiento de ejercicios y nutrición con interfaz intuitiva y gamificación.',
    image: '/img/one.png', // Placeholder
    tags: ['Vue.js', 'Tailwind', 'UX/UI', 'PWA'],
    links: {
      github: '#',
    },
  },
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'uxui', label: 'UX/UI Design' },
  { id: 'branding', label: 'Branding' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-white">
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
            Proyectos
            <span className="text-cyan-400">.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos en desarrollo frontend, diseño UX/UI y branding
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover links */}
                {project.links && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-cyan-400 hover:text-white transition-colors duration-300"
                        aria-label="Ver proyecto"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-cyan-400 hover:text-white transition-colors duration-300"
                        aria-label="Ver código"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                )}
              </div>

              {/* Project info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
