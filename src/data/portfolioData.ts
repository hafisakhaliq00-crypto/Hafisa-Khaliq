export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  specialties: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: 'brand' | 'art' | 'social' | 'ai' | 'profile';
  wide?: boolean;
}

export const PROFILE = {
  name: 'Hafsa Khaliq',
  title: 'Senior Graphic & Brand Designer',
  headlineTop: 'Turning Creative',
  headlineMid: 'Ideas Into Powerful',
  headlineAccent: 'Visual Experiences.',
  subheadline:
    'I am a Senior Graphic & Brand Designer passionate about creating meaningful visual identities, intuitive UI layouts, and memorable digital experiences.',
  aboutBio1:
    'A creative designer skilled in communication, digital aesthetics, and transforming ideas into powerful visuals. Experienced in branding, social media design, UI layouts, and marketing graphics, I blend artistic vision with strategic thinking to deliver modern and impactful designs.',
  aboutBio2:
    'Over the years I have collaborated with 50+ clients and delivered 150+ projects across multiple creative industries—combining brand systems, Figma UI design, and AI-assisted visual workflows with strong work ethic and quality output.',
  email: 'hafisakhaliq00@gmail.com',
  phone: '+92 309 379 3262',
  location: 'Gul e Daman Block B, Lahore, Pakistan',
  cvFilePath: '/assets/aistudio/Hafsa-CV.pdf_87db85f6.pdf',
  cvPublicPath: '/Hafsa-Khaliq-CV.pdf',
  cvDownloadName: 'Hafsa-Khaliq-CV.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hafsa-malik-visuals/' },
    { label: 'Behance', href: 'https://www.behance.net/hafisakhaliq' },
  ],
};

export const HERO_METRICS = [
  { value: '50+', label: 'Clients Served' },
  { value: '150+', label: 'Projects Completed' },
  { value: '3+ Yrs', label: 'Design Experience' },
  { value: '100%', label: 'Creative Commitment' },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'BS – Software Engineering',
    institution: 'Virtual University of Pakistan',
    period: 'Mar 2023 – Present',
    status: 'Currently pursuing',
  },
  {
    degree: 'Diploma in Graphic Designing',
    institution: 'The Women University, Multan',
    period: 'Mar 2023 – Dec 2024',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Graphic Branding & UI Designer',
    company: 'PRG Pakistan',
    location: 'Lahore',
    period: 'May 2025 – Present',
    isCurrent: true,
    summary:
      'Designing branding systems, logo concepts, and complete visual identities while building web and mobile UI layouts in Figma and accelerating creative ideation through AI prompt engineering.',
    specialties: [
      'Designing branding systems, logo concepts, and complete visual identities',
      'Developing UI layouts and web/mobile interface screens in Figma',
      'Creating brand guidelines, color systems, and typography standards',
      'Designing social media branding, ad creatives, and digital campaign assets',
      'Collaborating with developers & marketing teams to improve UI/UX flow',
      'Using AI Prompt Engineering to generate creative design concepts and high-quality visual assets',
      'Producing AI-assisted images, layouts, and branding visuals for faster design workflows',
      'Crafting precise prompts to create marketing graphics, UI visuals, and brand illustrations',
      'Enhancing design efficiency through AI-based image generation and visual ideation',
    ],
  },
  {
    role: 'Graphic Designer (Branding & Marketing Visuals)',
    company: 'Ibuildsoft LLC',
    location: 'Islamabad',
    period: 'Nov 2024 – May 2025',
    summary:
      'Created modern branding assets, logos, print materials, and high-engagement social media content alongside clean, accessible mobile app and website UI screens.',
    specialties: [
      'Designed modern branding assets, logos, 3D logos, product labels, and marketing graphics',
      'Created flyers, brochures, and visually appealing print materials',
      'Edited and retouched images for professional-quality media',
      'Created YouTube thumbnails, web banners, ads, and promotional visuals',
      'Developed the company’s visual identity through consistent design systems',
      'Produced social media posts, carousels, and story templates to boost engagement',
      'Designed mobile app UI screens with clean and user-friendly layouts',
      'Created website UI designs focused on accessibility, usability, and modern aesthetics',
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'Acme Filing Limited LLC',
    location: 'Multan',
    period: 'Dec 2023 – Oct 2024',
    summary:
      'Strengthened company identity across digital and print touchpoints—delivering logos, brochures, packaging, and branded stationery under tight deadlines.',
    specialties: [
      'Enhanced company identity through creative digital and print designs',
      'Designed logos, brochures, flyers, packaging, and branded stationery',
      'Created banners, thumbnails, and marketing visuals for digital promotions',
      'Ensured design consistency across all brand touchpoints',
      'Delivered high-quality outputs under tight deadlines',
    ],
  },
];

