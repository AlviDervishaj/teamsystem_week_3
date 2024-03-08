import { motion } from "framer-motion";
import { Project } from "./Project";

type ProjectType = {
  title: string,
  description: string,
  location: string,
  date: string,
  timestamp: number,
  rating: number,
}

export function Projects() {
  const projects: ProjectType[] = [
    {
      title: 'Rite Electric LLC',
      description: 'Certified and insured with more than 18 years of professional experience in helping customers with electrical problems.',
      date: new Date(Date.UTC(2022, 8, 11)).toDateString(),
      location: 'https://www.riteelectricllc.com/',
      rating: 5,
      timestamp: Date.now() - 7,
    },
    {
      title: "ChatNext",
      description: "Fast and reliable online messaging app. ",
      date: new Date(Date.UTC(2022, 9, 10)).toDateString(),
      location: "https://chatnext.vercel.app/",
      rating: 5,
      timestamp: Date.now() - 8,
    },
    {
      title: "Flagfluent",
      description: "Cool game to play with your friends. Displays a random flag of a country. Very Hard !!",
      date: new Date(Date.UTC(2022, 3, 25)).toDateString(),
      location: "https://flagfluent.netlify.app/",
      rating: 5,
      timestamp: Date.now() - 9,
    },
    {
      title: "Youtube Clone",
      description: "Youtube UI Clone made with NextJs and Tailwind ",
      date: new Date(Date.UTC(2022, 4, 18)).toDateString(),
      location: "https://alvi-youtube.vercel.app/",
      rating: 5,
      timestamp: Date.now() - 9,
    },
    {
      title: "Singly Linked List",
      description: "See how a singly linked list works, and why it is practical and very useful.",
      date: new Date(Date.UTC(2023, 5, 2)).toDateString(),
      location: "https://singly-linked-list.vercel.app/",
      rating: 5,
      timestamp: Date.now() - 10,
    },
    {
      title: "Albanianslate",
      description: "Translate Youtube Videos in Albanian using OpenAI.",
      date: new Date(Date.UTC(2024, 2, 4)).toDateString(),
      location: "https://github.com/AlviDervishaj/Albanianslate",
      rating: 5,
      timestamp: Date.now() - 10,
    },
    {
      title: "Neovim Config",
      description: "My curated Neovim Config",
      date: new Date(Date.UTC(2024, 2, 1)).toDateString(),
      location: "https://github.com/AlviDervishaj/Nvim",
      rating: 5,
      timestamp: Date.now() - 11,
    },
  ];

  function renderProjects() {
    const renderedProjects: Array<JSX.Element> = [];
    for (const p of projects) {
      renderedProjects.push(new Project(p).renderProject())
    }
    return renderedProjects;
  }
  return (
    <div className="w-full h-fit px-2 pt-2 mx-auto" id="projects">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="my-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Projects
      </motion.h1>
      {renderProjects()}
    </div>
  )
}
