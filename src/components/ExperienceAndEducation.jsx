import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const experience = [
  {
    role: 'Code Coach',
    company: 'theCoderSchool',
    location: 'Syosset, NY',
    period: '2025 — 2025',
    bullets: [
      'Taught students Roblox Studio development using Lua scripting to design interactive games and experiences.',
      'Introduced VR compatibility concepts, guiding students in integrating immersive features into their projects.',
      'Mentored campers in game design principles and problem-solving, fostering creativity and technical skills in a collaborative learning environment.',
    ],
  },
  {
    role: 'NCPD Intern',
    company: 'Nassau County Police Department',
    location: 'Mineola, NY',
    period: '2024 — 2024',
    bullets: [
      'Utilized PeopleSoft to manage payroll, salary data, and purchase orders, ensuring accuracy and compliance with government regulation.',
      'Processed and updated purchase orders for police equipment, maintaining up-to-date records in government systems.',
      'Organized and maintained classified government orders in secure databases, optimizing access and retrieval for authorized personnel.',
    ],
  },
];

// Palette for six dots: light ➜ dark red
const dotPalette = [
  'bg-red-300 ring-red-300/50',
  'bg-red-400 ring-red-400/50',
  'bg-red-500 ring-red-500/50',
  'bg-red-500 ring-red-500/50',
  'bg-red-600 ring-red-600/50',
  'bg-red-700 ring-red-700/50',
];

function getGlobalBulletIndex(jobIndex, bulletIndex) {
  let offset = 0;
  for (let i = 0; i < jobIndex; i++) {
    offset += experience[i].bullets.length;
  }
  return offset + bulletIndex;
}

const education = [
  {
    degree: 'B.S. in Computer Science',
    school: 'University of Florida',
    location: 'Gainesville, FL',
    period: '2022 — 2026',
    details: 'Pursuing a Major in Computer Science with a Minor in Economics.',
  },
];

export default function ExperienceAndEducation() {
  return (
    <section className="relative w-full bg-black py-8 text-white">
      <div className="max-w-4xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-red-500/10 p-2 border border-red-500/20"><Briefcase className="text-red-300" size={18} /></span>
            <h2 className="text-2xl md:text-3xl font-semibold">Work Experience</h2>
          </div>
          <div className="mt-4 space-y-4">
            {experience.map((job, jobIdx) => (
              <div key={job.role + job.company} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-white/80">{job.company}</p>
                  </div>
                  <span className="text-sm text-white/60">{job.period}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-white/60 text-sm">
                  <MapPin size={16} /> {job.location}
                </div>
                <div className="mt-3 relative">
                  <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" />
                  <div className="space-y-3">
                    {job.bullets.map((b, idx) => {
                      const gi = getGlobalBulletIndex(jobIdx, idx);
                      const paletteIdx = Math.min(gi, dotPalette.length - 1);
                      const dotClasses = dotPalette[paletteIdx];
                      return (
                        <div key={idx} className="relative pl-6">
                          <span className={`absolute left-1 top-[0.45rem] h-2 w-2 flex-none rounded-full ${dotClasses} shadow-[0_0_6px_rgba(248,113,113,0.35)]`} />
                          <p className="text-white/80 text-sm leading-relaxed">{b}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-red-600/10 p-2 border border-red-600/20"><GraduationCap className="text-red-400" size={18} /></span>
            <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
          </div>
          <div className="mt-4 space-y-4">
            {education.map((ed) => (
              <div key={ed.school} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{ed.degree}</h3>
                    <p className="text-white/80">{ed.school}</p>
                  </div>
                  <span className="text-sm text-white/60">{ed.period}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-white/60 text-sm">
                  <MapPin size={16} /> {ed.location}
                </div>
                <p className="mt-3 text-white/80 text-sm">{ed.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
