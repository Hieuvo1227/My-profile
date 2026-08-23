export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubLink: string;
  liveLink: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart Access Management System (SAMS)",
    description: "Enterprise-grade access control platform featuring a Dynamic Risk Engine. Optimized database indexing and in-memory caching to achieve sub-50ms access decision times.",
    features: [
      "Hardware integration with ESP32 & RFID-RC522",
      "Real-time monitoring via Socket.io",
      "Multi-level RBAC & Automated backup scripts"
    ],
    techStack: ["NestJS", "Next.js", "Docker", "ESP32", "MQTT"],
    githubLink: "https://github.com/Hieuvo1227/-n-IoT.git",
    liveLink: "#",
    image: "/project_1_sams.jpg"
  },
  {
    id: 2,
    title: "THỦY TÙNG - Education Website",
    description: "High-availability overseas education platform. Architected with robust session management and data caching to handle concurrent user traffic seamlessly.",
    features: [
      "Server-Side Rendering (SSR) for optimal SEO",
      "Redis integration for fast session caching",
      "Deployed on Windows Server via IIS and PM2"
    ],
    techStack: ["Next.js 15", "Express", "Redis", "IIS", "PM2"],
    githubLink: "", 
    liveLink: "#",
    image: "/project_2_edu.jpg"
  }
];


