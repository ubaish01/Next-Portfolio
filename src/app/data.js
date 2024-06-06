import posterMemocd from '../../public/memo.png'
import posterShoorah from '../../public/shoorah.png'
import posterKaboodle from '../../public/kaboodle.png'
import posterAsiclab from '../../public/asiclab.png'
import posterChat from '../../public/chitchat.png'
import posterChess from '../../public/chess.png'

export const projectsData = [

  {
    id: 2,
    name: "Shoorah",
    brief: "Transform the way you feel",
    date: "2023-09-01",
    link: "https://apps.apple.com/gb/app/shoorah-mental-health-calm/id1669683359",
    github: null,
    poster: posterShoorah,
    points: [
      "Contributed to the creation of Shoorah, a dynamic and inclusive wellbeing application aimed at fostering mental health support and overall wellness. The app offers a diverse array of wellness tools to empower users in their journey towards mental health and personal growth.",
      "Played an integral role within the backend team at Shoorah.io, leveraging Node.js to develop the new admin dashboard. This involved architecting and implementing robust backend functionalities to ensure seamless management and administration of the platform.",
      "Implemented innovative features for users to input their daily moods, enabling the generation of comprehensive weekly and monthly reports. Leveraging data aggregation and visualization techniques, these reports provide valuable insights into user sentiment and mental wellbeing trends, empowering individuals to track their progress and make informed decisions about their mental health journey.",
      "Designed and implemented backend solutions with a focus on scalability, performance, and reliability. Leveraged best practices in Node.js development to ensure optimal system efficiency and responsiveness, even under high traffic loads.",
    ]
  },
  {
    id: 4,
    name: "Asic Lab",
    brief: "One stop portal to improve your skills",
    date: "2024-02-01",
    link: "https://asiclab.in/",
    github: null,
    poster: posterAsiclab,
    points: [
      " Led the development of ASIClabs, an innovative educational platform tailored to the needs of digital design enthusiasts, specifically focusing on Verilog coding. As the sole developer behind the web application, I conceptualized and built ASIClabs to provide a seamless and enriching learning experience in the complex field of digital design.",
      " Integrated a sophisticated Verilog compiler within ASIClabs, allowing users to compile their code and execute a predefined set of test cases. Similar to platforms like LeetCode, ASIClabs provides users with real-time feedback on their Verilog code, indicating the number of test cases passed and failed, facilitating rapid learning and skill development.",
      " Implemented a streamlined content management system within ASIClabs, allowing administrators to effortlessly create and manage courses, lectures, problem statements, and testimonials. By facilitating easy upload and organization of educational materials, ASIClabs ensures a curated and structured learning experience for users.",
      "Designed and implemented an intuitive admin dashboard, providing administrators with comprehensive analytical insights into platform performance and user engagement. Through interactive charts and visualizations, administrators can track key metrics such as monthly sales, subscriber growth, daily visits, course popularity, lecture views, and content engagement, enabling data-driven decision-making and strategic planning.",
      "Leveraged an advanced tech stack comprising React, TypeScript, MongoDB, Node.js, Express, and Tailwind CSS to architect and develop ASIClabs from scratch. By employing industry best practices and scalable architecture design, I ensured ASIClabs was equipped to handle current user demands while remaining adaptable for future growth and expansion.",
    ]
  },
  {
    id: 1,
    name: "Memocd",
    brief: "Earn money by organizing trips for people",
    date: "2023-04-17",
    link: "https://memocd.com",
    github: null,
    poster: posterMemocd,
    points: [
      "MemoCD (memo.) is a platform based in DRC(Africa) where people can create places to organize trips (outings) and create virtual galleries to exhibit and sell their artworks",
      "The platform fetch posts using a crawler(related to travel) from different social networks  at a time interval and shows it on the home page to let user's tag partners asking for a trip",
      "Platform has 4 different user roles : User, Partner, Moderator, Admin with different set of features",
      "User : Create/buy artwork, Book trip, tag partner, report user/trip/artwork, apply to become partner",
      "Partner : Collaborate in artworks, Create place/trip, Manage artwork and trips from the dashboard",
      "Moderator : Manage reports,Remove spam artworks/trips, payout earnings and manage refunds",
      "Admin : All the features that a moderator and partner have with aditional feature of removing users managing hashtags to fetch posts from social network and visualized dashboard showing the analytics of the platform"
    ]
  },
  {
    id: 3,
    name: "Kaboodle",
    brief: "We got everything you need.",
    date: "2023-12-01",
    link: "https://kaboodleai.com/",
    github: null,
    poster: posterKaboodle,
    points: [
      "Developed KaboodleAi, a cutting-edge AI-powered platform that leverages state-of-the-art AI models such as GPT-4, Mistral, Perplexity, Cohere, DreamStudio, DALLE-3, and LLAMA-2. This platform empowers users with AI-driven capabilities to generate text, images, code, and more.",
      " Advocated for a user-centric design approach throughout the development of KaboodleAi, prioritizing features such as user history tracking and dynamic text formatting to enhance the user experience. By understanding the client's target audience and user needs, I ensured KaboodleAi provided an intuitive and engaging platform for creative expression and exploration.",
      "Led the seamless integration of multiple AI models into KaboodleAi's backend infrastructure, ensuring smooth functionality and performance. My expertise in developing robust APIs and handling raw data responses enabled the client to leverage AI capabilities effortlessly, empowering users with powerful tools for text generation, image synthesis, and more.",
      "Collaborated closely with the client to drive continuous improvement and optimization of KaboodleAi. By remaining responsive to client feedback and industry trends, I facilitated ongoing enhancements to the platform, ensuring it remained a valuable asset that evolved with the client's needs and technological advancements.",
    ]
  },
  {
    id: 5,
    name: "Chess Kings",
    brief: "(Under Development)",
    date: "2024-05-20",
    link: "https://drive.google.com/file/d/1dR-lZJmolAz4sufN4A8WB9NVqOyYoGrm/view?usp=sharing",
    github: "https://github.com/ubaish01/Chess-King",
    poster: posterChess,
    points: [
      "Developed a real time multiplayer chess game that allows you to play chess anywhere with strangers over the world.",
      "Utilized React for frontend, Node.js and Express for backend and Socket.IO for real-time communication.",
      "Leveraged Socket.IO for seamless real-time communication, ensuring instant moves delivery , board state updation and synchronization.",
      "In future i will add realtime video and audio chat with oppenents, leaderboard and rankings.",
    ]
  },
  {
    id: 6,
    name: "Chit-O-Chat",
    brief: "Chat in real time",
    date: "2023-02-01",
    link: null,
    github: "https://github.com/ubaish01/chit-o-chat",
    poster: posterChat,
    points: [
      "Developed Chit-o-Chat, a real-time chat application enabling users to register, chat one-on-one, and create group chats.",
      "Utilized React for frontend, Node.js and Express for backend, MongoDB for database management, and Socket.IO for real-time communication.",
      "Implemented user registration/authentication functionality and intuitive chat interfaces.",
      "Enabled users to create and manage group chats, fostering collaborative communication.",
      "Leveraged Socket.IO for seamless real-time communication, ensuring instant message delivery and synchronization.",
    ]
  },
];

