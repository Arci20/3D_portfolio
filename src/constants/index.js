import {
  Wordpress,
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
  php,
  git,
  figma,
  asana,
  meta,
  Boum,
  explore,
  kak,
  laboum,
  ndkak,
  shoes,
  threejs,
  Linux,
  Incident,
  Audit,
  SQL,
  Python,
  sql,
  python,
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
    title: "Collaborator",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Fast Learner",
    icon: backend,
  },
  {
    title: "Adaptable",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    image: html,
  },
  {
    name: "CSS 3",
    image: css,
  },
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "React JS",
    image: reactjs,
  },
  {
    name: "Redux Toolkit",
    image: redux,
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    name: "Wordpress",
    image: Wordpress,
  },
  {
    name: "canva",
    image: git,
  },
  {
    name: "SQL",
    image: sql,
  },
  {
    name: "Python",
    image: python,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "La Boum",
    icon: Boum,
    iconBg: "#383E56",
    date: "Sept 2022 - Oct 2022",
    points: [
      "Developing and maintaining web-based platform that allows users to buy and search their favorite coffee providing a convenient shopping wherever they are at a very affordable price.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "NDKAK",
    icon: kak,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Developing and maintaining online education site for cyber security that enables users to learn about new cyber security trends.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Xplorear",
    icon: explore,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Developing and maintaining a Fullstack ecommerce website that allows users to search and buy shoes at a very affordable price.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Coffee Shop",
    description:
      "Web-based platform that allows users to buy and search their favorite coffee providing a convenient shopping wherever they are at a very affordable price.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: laboum,
    src1: "https://glistening-pavlova-5d7ed9.netlify.app/",
  },
  {
    name: "NDKAK",
    description:
      "Online education site for cyber security enables users to learn about new cyber security trends.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ndkak,
    src1: "https://unrivaled-chaja-f7c318.netlify.app/index.html?fbclid=IwAR2-o7kx58QAEHIeDYQhGjcAREOsLnNh8zLfinin8kRJ1qpubDsmZGAftWE",
  },
  {
    name: "Xplorear",
    description:
      "A Fullstack ecommerce website that allows users to search and buy shoes at a very affordable price.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
    ],
    image: shoes,
    src1: "https://xplorear.vercel.app/?fbclid=IwAR1KqazWvRiFdv1nsAA9_ibGFV3uiqioTSaXaVDNiz92dRRUcT5_SiRfT-E",
  },
  {
    name: "File permissions",
    description: "Ensure users on this team, authorized with the appropriate permissions to helps keep the system secure.",
    tags: [
      {
        name: "LINUX",
        color: "green-text-gradient",
      }
    ],
    image: Linux,
    src1: "https://drive.google.com/file/d/1DjQNAsmrQbfR0F4xBP3pMZrG3F1N0IHW/view?usp=drive_link",
  },
  {
    name: "Incident handler's journal",
    description: "Investigating a small U.S. health care clinic specializing in delivering primary care services that has suffered from ransomware.",
    tags: [
      {
        name: "NIST",
        color: "blue-text-gradient",
      }
    ],
    image: Incident,
    src1: "https://drive.google.com/file/d/1PenH_OCT0CKW9CRFt3MaQDMWEEC-nW_G/view?usp=drive_link",
  },
  {
    name: "Security_audit",
    description: "The manager of a small U.S. business  has decided that an internal IT audit needs to be conducted to ensure business continuity and compliance, as the business grows",
    tags: [
      {
        name: "OWASP",
        color: "pink-text-gradient",
      }
    ],
    image: Audit,
    src1: "https://drive.google.com/drive/folders/17OwOlzSUVQHB-tcov6BG5Kxkuum4A3m7?usp=drive_link",
  },
  {
    name: "SQL Filters",
    description: "Investigate potential security issues that involve login attempts and employee machines. to help keep the system secure.",
    tags: [
      {
        name: "SQL",
        color: "pink-text-gradient",
      }
    ],
    image: SQL,
    src1: "https://drive.google.com/file/d/16xNaavupsIDnhDvmV_GSC4dcxfcr9Ykn/view?usp=drive_link",
  },
  {
    name: "Python",
    description: "Conduct regular file update that identifies the employees who can access restricted content. The contents of the file are based on who is working with personal patient records. Employees are restricted access based on their IP address.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      }
    ],
    image: Python,
    src1: "https://drive.google.com/file/d/1qXSUS0fGTJpINKIoG_vM-nScMfMkiQVi/view?usp=drive_link",
  },
];

export { services, technologies, experiences, testimonials, projects };
