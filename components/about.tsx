"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
const{ref} = useSectionInView('About',0.6);


   return (
      <motion.section
         ref={ref}
         className=" max-w-[45rem] text-center leading-8  scroll-mt-28"
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.175 }}

         id="about"
      >
         <SectionHeading>About Me</SectionHeading>
         <p className="mb-3">
            I'm a <span className="font-medium">Full Stack Developer</span> with
            professional experience building scalable web applications using the{" "}
            <span className="font-medium">MERN stack</span>. I hold a
            post-graduate certification in{" "}
            <span className="font-medium">
               Computer Software and Database Development
            </span>{" "}
            , and a Bachelor's degree in{" "}
            <span className="font-medium">
               Electronics and Communication Engineering
            </span>
            .
         </p>

         <p className="mb-3">
            After graduating, I joined{" "}
            <span className="font-medium">Citizen Infotech Pvt. Ltd.</span>,
            where I developed full-stack applications for citizen services,
            built REST APIs, and streamlined municipal systems with responsive
            UIs and automated backend workflows. I'm skilled in{" "}
            <span className="font-medium">
               JavaScript, TypeScript, Python, C, Java, React, Node.js, MongoDB,
               PostgreSQL
            </span>{" "}
            and have experience with{" "}
            <span className="font-medium">

               Jest, AWS, Docker, and Kubernetes
            </span>
            .
         </p>

         <p className="mb-3">
            I'm passionate about solving real-world problems through code and
            always looking to learn new technologies. I'm currently based in{" "}
            <span className="font-medium">Ontario, Canada</span> and seeking a{" "}
            <span className="font-medium">full-time Developer role</span> in{" "}
            <span className="font-medium">Canada</span> where I can contribute
            to impactful projects and grow with a collaborative team.
         </p>

         <p className="mb-3">
            <span className="italic">Outside of development</span>, I enjoy
            playing chess, watching movies, exploring new places, and deepening
            my knowledge in areas like{" "}
            <span className="font-medium">science and astronomy</span>. I'm
            particularly fascinated by the universe and cosmology. I'm also
            learning to play the guitar, because every good developer needs a
            side quest.
         </p>
      </motion.section>
   );
}
