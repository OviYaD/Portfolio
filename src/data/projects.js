export const projects = [
  {
    slug: 'pantaloons-ecommerce-platform',
    title: 'Pantaloons eCommerce Platform',
    tags: ['React.js', 'Next.js', 'Node.js', 'AWS', 'Juspay', 'REST APIs'],
    image: '/projects/pantaloons.png',
    summary:
      'Scalable frontend architecture serving millions of retail users, with end-to-end payment integration.',
    description:
      'Architected a scalable frontend using React.js and Next.js (SSR/SSG) integrated with microservice backends, handling high-traffic retail workloads for millions of users. Designed RESTful APIs for product listing, cart, checkout, and order lifecycle with pagination, filtering, and response caching for peak traffic. Integrated the Juspay payment gateway end-to-end — modeling transaction state machines, building retry/idempotency logic, and handling edge cases for failed or partial payments.',
    highlights: [
      'SSR/SSG architecture for high-traffic retail workloads',
      'Product listing, cart & checkout REST APIs with caching',
      'Juspay payment integration with retry/idempotency logic',
    ],
  },
  {
    slug: 'dorak-b2b-travel-admin',
    title: 'Dorak — B2B Travel Admin Platform',
    tags: ['React', 'Redux', 'React Query', 'REST APIs'],
    image: '/projects/dorak.png',
    summary: 'Real-time admin dashboard managing thousands of records with a reusable component library.',
    description:
      'Built a scalable admin dashboard enabling real-time data management across thousands of records with lazy loading, caching, and code splitting. Developed a reusable component library integrated with REST APIs to support dynamic, data-driven UI workflows.',
    highlights: [
      'Real-time dashboard across thousands of records',
      'Lazy loading, caching & code splitting for performance',
      'Reusable component library for data-driven UI',
    ],
  },
  {
    slug: '2hub-hotel-booking-app',
    title: '2Hub — Hotel Booking Mobile App',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'REST APIs'],
    image: '/projects/2hub.png',
    summary: 'Full-stack hotel booking app with concurrency-safe booking flows.',
    description:
      'Delivered a full-stack hotel booking app with a React Native frontend and Node.js/Express backend supporting end-to-end booking flows. Engineered backend logic for concurrent booking scenarios, edge case handling, and transactional data integrity, and optimized mobile performance via Redux state management.',
    highlights: [
      'End-to-end booking flow across mobile & backend',
      'Concurrency-safe, transactionally consistent bookings',
      'Redux-optimized mobile performance',
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

// Personal projects — interactive algorithm visualizers, live on Netlify.
export const liveProjects = [
  {
    name: 'PathFinder',
    type: 'grid',
    command: './pathfinder --run',
    description:
      'A graph algorithm visualizer that animates BFS, DFS, Dijkstra, and A* exploring a grid step by step — with live stats for visited nodes, path length, path cost, and compute time, plus maze generation and adjustable speed.',
    tagline: 'BFS · DFS · Dijkstra · A* on a live grid',
    tags: ['Next.js', 'Algorithms', 'Canvas/Grid UI'],
    url: 'https://path-finder-visualizee.netlify.app/',
  },
  {
    name: 'Searching Lab',
    type: 'array',
    command: 'node searching-lab.js',
    description:
      'An interactive visualizer for eight classic search algorithms — linear, sentinel linear, binary, jump, interpolation, exponential, ternary, and Fibonacci search — with step-by-step playback and live comparison counts.',
    tagline: '8 search algorithms, one probed cell at a time',
    tags: ['JavaScript', 'Algorithms', 'Data Visualization'],
    url: 'https://searching-lab.netlify.app/',
  },
  {
    name: 'Sorting Lab',
    type: 'bars',
    command: './view-sort --start',
    description:
      'A sorting algorithm visualizer that animates classic sorting techniques in action, letting you compare how each algorithm rearranges data step by step.',
    tagline: 'Classic sorting algorithms, animated head-to-head',
    tags: ['JavaScript', 'Algorithms', 'Sorting'],
    url: 'https://view-sort.netlify.app/',
  },
];
