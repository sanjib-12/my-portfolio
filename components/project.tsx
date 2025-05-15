"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
   title,
   description,
   tags,
   imageUrl,
   githubUrl,
   webpageUrl,
}: ProjectProps) {
   const ref = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
   });

   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

   return (
      <motion.div
         style={{
            scale: scaleProgress,
            opacity: opacityProgress,
         }}
         ref={ref}
         className="group mb-3 sm:mb-8 last:mb-0"
      >
         <section className=" bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative md:h-[20rem]  hover:bg-gray-200 transition">
            <div className="pt-2 pb-5 px-5 sm:pl-5 sm:pr-2 sm:pt-5 md:max-w-[60%] flex flex-col md:justify-between h-full">
               <h3 className="text-2xl font-semibold text-center"> {title} </h3>
               <p className="mt-2 mb-2 leading-relaxed text-gray-700 ">
                  {" "}
                  {description}{" "}
               </p>

               <ul className="flex flex-wrap mt-2 mb-2 overflow gap-2 ">
                  {tags.map((tag, index) => (
                     <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                        key={index}
                     >
                        {tag}
                     </li>
                  ))}
               </ul>

               <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-1">
                  {githubUrl && (
                     <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                           e.preventDefault(); // Prevent immediate navigation
                           setTimeout(() => {
                              window.open(
                                 githubUrl,
                                 "_blank",
                                 "noopener,noreferrer"
                              );
                           }, 300); // Delay in milliseconds
                        }}
                        className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-3xl hover:bg-gray-800  flex items-center justify-center gap-2 outline-none focus-visible:scale-105 hover:scale-105 active:scale-95 transition cursor-pointer borderBlack"
                     >
                        <FaGithub size={16} /> GitHub Repo
                     </a>
                  )}
                  {webpageUrl && (
                     <a
                        href={webpageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                           e.preventDefault(); // Prevent immediate navigation
                           setTimeout(() => {
                              window.open(
                                 webpageUrl,
                                 "_blank",
                                 "noopener,noreferrer"
                              );
                           }, 300); // Delay in milliseconds
                        }}
                        className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-3xl hover:bg-gray-800  flex items-center justify-center gap-2 outline-none focus-visible:scale-110 hover:scale-110  active:scale-95 transition cursor-pointer borderBlack"
                     >
                        <FaExternalLinkAlt size={16} /> Explore More
                     </a>
                  )}
               </div>
            </div>

            <Image
               src={imageUrl}
               alt="project image"
               quality={95}
               className="absolute hidden md:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 "
            />
         </section>
      </motion.div>
   );
}
