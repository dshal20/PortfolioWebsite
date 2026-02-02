import React from 'react';
import { ExternalLink, Github, Trophy } from 'lucide-react';
import { Folder } from 'lucide-react';

const projects = [
  {
    title: 'StudyVerse',
    description:
      'A real-time, multiplayer virtual campus with built-in voice chat that makes studying feel shared through presence, movement, and casual social interaction.',
    link: 'https://swamphacks-xi-project.vercel.app/',
    github: 'https://github.com/dshal20/StudyVerse',
    video: '/StudyVerseThumb.mp4',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    dateRange: 'Jan 2025 - Swamphacks',
    award: '1st Place — Swamphacks (Creative Media track)',
  },
  {
    title: 'StreamStack',
    description:
      'A Chrome extension that unifies watchlists across streaming platforms with a side panel, quick-add buttons, and search/filters. Available on the Chrome Web Store.',
    link: 'https://chromewebstore.google.com/detail/stream-stack/jgadophdmonnggpeknhjhopghlglhhch',
    github: 'https://github.com/emma-coronado/StreamStack',
    video: '/StreamStackThumbVid.mp4',
    tags: ['JavaScript', 'Tailwind CSS', 'DaisyUI'],
    dateRange: 'Sept 2025 - Oct 2025',
  },
  {
    title: 'CodeQuest',
    description:
      'A gamified coding platform with story-based challenges, instant feedback, hints, solutions, and attempt tracking. Earn streaks, XP, badges, and review progress on a dashboard.',
    link: 'https://intro-swe-term-project.vercel.app/',
    github: 'https://github.com/Eric-Zhang-Developer/Intro-SWE-Term-Project',
    image: '/CodeQuestThumb.jpg',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Zustand'],
    dateRange: 'Aug 2025 - Nov 2025',
  },

  {
    title: 'Gale-Shapley Visualizer',
    description:
      'Interactive visualizer of the Gale–Shapley stable matching algorithm with animated steps, speed control, and real-time results.',
    link: 'https://github.com/dshal20/Gale-Shapley-Visualization',
    github: 'https://github.com/dshal20/Gale-Shapley-Visualization',
    video: '/GSThumbVid.mp4',
    tags: ['Visx', 'Framer Motion', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    dateRange: 'Sept 2025 - Oct 2025',
  },
  {
    title: 'NightGuard',
    description: 'The future of venue security. Real-time alerts, shared intel.',
    link: '',
    github: '',
    tags: ['Coming soon'],
  },
];

const gradients = [
  'from-red-600/30 via-red-500/20 to-red-700/30',
  'from-red-500/30 via-red-600/20 to-rose-600/30',
  'from-rose-600/30 via-red-600/20 to-red-700/30',
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-8 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-rose-500/10 p-2 border border-rose-500/20"><Folder className="text-rose-300" size={18} /></span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Projects</h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...projects, { placeholder: true, id: 'placeholder-1' }, { placeholder: true, id: 'placeholder-2' }].map((item) => {
            if (item.placeholder) {
              return <div key={item.id} className="min-h-0" aria-hidden />;
            }
            const p = item;
            return (
              <div
                key={p.title}
                className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {p.video ? (
                    <video
                      src={p.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/5 text-white/40 text-sm font-medium">
                      Coming soon
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.15),transparent_40%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/0" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      {p.dateRange && (
                        <p className="text-xs text-white/50 mt-1">{p.dateRange}</p>
                      )}
                      {p.award && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-rose-300">
                          <Trophy className="h-3.5 w-3.5 shrink-0 text-rose-400" strokeWidth={2.25} />
                          <span>{p.award}</span>
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {p.link && (
                        <button
                          onClick={() => window.open(p.link, '_blank', 'noopener,noreferrer')}
                          className="p-0 m-0 bg-transparent border-0"
                          aria-label="Open Live"
                        >
                          <ExternalLink size={18} className="text-white/60 group-hover:text-white" />
                        </button>
                      )}
                      {p.github && (
                        <button
                          onClick={() => window.open(p.github, '_blank', 'noopener,noreferrer')}
                          className="rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition-colors p-1.5"
                          aria-label="Open GitHub"
                        >
                          <Github size={16} className="text-white/70" />
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-white/70 flex-1">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full bg-red-500/10 text-red-300 border border-red-500/20 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
