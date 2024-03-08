import { motion } from "framer-motion";

export function Navigation() {

  const availableSections: Array<string> = ["Introduction", "About Me", "Projects", "Contact"];

  return (
    <motion.nav id="navigation"
      initial={{ opacity: 0.1, y: -60 }}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="w-full h-fit p-2 m-0 lg:relative absolute z-50 top-0 left-0 flex flex-row items-center content-center justify-evenly">
      {availableSections.map((element: string) => <a
        href={`#${element.toString().toLowerCase()}`}
        className="md:mt-4 bg-gradient-to-br from-slate-300 to-slate-500 md:py-4 py-2 px-2 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent"
        key={element.toString()}>
        {element}
      </a>)
      }
    </motion.nav>
  );
}
