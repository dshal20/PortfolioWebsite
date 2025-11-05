import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import SkillsCloud from './components/SkillsCloud';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-400/30 selection:text-white">
      <Hero />
      <SkillsCloud />
      <main className="relative">
        <Projects />
        <ExperienceAndEducation />
      </main>
      <footer className="border-t border-white/10 bg-black py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} David Shalshin
      </footer>
    </div>
  );
}
