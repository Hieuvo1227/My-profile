import React from 'react';
import {
  SiSpringboot,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiNuxt,
  SiTypescript,
  SiNestjs,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiVercel,
  SiGradle,
  SiIntellijidea,
  SiDatagrip,
  SiGit,
  SiPostman,
  SiVite,
  SiLinux,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandVscode } from 'react-icons/tb';

const baseClass = "w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110";

export const SpringBootIcon  = () => <SiSpringboot  className={`${baseClass} text-[#6db33f]`} />;
export const NextjsIcon      = () => <SiNextdotjs    className={`${baseClass} text-white`} />;
export const ExpressIcon     = () => <SiExpress      className={`${baseClass} text-white`} />;
export const DjangoIcon      = () => <SiDjango       className={`${baseClass} text-[#2ba977]`} />;
export const NuxtIcon        = () => <SiNuxt        className={`${baseClass} text-[#00dc82]`} />;
export const TypeScriptIcon  = () => <SiTypescript   className={`${baseClass} text-[#3178c6]`} />;
export const NestJSIcon      = () => <SiNestjs       className={`${baseClass} text-[#ea2845]`} />;
export const ReactIcon       = () => <SiReact        className={`${baseClass} text-[#61dafb]`} />;
export const NodeJSIcon      = () => <SiNodedotjs    className={`${baseClass} text-[#68a063]`} />;
export const JavaIcon        = () => <FaJava         className={`${baseClass} text-[#f89820]`} />;
export const CSharpIcon      = () => <TbBrandCSharp  className={`${baseClass} text-[#a179dc]`} />;
export const PythonIcon      = () => <SiPython       className={`${baseClass} text-[#3776ab]`} />;
export const MongoDBIcon     = () => <SiMongodb      className={`${baseClass} text-[#47a248]`} />;
export const RedisIcon       = () => <SiRedis        className={`${baseClass} text-[#dc382d]`} />;
export const MySQLIcon       = () => <SiMysql        className={`${baseClass} text-[#00758f]`} />;

export const VSCodeIcon      = () => <TbBrandVscode  className={`${baseClass} text-[#007acc]`} />;
export const DockerIcon      = () => <SiDocker       className={`${baseClass} text-[#2496ed]`} />;
export const VercelIcon      = () => <SiVercel       className={`${baseClass} text-white`} />;
export const GradleIcon      = () => <SiGradle       className={`${baseClass} text-[#02303a]`} />;
export const IntelliJIcon    = () => <SiIntellijidea className={`${baseClass} text-[#fe315d]`} />;
export const DataGripIcon    = () => <SiDatagrip     className={`${baseClass} text-[#21d789]`} />;
export const GitIcon         = () => <SiGit          className={`${baseClass} text-[#f05032]`} />;
export const PostmanIcon     = () => <SiPostman      className={`${baseClass} text-[#ff6c37]`} />;
export const ViteIcon        = () => <SiVite         className={`${baseClass} text-[#bd34fe]`} />;
export const AWSIcon         = () => <FaAws          className={`${baseClass} text-[#ff9900]`} />;
export const LinuxIcon       = () => <SiLinux        className={`${baseClass} text-[#fcc624]`} />;
