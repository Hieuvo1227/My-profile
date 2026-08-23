export interface Project {
  id: number;
  key: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    key: "sams",
    techStack: ["NestJS", "Next.js", "Docker", "ESP32", "MQTT"],
    githubLink: "https://github.com/Hieuvo1227/-n-IoT.git",
    liveLink: "#",
    image: "/SAMS2.png"
  },
  {
    id: 2,
    key: "edu",
    techStack: ["Next.js 15", "Express", "Redis", "IIS", "PM2"],
    githubLink: "",
    liveLink: "#",
    image: "/thuytung.png"
  }
];
