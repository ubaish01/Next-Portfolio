"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  const [opened, setOpened] = useState("");
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center  "
    >
      {projects.map((project, index) => {
        return <ProjectLayout opened={opened} setOpened={setOpened} key={index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
