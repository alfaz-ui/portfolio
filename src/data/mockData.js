// Mock data for Alfaz Khan's Portfolio
export const personalInfo = {
  name: "Alfaz Khan",
  title: "Frontend Developer",
  location: "India",
  email: "alfazk@gmail.com",
  phone: "+91 9999793403",
  linkedin: "infafazkhan",
  summary: "Innovative Frontend Developer with 3+ years of experience building cutting-edge user interfaces and scalable web applications using React.js and React Native. Skilled in AI-powered platforms, real-time communication systems, and enterprise-grade solutions with expertise in modern JavaScript ecosystem, TypeScript, and advanced UI/UX design. Proven track record of integrating OpenAI APIs, WebRTC, and Socket.io for complex real-time applications. Strong advocate for performance optimization, achieving 95+ Lighthouse scores and 40% load time improvements through code splitting and intelligent caching. Successfully delivered multiple high-impact projects with measurable business outcomes."
};

export const experience = [
  {
    id: 1,
    title: "React JS Developer",
    company: "Tamcherry Technologies",
    location: "Infopark, Kochi",
    duration: "February 2025 - Present",
    description: [
      "Architected and developed a comprehensive AI-powered interview platform using React, Material-UI, and Redux Toolkit for scalable state management",
      "Built robust WebSocket communication system using Socket.io for real-time interview updates, candidate status tracking, and live video/audio streaming",
      "Integrated video/audio recording capabilities with MediaRecorder API for interview capture, playback, and analysis with chunk-based streaming optimization",
      "Implemented JWT-based authentication with token refresh mechanisms, Google OAuth integration, and role-based access control"
    ],
    technologies: ["React.js", "Material-UI", "Redux Toolkit", "Socket.io", "WebRTC", "JWT", "Google OAuth"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "The Better Life Projects",
    location: "Bangalore",
    duration: "August 2024 - January 2025",
    description: [
      "Designed and developed the official website for The Better Life Projects using React.js and CSS",
      "Successfully established an online platform for presenting the company's mission and services",
      "Transformed an HTML website into a React-based platform while implementing best SEO practices",
      "Achieved the website's listing in the #1 position on Google search results"
    ],
    technologies: ["React.js", "CSS", "SEO", "HTML"]
  },
  {
    id: 3,
    title: "Web Operations Specialist",
    company: "Oldschool Outdoor Clothing Co.",
    location: "Calicut",
    duration: "December 2023 - December 2024",
    description: [
      "Successfully designed and managed an e-commerce website and streamlined inventory operations",
      "Overseeing website functionality, designing the UI for the web pages, integrating the Razor pay payment gateway",
      "Proposed a basic web structure for the website and delivered a fully function website within a month"
    ],
    technologies: ["E-commerce", "Razor Pay", "UI Design", "Web Development"]
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "lookODU (Splendre EyeMag Pvt. Ltd.)",
    location: "Kozhikode, Kerala, India",
    duration: "August 2021 - September 2023",
    description: [
      "Designed, developed, and maintained the lookODU mobile app using React Native, JavaScript, and CSS",
      "Collaborated with the development team to implement intuitive UI components and features",
      "Created an operations portal for lookODU using React.js, TypeScript, and CSS",
      "Developed the official website for lookODU, providing an engaging platform to effectively showcase its features",
      "Collaborated closely with cross-functional teams to ensure seamless integration of frontend and backend systems"
    ],
    technologies: ["React Native", "JavaScript", "CSS", "React.js", "TypeScript"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Interview Platform",
    company: "Tamcherry Technologies",
    duration: "February 2025 - Present",
    description: "Comprehensive recruitment platform featuring AI-driven interviews, real-time candidate evaluation, and advanced hiring workflow management for enterprise clients.",
    features: [
      "AI Interview System: Implemented real-time conversational AI using OpenAI's Realtime API with voice synthesis and speech recognition capabilities",
      "Recruiter Dashboard: Built complete job management system with candidate tracking, interview scheduling, and performance analytics",
      "Video Interview Recording: Developed advanced media capture with WebRTC, chunk-based streaming, and cloud storage integration",
      "Real-time Communication: Architected WebSocket-based live updates for interview status, candidate actions, and recruiter notifications"
    ],
    technologies: ["React", "Material-UI", "Redux Toolkit", "Socket.io", "WebRTC", "OpenAI Realtime API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "The Better Life Projects Official Website",
    company: "The Better Life Projects",
    url: "thebetterlifeprojects.com/#/",
    description: "Designed and developed the official website for The Better Life Projects using React.js and CSS, effectively presenting the company's mission and services to the audience.",
    features: [
      "Successfully created an informative and visually appealing online platform",
      "Transformed a static HTML website into a React-based dynamic platform with SEO optimization",
      "Achieved the #1 ranking on Google search results and implemented responsive design principles"
    ],
    technologies: ["React.js", "CSS", "SEO", "HTML"],
    liveUrl: "https://thebetterlifeprojects.com/#/",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "E-commerce Website",
    company: "Oldschool Outdoor Clothing Co.",
    description: "Developed a user-friendly e-commerce website for Oldschool Outdoor Clothing Co. using Shopify.",
    features: [
      "Automated the collection such that every product gets sorted when it is added to the inventory",
      "Integrated shipping methods and payment gateways (razorpay) for seamless transactions",
      "Proposed a basic structure and made a fully functioning website within a month",
      "Optimized website performance by ensuring images to be in the ratio 4:3 to improve loading speeds by 40%"
    ],
    technologies: ["Shopify", "Razor Pay", "E-commerce", "Payment Gateway"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "lookODU Mobile App",
    company: "Splendre EyeMag Pvt. Ltd.",
    url: "play.google.com/store/apps/details?id=com.splendre.lookodu&hl=en",
    description: "Developed the lookODU mobile app using React Native, JavaScript, and CSS.",
    features: [
      "Assisted in A/B testing of different UX components that resulted in a 25% increase in customer conversion rates",
      "Designed an engaging and user-friendly interface and optimized images and code to decrease loading time by 30 seconds",
      "Integrated razorpay payment gateway to the app using React Native standard SDK",
      "Maintained the app with regular updates and did version control in git while following SCRUM and agile methodology"
    ],
    technologies: ["React Native", "JavaScript", "CSS", "Razor Pay", "Git", "SCRUM"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.splendre.lookodu&hl=en",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "lookODU Operations Portal",
    company: "Splendre EyeMag Pvt. Ltd.",
    description: "Created the operations portal for the lookODU app using React.js, TypeScript, and CSS.",
    features: [
      "Integrated google location api for store data scraping which simplified the onboarding process for each store",
      "Created Dashboards for viewing engagements and controlling features on the mobile app",
      "Integrated RESTful APIs to enable seamless communication between systems and enhancing functionality"
    ],
    technologies: ["React.js", "TypeScript", "CSS", "Google Location API", "RESTful APIs"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "lookODU Official Website",
    company: "Splendre EyeMag Pvt. Ltd.",
    url: "lookodu.com",
    description: "Designed and developed the official website for lookODU using React.js.",
    features: [
      "Created an informative online presence for lookODU",
      "Integrated SEO best practices and analytics tools into the lookODU website",
      "Enhanced online visibility and boosting organic traffic by 40% within six months"
    ],
    technologies: ["React.js", "SEO", "Analytics", "Web Development"],
    liveUrl: "https://lookodu.com",
    githubUrl: "#"
  }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "React Native", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Material-UI", level: 85 }
  ],
  backend: [
    { name: "RESTful APIs", level: 85 },
    { name: "Socket.io", level: 80 },
    { name: "WebRTC", level: 75 },
    { name: "JWT", level: 80 },
    { name: "API Integration", level: 85 },
    { name: "Firebase", level: 70 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Redux Toolkit", level: 85 },
    { name: "Webpack", level: 75 },
    { name: "Vite", level: 80 },
    { name: "Figma", level: 85 },
    { name: "Postman", level: 80 },
    { name: "JEST", level: 75 }
  ],
  other: [
    { name: "Performance Optimization", level: 88 },
    { name: "SEO", level: 85 },
    { name: "Responsive Design", level: 92 },
    { name: "Code Splitting", level: 80 },
    { name: "SCRUM/AGILE", level: 85 },
    { name: "AI Integration", level: 75 }
  ]
};

export const education = {
  degree: "Bachelor of Technology - BTech, Computer Science",
  institution: "MES Engineering College, Kuttippuram",
  location: "Kerala",
  year: "2021",
  description: "Graduated with a strong foundation in computer science fundamentals, software engineering principles, and modern web development technologies."
};

export const achievements = [
  {
    title: "Technical Achievements",
    description: "Built scalable component library with 50+ reusable components, optimized real-time data synchronization reducing API calls by 60%"
  },
  {
    title: "Performance Optimization",
    description: "Achieved 95+ Lighthouse scores and 40% load time improvements through code splitting and intelligent caching"
  },
  {
    title: "SEO Success",
    description: "Achieved #1 ranking on Google search results for The Better Life Projects website"
  },
  {
    title: "User Experience",
    description: "Increased customer conversion rates by 25% through A/B testing and UX improvements"
  }
];