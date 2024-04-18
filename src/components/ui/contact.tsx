import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

export function Contact() {
  const { width = 0 } = useWindowSize();
  return (
    <motion.footer id="contact"
      initial={{ opacity: 0.1, y: -60 }}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0">

      <motion.h1
        initial={{ opacity: 0, y: width >= 600 ? 100 : 0, x: width <= 600 ? 100 : 0 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Contact
      </motion.h1>
      <div className="w-full w-fit px-10 flex flex-col md:flex-row items-center content-center justify-evenly md:gap-4 gap-6 bg-gradient-to-br from-slate-300 to-slate-500 py-8 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl">
        <motion.a
          initial={{ opacity: 0, y: width >= 600 ? 100 : 0, x: width < 600 ? -120 : 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          href="https://twitter.com/alvi_d1"
          target="_blank"
          className="hover:text-blue-600 duration-300 ease-in-out transition-colors"
          id="twitter_contact_link">
          Twitter
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: width >= 600 ? 100 : 0, x: width < 600 ? -120 : 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          href="mailto:alvidervishaj9@gmail.com"
          target="_blank"
          className="hover:text-blue-600 duration-300 ease-in-out transition-colors"
          id="email_contanct_link">
          Email
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: width >= 600 ? 100 : 0, x: width < 600 ? -120 : 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          href="https://www.linkedin.com/in/alviii/"
          target="_blank"
          className="hover:text-blue-600 duration-300 ease-in-out transition-colors"
          id="linkedin_contact_link">
          LinkedIn
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: width >= 600 ? 100 : 0, x: width < 600 ? -120 : 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          href="https://github.com/AlviDervishaj"
          target="_blank"
          className="hover:text-blue-600 duration-300 ease-in-out transition-colors"
          id="github_contact_link">
          GitHub
        </motion.a>
      </div>
    </motion.footer>
  )
}
