'use client'
import { motion } from "framer-motion";
import ExpandArrow from "../../../public/icons/ExpandArrow";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Github, RadioTower } from "lucide-react";
import Link from 'next/link'
import { Tooltip, Button } from "@nextui-org/react";
import { formatDate } from "@/helper/formatDate";
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};


const ProjectLayout = ({ opened, id, setOpened, name, brief, date, demoLink, poster, link, points, github }) => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (boxRef.current && e.target.contains(boxRef.current)) setOpened("");
    })

    return () => {
      window.removeEventListener('click', () => { });
    }

  }, [])


  return (
    <motion.div
      variants={item}
      href={demoLink}
      ref={boxRef}
      target={"_blank"}
      animate={{ height: opened === id ? '35rem' : '64px' }}
      className={`text-sm cursor-pointer  md:text-base justify-start flex flex-col items-start w-full relative rounded-lg overflow-hidden   custom-bg`}
    >

      <div onClick={() => { setOpened(prev => prev === id ? "" : id) }} className=" w-full p-4 flex items-center justify-between " >
        <div className="flex items-center  justify-center space-x-2">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{brief}</p>
        </div>
        <div className="self-end  flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted  sm:text-foreground pr-2">
          {formatDate(date)}
        </p>
        <ExpandArrow open={opened === id} />
      </div>

      <div className={clsx("w-full pt-2 overflow-auto flex flex-col items-center justify-start transition-all duration-1000", opened === id ? "opacity-100" : 'opacity-0')} >
        <div className=" px-12" >
          <Image src={poster} alt="poster" />
        </div>
        <div className="p-4 px-12" >
          <ul className="w-full pl-4 list-disc space-y-3 text-accent" >
            {
              points?.map((point, index) => (
                <li key={index} >{point}</li>
              ))
            }
          </ul>
          <div className="w-full relative flex items-center mt-4 gap-4 pl-4 pr-6" >

            {
              github
                ?
                <Link href={github} target="_blank" className="custom-bg space-x-2 p-2 w-full  rounded-md flex items-center justify-center " >
                  <Github />
                  <p>Github</p>
                </Link>
                :
                <Tooltip className="bg-black  rounded-md" content="Code stored in client's private repository">
                  <div className="custom-bg-disabled shadow-none space-x-2 p-2 w-full  rounded-md flex items-center justify-center " >
                    <Github />
                    <p>Github</p>
                  </div>
                </Tooltip>
            }

            {

              link
                ?
                <Link href={link} target="_blank" className="custom-bg space-x-2 p-2 w-full  rounded-md flex items-center justify-center " >
                  <RadioTower />
                  <p>Demo</p>
                </Link>
                :
                <Tooltip className="bg-black  rounded-md" content="Project is not deployed">
                  <div className="custom-bg-disabled shadow-none space-x-2 p-2 w-full  rounded-md flex items-center justify-center " >
                    <RadioTower />
                    <p>Demo</p>
                  </div>
                </Tooltip>
            }
          </div>
        </div>
      </div>


    </motion.div >
  );
};

export default ProjectLayout;
