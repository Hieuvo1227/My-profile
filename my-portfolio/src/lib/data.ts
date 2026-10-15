export interface Project {
  id: number;
  num: string;
  key: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    num: "01",
    key: "sams",
    techStack: ["NestJS", "Next.js", "Docker", "ESP32", "MQTT"],
    githubLink: "https://github.com/Hieuvo1227/-n-IoT.git",
    liveLink: "#",
    image: "/project-sams-pixel.png"
  },
  {
    id: 2,
    num: "02",
    key: "edu",
    techStack: ["Next.js 15", "Express", "Redis", "IIS", "PM2"],
    githubLink: "",
    liveLink: "https://thuytung.edu.vn",
    image: "/project-thuytung-pixel.png"
  },
  {
    id: 3,
    num: "03",
    key: "videoai",
    techStack: ["Python", "OpenCV", "AI", "FFmpeg"],
    githubLink: "https://github.com/Hieuvo1227/Edit-video-by-AI.git",
    liveLink: "#",
    image: "/project-videoai-pixel.png"
  }
];
