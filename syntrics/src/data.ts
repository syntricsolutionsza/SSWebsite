import { ServiceItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 's1',
    title: 'Native Android Development',
    description: 'We build high-performance, responsive native Android apps using modern Kotlin, Jetpack Compose, and robust background syncing engines. Our focus is on seamless offline capability, local encryption, and optimal battery usage.',
    iconName: 'smartphone',
    tags: ['Kotlin', 'Compose', 'Offline-First', 'SQLite'],
    approach: 'Our mobile engineering process prioritizes battery longevity, zero-lag UI frames, and rock-solid local storage. We treat connectivity drops as a standard design state, not an error.',
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Architecture & State Design',
        details: 'Define unidirectional data flows using Kotlin StateFlow, establish local SQLite schemas, and choreograph offline sync queues.'
      },
      {
        phase: 'Phase 02',
        title: 'Declarative UI Development',
        details: 'Build highly responsive interfaces with Jetpack Compose, utilizing modern gesture controls and custom-designed micro-animations.'
      },
      {
        phase: 'Phase 03',
        title: 'Robust Offline Engineering',
        details: 'Configure local-first database caching with Room DB and implement secure background sync jobs using WorkManager.'
      },
      {
        phase: 'Phase 04',
        title: 'Optimization & Profiling',
        details: 'Analyze memory allocations, monitor network payload compressions, and run thread diagnostics using Android Studio Profilers.'
      }
    ]
  },
  {
    id: 's2',
    title: 'Premium Web Platforms',
    description: 'Bespoke, blazingly fast web applications engineered with React, TypeScript, and modern bundlers. We deliver custom SaaS dashboards, responsive portals, and complex visualizers optimized for all screen heights and widths.',
    iconName: 'globe',
    tags: ['React', 'TypeScript', 'Vite', 'REST & GraphQL'],
    approach: 'We reject standard heavy-template sites in favor of hand-crafted React and TypeScript foundations, optimizing code-splitting and asset pipelines for sub-second load times.',
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Data Flow & API Schemas',
        details: 'Map the application’s state model, define typed API contracts, and design scalable query hooks with error boundaries.'
      },
      {
        phase: 'Phase 02',
        title: 'Component Blueprinting',
        details: 'Engineer atomic, modular React components using clean TypeScript types and strict responsive design layouts.'
      },
      {
        phase: 'Phase 03',
        title: 'State & Visual Integrations',
        details: 'Integrate live real-time state synchronizations, high-performance D3 charting libraries, and interactive visual elements.'
      },
      {
        phase: 'Phase 04',
        title: 'Vite Bundling & Edge Distro',
        details: 'Configure granular code chunking rules, minimize CSS assets, and deploy optimized static files to worldwide edge CDNs.'
      }
    ]
  },
  {
    id: 's3',
    title: 'Tailored UI/UX Engineering',
    description: 'Bridging the gap between jaw-dropping aesthetic mockups and functional, accessible interface code. We apply strict micro-interactions, layout transitions, and high contrast typography (like Inter) for pixel-perfection.',
    iconName: 'layout',
    tags: ['Framer Motion', 'Accessibility', 'Figma to Code', 'Inter'],
    approach: 'True design system craft lives in the tiny details: matching fluid letter-tracking, ensuring perfect color contrasts, and maintaining spring-physics gesture systems.',
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Atomic Token Extraction',
        details: 'Convert Figma designs into concrete typographic rules, responsive spacing grids, and consistent tailwind variables.'
      },
      {
        phase: 'Phase 02',
        title: 'Motion Choreography',
        details: 'Design spring-physics transitions and layout animation hierarchies with Framer Motion for natural fluid movement.'
      },
      {
        phase: 'Phase 03',
        title: 'A11y Compliance Audits',
        details: 'Structure proper semantic HTML layouts, test key-navigable keyboard traps, and configure screen reader tags.'
      },
      {
        phase: 'Phase 04',
        title: 'Responsive Fluid Testing',
        details: 'Validate and refine component scale behavior using native CSS clamp rules across mobile, ultra-wide, and tablet heights.'
      }
    ]
  },
  {
    id: 's4',
    title: 'High-Scale Cloud & APIs',
    description: 'Secure, clean server architectures and API gateways to proxy keys and manage relational databases safely. We design low-latency databases, cached cloud structures, and solid security policies.',
    iconName: 'database',
    tags: ['Node.js', 'PostgreSQL', 'JWT Auth', 'Cloud Architecture'],
    approach: 'We build secure server entrypoints that guard API secrets server-side, utilize index-optimized relational schemas, and scale to zero during idle periods.',
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Relational Database Modeling',
        details: 'Draft relational schemas, configure appropriate foreign key cascades, and create optimal indices for swift queries.'
      },
      {
        phase: 'Phase 02',
        title: 'API Gateway & Key Proxying',
        details: 'Program Express server routers, integrate server-side proxies to shield sensitive API tokens, and set up cors rules.'
      },
      {
        phase: 'Phase 03',
        title: 'Stateful JWT Authorization',
        details: 'Write bulletproof middleware for parsing authorization tokens, verifying session state, and limiting rate access.'
      },
      {
        phase: 'Phase 04',
        title: 'Server Profiling & Containerization',
        details: 'Verify Node.js memory profiles, package server layers inside containers, and establish secure health check paths.'
      }
    ]
  }
];
