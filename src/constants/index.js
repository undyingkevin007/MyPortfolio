import {
  vue,
  springboot,
  java,
  python,
  jango,
  angular,
  netcore,
  csharp,
  php,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  leobit,
  perception,
  smartdata,
  tech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  { name: "Java", icon: java },

  {
    name: "React JS",
    icon: reactjs,
  },

  { name: "vue", icon: vue },
  { name: "Angular", icon: angular },
  { name: "python", icon: python },
  { name: "Net Core", icon: netcore },
  { name: "springboot", icon: springboot },
  { name: "Jango", icon: jango },

  {
    name: "PHP",
    icon: php,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  {
    name: "graphql",
    icon: graphql,
  },
  // {
  //   name: "postgresql",
  //   icon: postgresql,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company_name: "Leobit",
    icon: leobit,
    iconBg: "#333333",
    date: "Aug 2019 - May 2024",
  },
  {
    title: "Full-Stack Developer",
    company_name: "Perception System",
    icon: perception,
    iconBg: "#333333",
    date: "Feb 2018 - Jun 2019",
  },
  {
    title: "Junior Backend Developer",
    company_name: "Smartdata",
    icon: smartdata,
    iconBg: "#333333",
    date: "Jun 2016 - Jan 2018",
  },
  {
    title: "Junior React Developer",
    company_name: "Tech Decade",
    icon: tech,
    iconBg: "#333333",
    date: "Jul 2014 - May 2016",
  },
];

const projects = [
  {
    id: "project-1",
    name: "InnovateX",
    description: "A website app that displays InnovateX company",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/shaqdeff/KomiKult",
    demo: "https://innovatex.ca",
  },
  {
    id: "project-2",
    name: "Chewy",
    description:
      "Chewy is a famous websites that sells pet products and toys to US people",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://chewy.com",
  },
  {
    id: "project-3",
    name: "AtomicHub",
    description:
      "Create, sell or collect digital items secured with blockchain.",
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
    image: math,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://wax.atomichub.io/",
  },
  {
    id: "project-4",
    name: "sequenceqcs",
    description: `has been helping life sciences companies launch critical pharmaceutical projects`,
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
    image: movie,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://sequenceqcs.com/ ",
  },
  {
    id: "project-5",
    name: "metroffice",
    description:
      "I was faced with one of the most popular frameworks – MERN Stack.",
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
    image: nyeusi,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://www.metroffice.com/",
  },
];

export { services, technologies, experiences, projects };
