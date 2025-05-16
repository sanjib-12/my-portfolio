"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";
import { SiReact } from "react-icons/si";

const fadeInAnimationsVariants = {
   initial: {
      opacity: 0,
      y: 100,
   },
   animate: (index: number) =>({
      opacity: 1,
      y: 0,
      transition:{
         delay: 0.05*index,
      }
   }),
};

export default function Skills() {
   const { ref } = useSectionInView("Skills");

   return (
      <section
         ref={ref}
         id="skills"
         className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      >
         <SectionHeading>My Skills</SectionHeading>
         <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
            {skillsData.map((skill, index) => {
               const {name, Icon, color} = skill;
               return (
                  <motion.li
                     className="bg-white border border-black/[0.1] rounded-3xl px-5 py-3 flex gap-2 dark:text-white/70 dark:bg-white/10"
                     key={index}
                     variants={fadeInAnimationsVariants}
                     initial="initial"
                     whileInView="animate"
                     viewport={{once:true}}
                     custom= {index}
                  >
                     <Icon size={30} color={color} />
                     {name}
                     
                  </motion.li>
               );
            })}
         </ul>
      </section>
   );
}
