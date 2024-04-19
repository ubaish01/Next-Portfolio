import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import getExperience from "@/helper/getExperience";
import { about, projectsData } from "@/app/data";
import GitHubCalendar from 'react-github-calendar';
import { formatDate } from "@/helper/formatDate";

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
            {about.about}
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {about.projects}+ <sub className="font-semibold text-base">Projects</sub>
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

          {
            about.experience?.map((job, index) => (


              <div key={index} className="flex w-full flex-col gap-2 items-start" >
                <div className="w-full flex md:flex-row flex-col items-start md:items-center justify-between" >
                  <div className="flex md:flex-row md:items-center flex-col md:gap-2" >
                    <span className="capitalize text-2xl md:text-xl font-semibold text-no" >{job.company}</span>
                    <span className="md:flex hidden h-6 w-[2px] bg-accent " ></span>
                    <span className="capitalize text-xl md:text-base font-semibold " >{job.designation}</span>
                  </div>
                  <div className="text-accent capitalize" >{formatDate(job.from)} - {formatDate(job.to)}</div>
                </div>
                <ul className="list-disc flex flex-col gap-1 md:px-5 px-2" >
                  {
                    job.points?.map((point, i) => (
                      <li key={i} >{point}.</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

        </ItemLayout>


        <ItemLayout className={"col-span-full !justify-start !gap-0 flex flex-col md:col-span-8 !p-8"}>
          <h1 className="font-semibold capitalize w-full text-left text-2xl text-accent sm:text-3xl" >achievements</h1>
          <ul className="w-full list-disc pl-4 flex gap-2 flex-col items-start text-base" >
            {
              about.achievements?.map((item, index) => (
                <li key={index}>{item}.</li>
              ))
            }
          </ul>
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
            src={`https://skillicons.dev/icons?i=${about.skills.join(",")}`}
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
