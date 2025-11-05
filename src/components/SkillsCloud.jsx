import React from 'react';
import { Code } from 'lucide-react';

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'Tailwind CSS',
  'HTML/CSS',
  'Node.js',
  'Git',
  'CI/CD',
  'GitHub Actions',
  'Docker',
  'PostgreSQL',
  'Supabase',
  'Python',
  'SQL',
  'Jira',
  'Java',
  'C++',
];

export default function SkillsCloud() {
  return (
    <section className="relative w-full bg-black py-8 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-rose-500/10 p-2 border border-rose-500/20"><Code className="text-rose-300" size={18} /></span>
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="text-sm md:text-[0.95rem] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/90 hover:bg-white/10 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
