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
  carrent,
  jobit,
  tripguide,
  threejs,
  lpu_logo,
  cipherschool_logo,
  dav_school_logo,
  doctor_appointment,
  banking_app,
  job_scheduler,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "Lovely Professional University",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Lovely_Professional_University_logo.png/120px-Lovely_Professional_University_logo.png",
    iconBg: "#fff",
    date: "Sep 2023 - Present",
    points: [
      "CGPA: 6.78",
      "Participated in coding and innovation hackathons.",
      "Attended various seminars, workshops, and webinars.",
      "Focused on core subjects like Data Structures, Algorithms, and Object-Oriented Programming.",
    ],

  },
  {
    title: "Intermediate",
    company_name: "DAV School",
    icon: dav_school_logo,
    iconBg: "#383E56",
    date: "Apr 2020 - Mar 2021",
    points: [
      "Completed intermediate education with 76.0%.",
      "Developed a strong foundation in science and mathematics.",
    ],
  },
  {
    title: "Matriculation",
    company_name: "DAV School",
    icon: dav_school_logo,
    iconBg: "#E6DEDD",
    date: "Apr 2018 - Mar 2019",
    points: [
      "Completed matriculation with 77%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Doctor Appointment System",
    description:
      "A full-stack appointment management platform enabling patients to book, update, and track doctor consultations seamlessly. Built secure RESTful APIs using Spring Boot and Java.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: doctor_appointment,
    source_code_link: "https://github.com/Avinasshshsh54321q",
  },
  {
    name: "Banking System App",
    description:
      "A secure banking platform enabling users to manage accounts, view balances, perform transactions, and track activity history. Handled authentication, deposits, and API integration.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: banking_app,
    source_code_link: "https://github.com/Avinasshshsh54321q",
  },
  {
    name: "Job & Event Scheduler",
    description:
      "Built a Job & Event Scheduler using C++ and core DSA concepts, implementing an efficient event scheduler, planning a day, and time-management features.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "dsa",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: job_scheduler,
    source_code_link: "https://github.com/Avinasshshsh54321q",
  },
];

export { services, technologies, experiences, testimonials, projects };
