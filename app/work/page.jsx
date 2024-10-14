"use client";

import { delay, motion } from "framer-motion";
import React,{useState} from "react";

import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight,BsGithub } from "react-icons/bs";

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";


const projects=[
    {
        num:"01",
        category:"frontend ",
        title:"project 1",
        decription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor",
        stack:[{ name : 'Html 5' },{ name : 'css 3' },{ name : 'JavaScript' }],
        image:"",
        live:"",
        github:"",
    },
    {
        num:"02",
        category:"fullstack",
        title:"project 2",
        decription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor",
        stack:[{ name : 'Next.js' },{ name : 'Tailwind.css' },{ name : 'Node.js' }],
        image:"",
        live:"",
        github:"",
    },
    {
        num:"03",
        category:"frontend",
        title:"project 3",
        decription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor",
        stack:[{ name : 'Next.js' },{ name : 'Tailwind.css' }],
        image:"",
        live:"",
        github:"",
    },
]







const work = () => {
    const [project,setProject]=useState(projects[0]);

    const handleSlideChange= (swiper)=> {
        
        // get current index
        const currentIndex = swiper.activeIndex;
        // update project state based on the current index
        setProject(projects[currentIndex]);

    }




    return( 
        <motion.section
        transition={{opacity:0}}
        animate={{opacity:1}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className=" flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/*outline num*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/*project category*/}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all 
                            duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/*project description*/}
                            <p className="text-white/60">{project.decription}</p>
                            {/* stack used */}
                            <ul className="flex gap-4">
                                {project.stack.map((item,index)=>{
                                    return(
                                        <li 
                                            key={index}
                                            className="text-xl text-accent"
                                        >
                                            {item.name}
                                            {index !== project.stack.length -1 && ","} {/* to remove the last comma */}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <ul className="border border-white/20">

                            </ul>
                            {/* Github button */}
                            <div className="flex items-center gap-4">
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full xl:w-[50%]">
                            <Swiper>

                            </Swiper>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12" 
                            onSlideChange={handleSlideChange}  
                        >
                            {projects.map((item,index)=>{
                                return( 
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">

                                    </div>
                                </SwiperSlide>);
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>);
};

export default work;