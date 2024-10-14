
"use client";


import { FaHtml5, FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaJava } from "react-icons/fa";
import { Tabs, TabsContent, TabsList,TabsTrigger } from "@/components/ui/tabs";
import { BsFiletypeSql } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import {SiTailwindcss,SiNextdotjs, SiPython,SiC,SiR,SiIntellijidea,SiRstudioide,SiClion,SiPostgresql} from "react-icons/si";
import App from "@/components/ui/EducationCard";
import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { List } from "lucide-react";


const about = {
    title: 'about me',
    description :
        "",
    info : [ 
        {
            fieldName:"Name",
            fieldValue:"Mohammed Reda Belfaida",
        },
        {
            fieldName:"Phone",
            fieldValue:"(+33) 7 69 09 71 54",
        },
        {
            fieldName:"Freelance",
            fieldValue:"Available",
        },
        {
            fieldName:"Email",
            fieldValue:"Medreda.belfaida@gmail.com",
        },
        {
            fieldName:"Nationality",
            fieldValue:"Morrocan",
        },
        {
            fieldName:"Languages",
            fieldValue:"English, French, Arabic, German",
        },
    ]
}


{/*Experience data*/ }

const experience = {
    icon:"/assets/badge.svg",
    title:"My experience",  
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    items:[
        {
            compagny : "Tech Solutions Inc.",
            position : "Full Stack Developper",
            duration : "2022 - Present"
        },
        {
            compagny : "Web Design Studio",
            position : "Front-End Developper Intern",
            duration : "Summer 2021"
        },
        {
            compagny : "E-commerce start-up",
            position : "Freelance Web Developper",
            duration : "2020 - 2021"
        },
        {
            compagny : "Tech Academy",
            position : "Teaching Assistant",
            duration : "2019 - 2021"
        },
        {
            compagny : "Digital Agency",
            position : "UI/UX Designer",
            duration : "2018 - 2019"
        },
        {
            compagny : "Software Developpement firm",
            position : "Junior Developper",
            duration : "2017 - 2018"
        },
    ]
}



const tools ={
    title:"Tools",
    description:"",
    List:[
        {
            icon:<VscVscodeInsiders/>,
            name:"VsCode",
        },
        {
            icon:<SiIntellijidea/>,
            name:"IntelliJ",
        },
        {
            icon:<SiRstudioide/>,
            name:"RStudio",
        },
        {
            icon:<SiClion/>,
            name:"CLion",
        },
        {
            icon:<FaGitAlt/>,
            name:"Git",
        },
        {
            icon:<SiPostgresql/>,
            name:"PostgreSQL",
        },
    ]


}



const tech_stack = {
    title:"Tech Stack",  
    description:"",
    List: [

        {
            icon:<FaHtml5/>,
            name :"html 5",
        },
        {
            icon:<FaCss3/>,
            name :"css 3",
        },
        {
            icon:<FaJs/>,
            name :"JavaScript",
        },
        {
            icon:<FaReact/>,
            name :"React.js",
        },
        {
            icon:<SiNextdotjs/>,
            name :"Next.js",
        },
        {
            icon:<SiTailwindcss/>,
            name :"Tailwind.css",
        },
        {
            icon:<FaNodeJs/>,
            name :"Node.js",
        },
        {
            icon:<SiC/>,
            name :"C",
        },
        {
            icon:<FaJava/>,
            name :"Java",
        },
        {
            icon:<SiPython/>,
            name :"Python",
        },
        {
            icon:<SiR/>,
            name :"R",
        },
        {
            icon:<BsFiletypeSql/>,
            name :"Sql",
        },
        

    ]
}



const Resume = () => {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{ 
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                    <Tabs
                        defaultValue="education"
                        className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            {/*
                            
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            */}

                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="Tech Stack">Tech Stack</TabsTrigger>
                            <TabsTrigger value="Tools">Tools</TabsTrigger>
                            <TabsTrigger value="about">About me</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experience.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item,index)=>{
                                                return(
                                                    <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                                                    flex flex-col justify-center items-center lg:items-start                    
                                                    gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                        text-center lg:text-left"> 
                                                            {item.position}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* education */ }
                            <TabsContent value="education" className="w-full">
                                <App/>
                            </TabsContent>


                            {/* Tech Stack */ }
                            <TabsContent value="Tech Stack" className="h-full w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{tech_stack.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {tech_stack.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {tech_stack.List.map((tech_stack,index)=>{
                                            return (
                                            <li key={index}>
                                                 <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center
                                                        items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {tech_stack.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{tech_stack.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                 </TooltipProvider>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            <TabsContent value="Tools" className="h-full w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{tools.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {tools.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {tools.List.map((tools,index)=>{
                                            return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center
                                                        items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {tools.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{tools.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>


                            {/* about me */ }
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {about.description}
                                    </p>    
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-12 max-w-[620px] mx-auto xl:mx-0">
                                        
                                        {about.info.map((item,index)=>{
                                            return(
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-x-6"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                            );
                                    })}
                                    </ul>
                                </div>
                            </TabsContent>

                        </div>
                    </Tabs>
            </div>



        </motion.div>
    );
};


export default Resume;
