import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cinemaImg from "@/public/cinema.jpg";
import chatImg from "@/public/chat.jpg";
import ticketImg from "@/public/ticket.jpg";

import {
   SiHtml5,
   SiCss3,
   SiJavascript,
   SiTypescript,
   SiPython,
   SiC,
   SiReact,
   SiRedux,
   SiNextdotjs,
   SiNodedotjs,
   SiExpress,
   SiDjango,
   SiTailwindcss,
   SiBootstrap,
   SiWebpack,
   SiMongodb,
   SiPostgresql,
   SiMysql,
   SiGit,
   SiGithub,
   SiDocker,
   SiKubernetes,
   SiJest,
   SiPostman,
} from "react-icons/si";

import { FaJava,FaAws  } from "react-icons/fa";

import { IconType } from "react-icons";

type SkillData = {
   name: string;
   Icon: IconType;
   color?: string;
};

export const links = [
   {
      name: "Home",
      hash: "#home",
   },
   {
      name: "About",
      hash: "#about",
   },
   {
      name: "Skills",
      hash: "#skills",
   },
   {
      name: "Experience",
      hash: "#experience",
   },
   {
      name: "Projects",
      hash: "#projects",
   },
   {
      name: "Contact",
      hash: "#contact",
   },
] as const;

export const experiencesData = [
   {
      title: "Graduated, Post Graduate Certificate",
      location: "Loyalist College, Toronto, ON",
      description: "Major: Computer Software and Database Development",
      icon: React.createElement(LuGraduationCap),
      date: " 2023 - 2024 ",
   },
   {
      title: "Software Developer",
      location: "Citizen Infotech Pvt.Ltd, Kathmandu, Nepal",
      description:
         "Over year of experience experience on working on MERN-stack projects. for detail, Please refer the resume.",
      icon: React.createElement(CgWorkAlt),
      date: " 2022 ",
   },
   {
      title: "Graduated, Bachelor in Engineering.",
      location: "Ramaiah Institute of Technology, Bangalore, India",
      description: "Major: Electronic and Communication",
      icon: React.createElement(LuGraduationCap),
      date: " 2017 - 2021 ",
   },
] as const;

export const projectsData = [
   {
      title: "QuickChat",
      description:
         "A modern real-time messaging application built using the MERN stack. It provides instant message delivery, user authentication, and responsive UI components.",
      tags: ["React", "Express", "MongoDB", "Node", "Redux", "JWT", "Stock.io"],
      imageUrl: chatImg,
      githubUrl: "https://github.com/sanjib-12/QuickChat",
      webpageUrl: "www.google.com",
   },
   {
      title: "Ticketing Application",
      description:
         "A microservices-based platform designed to facilitate the management and sale of tickets. It leverages modern technologies to provide a scalable, resilient, and efficient solution for event organizers and customers alike.",
      tags: [
         "Next.js",
         "React",
         "TypeScript",
         "Node.js",
         "Express",
         "Jest",
         "Mongodb",
         "kubernetes",
         "Docker",
      ],
      imageUrl: ticketImg,
      githubUrl: "https://github.com/sanjib-12/ticketing",
      webpageUrl: "www.google.com",
   },
   {
      title: "Movie-Server",
      description:
         "A server created to handle the functional of a movie application. It contains database for user and the movie. User can login or signup and perform a CURD operation with the movie database.",
      tags: ["JavaScript", "Node.js", "Express", "Mongoose", "Jsonwebtoken"],
      imageUrl: cinemaImg,
      githubUrl: "https://github.com/sanjib-12/Movie-Server",
      webpageUrl: "",
   },
] as const;

export const skillsData: readonly SkillData[] = [
   { name: "HTML", Icon: SiHtml5, color: "red" },
   { name: "CSS", Icon: SiCss3, color: "blue" },
   { name: "JavaScript", Icon: SiJavascript, color: "yellow" },
   { name: "TypeScript", Icon: SiTypescript, color: "blue" },
   { name: "Python", Icon: SiPython, color: "green" },
   { name: "C", Icon: SiC, color: "gray" },
   { name: "Java", Icon: FaJava, color: "orange" },
   { name: "React", Icon: SiReact, color: "cyan" },
   { name: "Redux", Icon: SiRedux, color: "purple" },
   { name: "Next.js", Icon: SiNextdotjs, color: "black" },
   { name: "Node.js", Icon: SiNodedotjs, color: "green" },
   { name: "Express", Icon: SiExpress, color: "gray" },
   { name: "Django", Icon: SiDjango, color: "green" },
   { name: "Tailwind", Icon: SiTailwindcss, color: "teal" },
   { name: "Bootstrap", Icon: SiBootstrap, color: "purple" },
   { name: "Webpack", Icon: SiWebpack, color: "blue" },
   { name: "MongoDB", Icon: SiMongodb, color: "green" },
   { name: "PostgreSQL", Icon: SiPostgresql, color: "blue" },
   { name: "MySQL", Icon: SiMysql, color: "blue" },
   { name: "Git", Icon: SiGit, color: "orange" },
   { name: "GitHub", Icon: SiGithub, color: "black" },
   { name: "AWS", Icon: FaAws, color: "orange" },
   { name: "Docker", Icon: SiDocker, color: "blue" },
   { name: "Kubernetes", Icon: SiKubernetes, color: "blue" },
   { name: "Jest", Icon: SiJest, color: "red" },
   { name: "Postman", Icon: SiPostman, color: "orange" },
] as const;
