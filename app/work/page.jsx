"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { WorkSliderBtns } from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "π Approximation",
        title: "project 1",
        description: "An approximation of π using Monte-Carlo's method",
        stack: [{ name: 'Python' }],
        image: "/projects/p1.png",
        github: "https://github.com/BelfaidaMedReda/-Approximation-",
    },
    {
        num: "02",
        category: "GUI developpement",
        title: "project 2",
        description: "Development of a Graphical User Interface library",
        stack: [{ name: 'C' }],
        image: "/projects/p2.png",
        github: "https://github.com/BelfaidaMedReda/Projet_IG",
    },
    {
        num: "03",
        category: "Polygons",
        title: "project 3",
        description: "Developping algorithms to detect intersections between multiple polygons",
        stack: [{ name: 'Python' }],
        image: "/projects/art.png",
        github: "https://github.com/BelfaidaMedReda/Intersections-detector",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all 
                            duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-xl text-accent"
                                    >
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <a href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[540px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[520px] relative group flex justify-center items-center" style={{ backgroundColor: 'rgb(28, 28, 34)' }}>
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-primary/10 z-10">
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden">
                                            <Image
                                                src={item.image}
                                                fill
                                                alt="Project image"
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20
                                w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary
                                text-[22px] w-[44px] h-[44px] flex justify-center items-center 
                                transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;