export const BtnList = [
  { label: "Blogs", link: "/blogs", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/ubaish01",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mohd-ubaish/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://twitter.com/ubaiishh",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://docs.google.com/document/d/1QJoD-ITnucXoycNeGnVpDZcpB1K5m_z28v_R_sKKlUY/edit",
    icon: "resume",
    newTab: true,
  },
];

const skills = [
  "html",
  "css",
  "js",
  "tailwind",
  "bootstrap",
  "react",
  "next",
  "vite",
  "npm",
  "yarn",
  "nodejs",
  "expressjs",
  "mongodb",
  "postgres",
  "prisma",
  "babel",
  "git",
  "github",
  "gitlab",
  "vercel",
  "netlify",
  "postman",
  "linux",
  "vscode",
  "c",
  "cpp",
  "python"
]

const achievements = [
  "AIR 98 in Coding Ninja’s Weekend Contest among 3k+ participants",
  "Institute rank 1 at gfg coding portal among 1500+ students",
  "1550+ Leetcode ratings",
  "First runner up SIH 2022",
  "500+ Dsa problems solved",
]

const experience = [
  {
    company: "Oodles Technologies",
    designation: "full stack developer",
    from: '2023-04-17',
    to: "present",
    points: [
      "Building applications using a diverse tech stack: React, Node, Express, JavaScript, MongoDB, and Python",
      "Responsible for gathering requirements, providing optimal solutions, and ensuring client satisfaction",
      "Ensuring continuous improvement and meeting client needs through effective communication and understanding.",
      "Achieved 30% performance improvement, enhancing user experience through optimizations and scalability",
    ]
  },
  {
    company: "Money Mileage Investments",
    designation: "sde intern",
    from: '2022-10-03',
    to: '2023-01-02',
    points: [
      " Played a key role in developing Money Mileage's Mobile Application ,helping the team to reach 5,000 downloads",
      "Collaborated closely with the backend team to ensure seamless frontend-backend communication",
      "Developed frontend pages with intricate logic, providing users a seamless experience",
      "Actively resolved reported bugs, improved overall app quality and increased the ratings to 4.5 on play store",
    ]
  },
]

export const about = {
  name: "Ubaish Malik",
  about: `Embark on a mystical journey into the realm of web development, where I conjure full-stack applications with boundless creativity and expertise. With a versatile mastery of the arcane arts, I craft portals (websites) that seamlessly connect users across the digital cosmos.
  In the ancient arts of the Jamstack, I find strength, crafting portals imbued with speed, security, and dynamism. With an eye for design and a flair for innovation, I weave digital experiences that captivate the senses and push the boundaries of what's possible.  
  Join me on this mystical odyssey as we shape the digital landscape together.Let's infuse our creations with innovation, creativity, and boundless curiosity. `,
  projects: projectsData.length,
  experience,
  achievements,
  skills
}