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

const iconClass = "w-10 h-10 text-white group-hover:text-purple-400 transition-colors duration-300";

export const SpringBootIcon  = () => <SiSpringboot  className={iconClass} />;
export const NextjsIcon      = () => <SiNextdotjs    className={iconClass} />;
export const ExpressIcon     = () => <SiExpress      className={iconClass} />;
export const DjangoIcon      = () => <SiDjango       className={iconClass} />;
export const NuxtIcon        = () => <SiNuxt        className={iconClass} />;
export const TypeScriptIcon  = () => <SiTypescript   className={iconClass} />;
export const NestJSIcon      = () => <SiNestjs       className={iconClass} />;
export const ReactIcon       = () => <SiReact        className={iconClass} />;
export const NodeJSIcon      = () => <SiNodedotjs    className={iconClass} />;
export const JavaIcon        = () => <FaJava         className={iconClass} />;
export const CSharpIcon      = () => <TbBrandCSharp  className={iconClass} />;
export const PythonIcon      = () => <SiPython       className={iconClass} />;
export const MongoDBIcon     = () => <SiMongodb      className={iconClass} />;
export const RedisIcon       = () => <SiRedis        className={iconClass} />;
export const MySQLIcon       = () => <SiMysql        className={iconClass} />;
export const VSCodeIcon      = () => <TbBrandVscode  className={iconClass} />;
export const DockerIcon      = () => <SiDocker       className={iconClass} />;
export const VercelIcon      = () => <SiVercel       className={iconClass} />;
export const GradleIcon      = () => <SiGradle       className={iconClass} />;
export const IntelliJIcon    = () => <SiIntellijidea className={iconClass} />;
export const DataGripIcon    = () => <SiDatagrip     className={iconClass} />;
export const GitIcon         = () => <SiGit          className={iconClass} />;
export const PostmanIcon     = () => <SiPostman      className={iconClass} />;
export const ViteIcon        = () => <SiVite         className={iconClass} />;
export const AWSIcon         = () => <FaAws          className={iconClass} />;
export const LinuxIcon       = () => <SiLinux        className={iconClass} />;
