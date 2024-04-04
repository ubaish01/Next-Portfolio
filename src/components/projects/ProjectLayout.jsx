'use client'
import { motion } from "framer-motion";
import ExpandArrow from "../../../public/icons/ExpandArrow";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import img from "../../../public/memo.png";
import { Github, RadioTower } from "lucide-react";
import ItemLayout from "../about/ItemLayout";
import Link from 'next/link'
import { Tooltip, Button } from "@nextui-org/react";
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};


const ProjectLayout = ({ name, description, date, demoLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (boxRef.current && e.target.contains(boxRef.current)) setIsOpen(false);
    })

    return () => {
      window.removeEventListener('click',()=>{});
    }

  }, [])

  return (
    <motion.div
      variants={item}
      href={demoLink}
      ref={boxRef}
      target={"_blank"}
      animate={{ height: isOpen ? '30rem' : '64px' }}
      className={`text-sm cursor-pointer  md:text-base justify-start flex flex-col items-start w-full relative rounded-lg overflow-auto md:overflow-hidden custom-bg`}
    >

      <div onClick={() => { setIsOpen(prev => !prev) }} className=" w-full p-4 flex items-center justify-between " >
        <div className="flex items-center  justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>
        <div className="self-end  flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted  sm:text-foreground pr-2">
          {new Date(date).toDateString()}
        </p>
        <ExpandArrow open={isOpen} />
      </div>

      <div className="w-full grid grid-cols-12" >
        <div className="md:col-span-5 col-span-12 p-4" >
          <Image src={img} />
          <Image src={img} />
        </div>
        <div className="md:col-span-7 col-span-12 p-4" >
          <ul className="w-full pl-4 list-disc space-y-3 text-accent" >
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis nemo, nostrum enim blanditiis culpa!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis nemo, nostrum enim blanditiis culpa!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis nemo, nostrum enim blanditiis culpa!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis nemo, nostrum enim blanditiis culpa!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis nemo, nostrum enim blanditiis culpa!</li>
          </ul>
          <div className="w-full relative flex items-center mt-4 gap-4 pl-4 pr-6" >

            <Tooltip className="bg-black  rounded-md" content="Code stored in client's private repository">
              <div target="_blank" className="custom-bg-disabled shadow-none space-x-2 p-2 w-full  rounded-md flex items-center justify-center " >
                <Github />
                <p>Github</p>
              </div>
            </Tooltip>


            <Link href='https://github.com' target="_blank" className="custom-bg space-x-2 p-2 w-full  rounded-md flex items-center justify-center " >
              <RadioTower />
              <p>Live</p>
            </Link>
          </div>
        </div>
      </div>

    </motion.div >
  );
};

export default ProjectLayout;
