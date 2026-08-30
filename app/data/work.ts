export type WorkType = 'video' | 'full-stack' | 'design'

export type WorkProject = {
  id: string
  type: WorkType
  typeLabel: string
  title: string
  description: string
  mediaLabel: string
  embedUrl?: string
  url?: string
  details: {
    year: string
    role: string
    tools: string[]
    overview: string
    deliverables: string[]
  }
}

export type WorkCategory = {
  index: string
  slug: string
  title: string
  description: string
  projects: WorkProject[]
}

export const projectCategories: WorkCategory[] = [
  {
    index: '01',
    slug: 'video-editing',
    title: 'Video Editing',
    description: '',
    projects: [
      {
        id: 'video-01',
        type: 'video',
        typeLabel: 'Video Editing',
        title: 'GODS & GODDESSES',
        description: 'A culture-led visual essay shaped around atmosphere, heritage, and human stories.',
        mediaLabel: 'VIDEO',
        embedUrl: 'https://www.youtube-nocookie.com/embed/S0USpwBarKE',
        url: 'https://youtu.be/S0USpwBarKE',
        details: {
          year: '2026',
          role: 'Editor / visual storyteller',
          tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
          overview: 'A project direction for a cinematic cultural piece. The edit can move from quiet detail to a stronger emotional reveal, using image rhythm, music, and typography to make the story feel intimate and memorable.',
          deliverables: ['Story edit', 'Motion titles', 'Sound direction', 'Final video export'],
        },
      },
      {
        id: 'video-02',
        type: 'video',
        typeLabel: 'Video Editing',
        title: 'HISTORY & ORIGIN',
        description: 'A documentary-style edit that turns history into a clear, visual narrative.',
        mediaLabel: 'VIDEO',
        embedUrl: 'https://www.youtube-nocookie.com/embed/V-bSnXeT12g',
        url: 'https://youtu.be/V-bSnXeT12g',
        details: {
          year: '2026',
          role: 'Documentary editor / director',
          tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
          overview: 'A direction for an origin story with a documentary pulse. The structure uses archival feeling, paced interviews, graphic context, and a warm sound bed to guide viewers through place, people, and memory.',
          deliverables: ['Documentary cut', 'Context graphics', 'Sound design', 'Social cutdowns'],
        },
      },
      {
        id: 'video-03',
        type: 'video',
        typeLabel: 'Video Editing',
        title: 'TRAILER STUDY 03',
        description: 'Dummy project entry — a high-energy trailer system for a story that needs a sharp first impression.',
        mediaLabel: 'DUMMY REEL',
        details: {
          year: '2026',
          role: 'Editor / motion designer',
          tools: ['Premiere Pro', 'After Effects'],
          overview: 'Placeholder detail for a future trailer or campaign edit. Replace this section with the real brief, edit decisions, and final result.',
          deliverables: ['Trailer edit', 'Kinetic typography', 'Sound mix'],
        },
      },
    ],
  },
  {
    index: '02',
    slug: 'full-stack',
    title: 'Full Stack',
    description: 'Thoughtful interfaces backed by reliable systems and clean code.',
    projects: [
      {
        id: 'stack-01',
        type: 'full-stack',
        typeLabel: 'Full Stack',
        title: 'MB STUDIO AE',
        description: 'Full-stack development repository for the MB Studio AE project.',
        mediaLabel: 'GITHUB REPO',
        url: 'https://github.com/mridulvarman/mb-studio-ae',
        details: {
          year: '2026',
          role: 'Full-stack developer',
          tools: ['Vue.js', 'Nuxt.js', 'Node.js'],
          overview: 'A full-stack repository containing the source code and configuration for MB Studio AE.',
          deliverables: ['Interface system', 'API layer', 'Responsive build'],
        },
      },
      {
        id: 'stack-02',
        type: 'full-stack',
        typeLabel: 'Full Stack',
        title: 'API WORKFLOW 02',
        description: 'Dummy project entry — replace with the problem you solved and its outcome.',
        mediaLabel: 'CASE STUDY',
        details: {
          year: '2026',
          role: 'Full-stack developer',
          tools: ['JavaScript', 'REST APIs', 'Database Integration'],
          overview: 'Placeholder detail for a workflow that connects a focused frontend to structured data, authentication, and useful automation.',
          deliverables: ['Frontend build', 'REST API', 'Data integration'],
        },
      },
      {
        id: 'stack-03',
        type: 'full-stack',
        typeLabel: 'Full Stack',
        title: 'CLIENT PORTAL 03',
        description: 'Dummy project entry — replace with the users, features, and measurable result.',
        mediaLabel: 'CASE STUDY',
        details: {
          year: '2026',
          role: 'Full-stack developer',
          tools: ['Nuxt.js', 'Tailwind CSS', 'Git'],
          overview: 'Placeholder detail for a practical web application that gives a team a faster, clearer way to work.',
          deliverables: ['Component architecture', 'Access control', 'Deployment-ready UI'],
        },
      },
    ],
  },
  {
    index: '03',
    slug: 'designs',
    title: 'Designs',
    description: 'Visual systems, motion-led concepts, and identities with a point of view.',
    projects: [
      {
        id: 'design-01',
        type: 'design',
        typeLabel: 'Designs',
        title: 'IDENTITY STUDY 01',
        description: 'Dummy project entry — replace with the idea, deliverables, and visual direction.',
        mediaLabel: 'DESIGN STUDY',
        details: {
          year: '2026',
          role: 'Visual designer',
          tools: ['Figma', 'After Effects'],
          overview: 'Placeholder detail for a visual identity designed to give a new idea a distinctive, flexible point of view.',
          deliverables: ['Identity direction', 'Layout system', 'Motion language'],
        },
      },
      {
        id: 'design-02',
        type: 'design',
        typeLabel: 'Designs',
        title: 'MOTION SYSTEM 02',
        description: 'Dummy project entry — replace with the brief and the final visual language.',
        mediaLabel: 'DESIGN STUDY',
        details: {
          year: '2026',
          role: 'Motion designer',
          tools: ['After Effects', 'Figma', 'Premiere Pro'],
          overview: 'Placeholder detail for a motion-first design system that gives interfaces, stories, and campaigns a shared rhythm.',
          deliverables: ['Motion principles', 'Transitions', 'Prototype studies'],
        },
      },
      {
        id: 'design-03',
        type: 'design',
        typeLabel: 'Designs',
        title: 'CAMPAIGN FRAME 03',
        description: 'Dummy project entry — replace with the campaign idea and the visual outcome.',
        mediaLabel: 'DESIGN STUDY',
        details: {
          year: '2026',
          role: 'Visual storyteller',
          tools: ['Figma', 'DaVinci Resolve'],
          overview: 'Placeholder detail for a campaign concept built to connect a strong visual hook with a story people can follow.',
          deliverables: ['Concept frames', 'Key visuals', 'Social formats'],
        },
      },
    ],
  },
]
