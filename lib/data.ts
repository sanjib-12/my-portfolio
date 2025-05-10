import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      name: "Projects",
      hash: "#projects",
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
      name: "Contact",
      hash: "#contact",
   },
] as const;

export const experiencesData = [
   {
      title: "Graduated, Post Graduate Certificate",
      location: "Loyalist College, Toronto, ON",
      description:
         "Major: Computer Software and Database Development",
      icon: React.createElement(LuGraduationCap),
      date: "2023 - 2024",
   },
   {
      title: "Software Developer",
      location: "Citizen Infotech Pvt.Ltd, Kathmandus, Nepal",
      description:
         "Over year of experience experience on working on MERN-stack projects. for detail, Please refer the resume.",
      icon: React.createElement(CgWorkAlt),
      date: "2022",
   },
    {
      title: "Graduated, Bachelor in Engineering.",
      location: "Ramaiah Institute of Technology, Bangalore, India",
      description:
         "Major: Electronic and Communication",
      icon: React.createElement(LuGraduationCap),
      date: "2017 - 2021",
   },
] as const;

export const projectsData = [
   {
      title: "QuickChat",
      description:
         "a modern real-time messaging application built using the MERN stack. It provides instant message delivery, user authentication, and responsive UI components.",
      tags: ["React", "Express", "MongoDB", "Node"],
      imageUrl: corpcommentImg,
   },
   {
      title: "Ticketing Application",
      description:
         "A microservices-based platform designed to facilitate the management and sale of tickets for various events. It leverages modern technologies to provide a scalable, resilient, and efficient solution for event organizers and customers alike.",
      tags: ["JavaScript","TypeScript", "Next.js","kubernetes", "Docker", "Skaffold", "Node.js","Express", "Jest", "Mongodb"],
      imageUrl: rmtdevImg,
   },
   {
      title: "Movie-Server",
      description:
         "A server created to handle the functional of a movie application. It contains database for user and the movie. User can login or signup and perform a CURD operation with the movie database.",
      tags: ["JavaScript","Node.js", "Express", "Mongoose", "Jsonwebtoken"],
      imageUrl: wordanalyticsImg,
   },
] as const;

export const skillsData = [
   "HTML",
   "CSS",
   "JavaScript",
   "TypeScript",
   "Python",
   "C",
   "Java",
   "React",
   "Redux",
   "Next.js",
   "Node.js",
   "Express",
   "Django",
   "Tailwind",
   "Bootstrap",
   "Webpack",
   "MongoDB",
   "PostgreSQL",
   "MySQL",
   "Git",
   "GitHub",
   "AWS",
   "Docker",
   "Kubernetes",
   "Jest",
   "Postman"
] as const;
