"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from '../hooks/hooks'

export default function About() {
  const { ref } = useSectionInView('About');

return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Graduated as {" "}
  <span className="font-medium">IT Technician</span>, I specialized in {" "}
  <span className="font-medium">Fullstack development.</span>{" "}
  <span className="italic"> Since then,</span> my passion for problem-solving has led me to develop applications that meet user needs
  I am proficient in technologies like {" "}
  <span className="underline">
  React, Next.js, Python, and Node.js. 
  </span>
</p>


{/* <p>
  <span className="italic">Cuando no estoy programando</span>, paso el tiempo 
  tocando el piano, navegando en internet o con mis mascotas. También disfruto{" "}
  <span className="font-medium">aprendiendo cosas nuevas</span>. Actualmente estoy
  aprendiendo sobre{" "}
  <span className="font-medium">historia y filosofía</span>. También estoy
  aprendiendo a tocar la guitarra.
</p> */}
    </motion.section>
  );
}