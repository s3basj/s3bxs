'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, MapPin, Construction } from 'lucide-react';
import Image from 'next/image';

export default function ComingSoon() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/s3basj',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sebastian-jaramillo3/',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/s3basj',
      label: 'Instagram'
    }
  ];

  return (
    <div className="h-screen bg-[#f2f2f3] flex flex-col items-center justify-between py-12 md:py-16 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Top section - Name and info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center space-y-8 z-10 w-full max-w-6xl mt-4"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#343537] tracking-tighter italic leading-tight">
          SEBASTIÁN JARAMILLO
        </h1>

        {/* Roles in one line */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-base md:text-lg lg:text-xl text-[#343537]/70 font-medium">
          <span>Civil Engineer</span>
          <span className="text-cyan-500">|</span>
          <span>UX/IX Designer</span>
          <span className="text-cyan-500">|</span>
          <span>Full Stack Developer</span>
        </div>

        {/* Under Construction Badge - wider container */}
        <div className="inline-flex items-center gap-4 md:gap-5 bg-[#343537] text-[#f2f2f3] px-12 py-4 md:px-16 md:py-5 rounded-full shadow-lg">
          <Construction className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-pulse" />
          <span className="text-base md:text-xl font-bold tracking-wide">EN CONSTRUCCIÓN</span>
          <Construction className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-pulse" />
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-sm md:text-base text-[#343537]/70 pt-2">
          <MapPin className="w-4 h-4 text-cyan-500" />
          <span>San Juan de Pasto, Colombia</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 md:gap-7 pt-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-1.5"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#343537] flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 shadow-md group-hover:shadow-lg">
                <social.icon className="w-5 h-5 md:w-5.5 md:h-5.5 text-[#f2f2f3]" />
              </div>
              <span className="text-xs font-medium text-[#343537]/70 group-hover:text-[#343537] transition-colors">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer Message */}
        <p className="text-[#343537]/50 text-xs md:text-sm pt-6">
          Trabajando en algo increíble. Vuelve pronto.
        </p>
      </motion.div>

      {/* Bottom section - Person image anchored to bottom - NO AURA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[52vh] flex-shrink-0 -mb-6 md:-mb-8 lg:-mb-12"
      >
        {/* Person image - clean, no glow effects */}
        <div className="relative w-full h-full">
          <Image
            src="/img/one.png"
            alt="Sebastián Jaramillo"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}