export const EXPERTISE: ExpertiseItem[] = [
  {
    title: 'Brand Identity & Visual Branding',
    description:
      'Logos, visual systems, color palettes, and brand guidelines that make businesses recognizable everywhere.',
    icon: 'brand',
  },
  {
    title: 'Graphic Design & Art Direction',
    description:
      'Clear visual direction from initial concept sketch to polished print packaging, brochures, and screens.',
    icon: 'art',
  },
  {
    title: 'Digital & Social Media Design',
    description:
      'Consistent, scroll-stopping campaign visuals, carousels, thumbnails, and ad creatives for every format.',
    icon: 'social',
  },
  {
    title: 'Creative Strategy & AI-Assisted Design',
    description:
      'Precision prompt engineering speeds up concept exploration while strategy and final craft stay human-led.',
    icon: 'ai',
  },
  {
    title: 'Profile Revamp & Personal Branding',
    description:
      'Complete makeovers for LinkedIn and professional profiles: sharper headlines, cohesive custom banners, and structured bios that communicate value at a glance.',
    icon: 'profile',
    wide: true,
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understanding the brand, target audience, business goals, and creative requirements in depth.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Structured research, visual exploration, typography pairing, and thoughtful creative execution.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'Polished design systems, consistent cross-platform visuals, and production-ready final assets.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Appreciation Certificate',
    issuer: 'PRG Pakistan, Rawalpindi',
    date: 'December 2025',
    description:
      'Official recognition for outstanding performance, creative contribution, and consistent dedication to delivering high-quality design work.',
  },
  {
    title: 'Annual Young Artist Exhibition (South Punjab)',
    issuer: 'The Women University Multan',
    date: 'Nov 2023 (3 Days)',
    description:
      'Showcased diverse artworks in a curated regional exhibition featuring creative visual expressions.',
  },
  {
    title: 'Online Fiverr Workshop by NR-Designer',
    issuer: 'The Women University Multan',
    date: 'Nov 2023 (3 Days)',
    description:
      'Applied effective typography, layout structure, color theory, and composition for branding and digital media.',
  },
  {
    title: 'Cisco Networking Academy (Intro Level)',
    issuer: 'Virtual University of Pakistan',
    date: '2024',
    description:
      'Completed foundational training in networking, cybersecurity, cloud basics, and IT systems.',
  },
  {
    title: 'Introduction to Animation & Photography',
    issuer: 'Art & Design Department, WUM',
    date: 'Mar – Apr 2023',
    description:
      'Studied animation briefs, visual storytelling, lighting, exposure, composition, and digital editing.',
  },
];

export const CV_EXTRA = {
  featuredProject: {
    title: 'Eco-Friendly Organic Packaging & Composition System',
    description:
      'Developed visually appealing composition layouts and designed eco-friendly organic packaging with a strong focus on aesthetics, brand identity, and consumer appeal. Ensured clean structure, balanced visual elements, and sustainable design principles to enhance product presentation and market value.',
  },
  skills: [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe Premiere Pro',
    'Adobe Express',
    'Adobe Firefly',
    'Figma',
    'CorelDRAW',
    'Canva',
    'Microsoft Word',
    'Microsoft Excel',
    'Microsoft PowerPoint',
  ],
  hobbies: [
    'Reading books',
    'Problem-solving & critical thinking',
    'Gardening & Grafting',
    'Learning new technologies',
  ],
  languages: ['English', 'Urdu', 'Punjabi'],
  references: 'Available upon request',
};
