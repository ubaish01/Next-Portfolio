import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import getExperience from "@/helper/getExperience";
import { projectsData } from "@/app/data";
import GitHubCalendar from 'react-github-calendar';

const GITHUB_USER_NAME = 'ubaish01'
const FEATURE_REPO_NAME = 'Next-Portfolio'

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


        <ItemLayout className={"col-span-full !justify-start !gap-0 flex flex-col md:col-span-8 !p-8"}>
          <h1 className="font-semibold capitalize w-full text-left text-2xl text-accent sm:text-3xl" >achievements</h1>
          <div className="w-full flex gap-2 flex-col items-start text-xl" >
            <div>1. AIR 98 in Coding Ninja’s Weekend Contest among 3k+ participants</div>
            <div>1. Institute rank 1 at gfg coding portal among 1500+ students</div>
            <div>2. 1550+ Leetcode ratings</div>
            <div>3. First runner up SIH 2022</div>
            <div>4. 500+ Dsa problems solved</div>
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



        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,tailwind,bootstrap,react,next,vite,npm,yarn,nodejs,expressjs,mongodb,postgres,prisma,babel,git,github,gitlab,vercel,netlify,postman,linux,vscode,c,cpp,python`}
            alt="skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USER_NAME}&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="ubaish"
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
              alt="ubaish"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full flex-col"}>
          <h1 className="font-semibold capitalize w-full text-left text-2xl pl-6 sm:text-3xl" >Days i <span className="text-accent" >code</span></h1>
          <GitHubCalendar
            username="ubaish01"
            blockMargin={8}
            colorScheme="dark"
            theme={{ light: ["#000", "#581c87", "#581c87", "#581c87", "#581c87"], dark: ["#000", "#FEFE5B", "#FEFE5B", "#FEFE5B", "#FEFE5B"] }}
            showWeekdayLabels={true}
            hideColorLegend={true}
          />
        </ItemLayout> */}

      </div>
    </section>
  );
};

export default AboutDetails;
