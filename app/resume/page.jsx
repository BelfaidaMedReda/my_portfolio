"use client";


import { FaHtml5, FaCss3,FaJs,FaReact,FaFigma,FaNodeJs } from "react-icons/fa";
import { TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import {SiTailwindcss,SiNextdotjs, SiInsta360} from "react-icons/si";
import { Tabs, TabsList } from "@radix-ui/react-tabs";

const about = {
    title: 'about me',
    description :
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
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
            fieldName:"Experience",
            fieldValue:"1 year",
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
            fieldName:"Freelance",
            fieldValue:"Available",
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


{/*Education data*/ }

const education = {
    icon:"/assets/badge.svg",
    title:"My education",  
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    items:[
        {
            instution : "Grenoble INP - Ensimag",
            degree : "Engineering diploma",
            duration : "2023 - Present"
        },
        {
            compagny : "Lycée Claude Fauriel",
            degree : "Preparatory Classes",
            duration : "2022 - 2023"
        },
        {
            compagny : "Lycée Mohammed VI",
            degree : "Preparatory Classes",
            duration : "2020 - 2022"
        },
        {
            compagny : "Allal El Fassi High School",
            degree : "Baccalauréat",
            duration : "2020"
        },
    ]
}

const skills = {
    title:"My skills",  
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    skillList: [

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
            icon:<FaFigma/>,
            name :"figma",
        },


    ]
}



const Resume = () => {
    return(
        <motion.div
            initial={{ opacity : 0 }}
            animate={{
                opacity:1,
                transition: { delay:2.4, duration:0.4,ease:"easeIn"},
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container-mx-auto">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                    gap-6"> 
                        <TabsTrigger>Experience</TabsTrigger>
                        <TabsTrigger>Education</TabsTrigger>
                        <TabsTrigger>Skills</TabsTrigger>
                        <TabsTrigger>About me</TabsTrigger>
                    </TabsList>
                {/* content */}
                <div>content</div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;