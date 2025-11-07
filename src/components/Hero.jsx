import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8 md:pt-10 pb-6 md:pb-8 flex flex-col items-start justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">David Shalshin</span>
        </h1>
        <p className="mt-2 max-w-xl text-base md:text-lg text-white/80">
        Software Engineer pursuing my Bachelor's in Computer Science at the University of Florida.
        I build reliable, scalable products with a sharp focus on user experience, turning complex problems into intuitive solutions.
        </p>

        {/* Socials */}
        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/dshal20"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span className="rounded-md border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
              <Github size={18} />
            </span>
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dshalshin/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span className="rounded-md border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
              <Linkedin size={18} />
            </span>
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="mailto:dshalshin20@gmail.com"
            aria-label="Email"
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span className="rounded-md border border-white/10 bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
              <Mail size={18} />
            </span>
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
