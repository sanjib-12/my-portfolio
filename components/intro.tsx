"use client";

import React, { useActionState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsLinkedin } from "react-icons/bs";

import profilePic from "@/public/avatar1.png";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
   const { ref } = useSectionInView("Home", 0.5);
   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

   return (
      <section
         ref={ref}
         className="max-w-[50rem] text-center sm:mb-0 scroll-mt-36"
         id="home"
      >
         <div className="flex items-center justify-center">
            <div className="relative">
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: "tween",
                     duration: 0.2,
                  }}
               >
                  <Image
                     src={profilePic}
                     alt="Sanjib portraits"
                     width="192"
                     height="192"
                     quality="95"
                     priority={true}
                     className="h-26 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl "
                  />
               </motion.div>

               <motion.span
                  className="absolute bottom-0 right-0 text-4xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: "spring",
                     stiffness: 125,
                     delay: 0.1,
                     duration: 0.7,
                  }}
               >
                  👋
               </motion.span>
            </div>
         </div>

         <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
         >
            Hello, I'm<span className="font-bold"> Sanjib.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with a year
            of hand-on experience crafting seamless web experiences. I enjoy
            building <span className="italic">sites & apps</span>. Let's
            collaborate to bring your next project to life!
         </motion.h1>

         <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               delay: 0.1,
            }}
         >
            <Link
               href="#contact"
               className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus-visible:scale-110 hover:scale-110 haver:bg-gray-950 active:scale-105 transition"
               onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
               }}
            >
               Contact me here{" "}
               <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
               className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus-visible:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
               href="/Resume.pdf"
               target="_blank"
            >
               Resume{" "}
               <BsDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
               className="bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus-visible:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
               href="https://www.linkedin.com/in/sanjib-barakoti/"
               target="_blank"
            >
               <span className="sm:hidden dark:text-white/80  ">Linkedin</span>
               <BsLinkedin />
            </a>

            <a
               className="bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus-visible:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
               href="https://github.com/sanjib-12"
               target="_blank"
            >
               <span className="sm:hidden dark:text-white/80 ">Github</span>
               <FaGithubSquare />
            </a>
         </motion.div>
      </section>
   );
}
