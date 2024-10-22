import { ProjectType } from "./types";
export const projects: ProjectType[] = [
  {
    title: 'Rite Electric LLC',
    description: 'Certified and insured with more than 18 years of professional experience in helping customers with electrical problems.',
    date: new Date(Date.UTC(2022, 8, 11)).toDateString(),
    location: 'https://www.riteelectricllc.com/',
    image: "/rite-electric.jpg",
    rating: 5,
    timestamp: Date.now() - 7,
  },
  {
    title: "ChatNext",
    description: "Fast and reliable online messaging app. ",
    image: "/chatnext-transparent.svg",
    date: new Date(Date.UTC(2022, 9, 10)).toDateString(),
    location: "https://chatnext.vercel.app/",
    rating: 5,
    timestamp: Date.now() - 8,
  },
  {
    title: "Flagfluent",
    image: "/flagfluent.png",
    description: "Cool game to play with your friends. Displays a random flag of a country. Very Hard !!",
    date: new Date(Date.UTC(2022, 3, 25)).toDateString(),
    location: "https://flagfluent.netlify.app/",
    rating: 5,
    timestamp: Date.now() - 9,
  },
  {
    title: "Albanianslate",
    description: "Translate Youtube Videos in Albanian using OpenAI.",
    date: new Date(Date.UTC(2024, 2, 4)).toDateString(),
    location: "https://github.com/AlviDervishaj/Albanianslate",
    rating: 5,
    timestamp: Date.now() - 10,
    image: "/albanianslate.svg",
  },
  {
    title: "Neovim Config",
    description: "My curated Neovim Config",
    date: new Date(Date.UTC(2024, 2, 1)).toDateString(),
    location: "https://github.com/AlviDervishaj/config",
    rating: 5,
    timestamp: Date.now() - 11,
    image: "/nice-blue-background.png",
  },
];

