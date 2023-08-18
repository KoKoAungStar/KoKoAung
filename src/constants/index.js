import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  Uopeople,
  instagram,
  GC,
  Appsheet,
  Laravel,
  Blog                            
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Laravel developer",
    icon: web,
  },
  {
    title: "Data analyst",
    icon: mobile,
  },
  {
    title: "Appsheet developer",
    icon: backend,
  },
  {
    title: "University student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Appsheet",
    icon: Appsheet,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: Laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Logistics developer",
    company_name: "Trading, Logistic, HR, Appsheet",
    icon: GC,
    iconBg: "#383E56",
    date: "Sept 1 2022 - 24 July 2023",
    points: [
      "Creating logistics Trading app with low code app with Google Appsheet and Appscripts",
      "Created over 5 apps for Logistics, Trading, Marketing, GC ship, and HR ",
      "All apps are still using and maintaining today",
      "Analyze the data come from app and report to admin",
    ],
  },
  {
    title: "University Student",
    company_name: "BEHS, EYU, Uopeople",
    icon: Uopeople,
    iconBg: "#E6DEDD",
    date: "June 2007 - today",
    points: [
      "I was second year international relations student before covid. I pause my student life after covid.",
      "I am pursuing a bachelor degree in computer science from University of People. Learning computer science at uni is more structured and improve my skills as IT professional.",
      "I have accomplished many certificates from coursera including PHP Michigan specialization certificates. Check certificates from my github Account.",
      "I have been creating many projects with laravel, jquery and tailwind css. All of the projects uploaded to github account,. Now, I am learning frontend javascript libraries like React.",
    ],
  },
];


const projects = [
  {
    name: "Inventory System",
    description:
      "Fully functional inventory management system with laravel",  
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/KoKoAungStar/Inventory-Management-System-With-Laravel/blob/main/inventory.png?raw=true",
    source_code_link: "https://github.com/KoKoAungStar/Inventory-Management-System-With-Laravel",
  },
  {
    name: "Job listing",
    description:
      "Mid level job listing project needed for every working laravel projects",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: "https://www.technoloader.com/blog/wp-content/uploads/2020/06/hire-laravel-developers.jpg",
    source_code_link: "https://github.com/KoKoAungStar/Laragig",
  },
  {
    name: "Instagram clone",
    description:
      "This is an instagram clone projects. I have learnt the essential laravel from this project",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    
    image: instagram,
    source_code_link: "https://github.com/KoKoAungStar/FreeCodeGram",
  },

  {
    name: "Personal Blog Laravel",
    description:
      "This is an Personal blog projects. I learn many laravel, juquery from this project",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    
    image: Blog,
    source_code_link: "https://github.com/KoKoAungStar/Personal-Blog-Web-App-laravel-",
  },

  {
    name: "API CRUD AXIOS",
    description:
      "Fundamental API project with laravel and axios",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
    ],
    image: "https://th.bing.com/th/id/OIP.C6juDELOFc1ktp7iV91ErQAAAA?pid=ImgDet&rs=1",
    source_code_link: "https://github.com/KoKoAungStar/Laravel-Api-with-axios",
  }
];

export { services, technologies, experiences, projects };