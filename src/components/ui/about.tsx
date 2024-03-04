import { motion } from "framer-motion";

export function About() {
  return (
    <div className="w-full h-fit px-2 pt-2 pb-80 mx-auto">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        About
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl"
      >
        Alvi is a freelancer and Front-End developer based in Albania with a passion for building digital services / stuff he wants.
        He has a knack for all things, from planning and designing all the way to solving real-life problems with code.
      </motion.p>
    </div>
  )
}
