import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import getExperience from "@/helper/getExperience";
import { projectsData } from "@/app/data";

const GITHUB_USER_NAME = 'ubaish01'
const FEATURE_REPO_NAME = 'The-Code-School'

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {projectsData.length}+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {getExperience()}+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full flex flex-col items-start justify-start "}
        >
          <h1 className="font-semibold w-full text-left text-2xl text-accent sm:text-3xl md:text-4xl xl:text-5xl">
            Companies I Collaborated With
          </h1>

          <div className="flex w-full flex-col gap-2 items-start" >
            <div className="w-full flex md:flex-row flex-col items-start md:items-center justify-between" >
              <div className="flex md:flex-row md:items-center flex-col md:gap-2" >
                <span className="capitalize text-2xl md:text-xl  font-semibold " >Oodles Technologies</span>
                <span className="md:flex hidden h-6 w-[2px] bg-accent " ></span>
                <span className="capitalize text-xl md:text-base font-semibold " >Full stack developer</span> </div>
              <div className="text-accent" >Apr 23 - Present</div>
            </div>
            <ul className="list-disc flex flex-col gap-1 md:px-5 px-2" >
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Sit ullam at temporibus impedit veniam saepe</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam at temporibus impedit veniam saepe</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam at temporibus impedit veniam saepe</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam at temporibus impedit veniam saepe</li>
            </ul>
          </div>

          <div className="flex w-full flex-col gap-2 items-start" >
            <div className="w-full flex md:flex-row flex-col items-start md:items-center justify-between" >
              <div className="flex md:flex-row md:items-center flex-col md:gap-2" >
                <span className="capitalize text-2xl md:text-xl font-semibold text-no" >Money Mileage investments</span>
                <span className="md:flex hidden h-6 w-[2px] bg-accent " ></span>
                <span className="capitalize text-xl md:text-base font-semibold " >sde intern</span>
              </div>
              <div className="text-accent" >Oct 22 - Jan 22</div>
            </div>
            <ul className="list-disc flex flex-col gap-1 md:px-5 px-2" >
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Sit ullam at temporibus impedit veniam saepe</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam at temporibus impedit veniam saepe</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam at temporibus impedit veniam saepe</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam at temporibus impedit veniam saepe</li>
            </ul>
          </div>

        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${GITHUB_USER_NAME}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="ubaish"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER_NAME}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Ubaish"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USER_NAME}&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href={`http://github.com/${GITHUB_USER_NAME}/${FEATURE_REPO_NAME}`}
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=${GITHUB_USER_NAME}&repo=${FEATURE_REPO_NAME}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
