import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CodeQuest',
    description:
      'A low-latency chat app with end-to-end encryption, presence indicators, and message search. Built with WebSockets and a scalable backend.',
    link: 'https://intro-swe-term-project.vercel.app/',
    github: 'https://github.com/Eric-Zhang-Developer/Intro-SWE-Term-Project',
    image: '/CodeQuestThumb.jpg',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Zustand'],
  },
  {
    title: 'StreamStack',
    description:
      'A Chrome extension that unifies watchlists across streaming platforms with a side panel, quick-add buttons, and search/filters. Available on the Chrome Web Store.',
    link: 'https://chromewebstore.google.com/detail/stream-stack/jgadophdmonnggpeknhjhopghlglhhch',
    github: 'https://github.com/emma-coronado/StreamStack',
    image: '/StreamStackThumb.jpg',
    tags: ['JavaScript', 'Tailwind CSS', 'DaisyUI'],
  },
  {
    title: 'Coming Soon',
    description:
      'Coming Soon.',
    link: '#',
    github: '#',
    tags: ['???', '???', '???', '???'],
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
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Projects</h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={p.title}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col"
            >
              <div className={`relative aspect-[16/10] overflow-hidden`}>                
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${gradients[idx % gradients.length]}`}></div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.15),transparent_40%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/0" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { if (p.link) window.open(p.link, '_blank', 'noopener,noreferrer'); }}
                      className="p-0 m-0 bg-transparent border-0"
                      aria-label="Open Live"
                    >
                      <ExternalLink size={18} className="text-white/60 group-hover:text-white" />
                    </button>
                    <button
                      onClick={() => { if (p.github) window.open(p.github, '_blank', 'noopener,noreferrer'); }}
                      className="rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition-colors p-1.5"
                      aria-label="Open GitHub"
                    >
                      <Github size={16} className="text-white/70" />
                    </button>
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
          ))}
        </div>
      </div>
    </section>
  );
}
