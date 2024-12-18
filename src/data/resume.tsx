import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Charan",
  initials: "Vadla",
  url: "https://dillion.io",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "CS Student exploring Full Stack Development, Machine Learning and Algorithms",
  summary: "I am an undergraduate Computer Science student and a passionate full-stack developer with a strong interest in algorithms and machine learning. I have experience building dynamic web applications With a foundation in technologies like React, Next.js, Django. I’m actively expanding my expertise in DSA, full-stack development, and machine learning to build impactful and scalable projects.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "C++",
    "Java",
    "React",
    "Next.js",
    "Django",
    "Flask",
    "SQL",
    "Prisma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "charanvadla27@gmail.com", //
    tel: "+916301389201",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vadlacharan",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/charan-vadla-14932524b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/charanvadla027",
        icon: Icons.x,

        navbar: true,
      },
     
      email: {
        name: "Send Email",
        url: "https://charanvadla27@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
   
  ],
  education: [
    {
      school: "SR University",
      href: "https://buildspace.so",
      degree: "Bachelor of Technology, Computer Science",
      logoUrl: "/sr.png",
      start: "2021",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "Syntax School - AI based Learning Mangement System",
      href: "https://github.com/vadlacharan/syntax-school-lms-for-coders-main",
      dates: "",
      active: true,
      description: "A user-friendly Learning Management System that allows instructors to create courses, quizzes, and coding assignments with automatic grading. Students can enroll, track progress, and compete on leaderboards, making learning interactive and engaging.",

            technologies: [
        "Next.js",
        "JavaScript",
        "Supabase",
        "Prisma",
        "React",
        "Gemini",
        "Shadcn UI",

      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vadlacharan/syntax-school-lms-for-coders-main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/syntaxschool.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Hiker Job Search",
      href: "https://github.com/vadlacharan/Hiker-jobsearch-Django-Project",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A job portal connecting recruiters and job seekers. Recruiters can post jobs and manage applications, while job seekers get personalized job recommendations and easy application tracking.",
      technologies: [
        "Python",
        "Django",
        "Htmx",
        "Tailwind CSS"
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/vadlacharan/Hiker-jobsearch-Django-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hiker.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Data Visualisation Dashboard",
      href: "https://github.com/vadlacharan/data-visualization-dashboard",
      dates: "",
      active: true,
      description:
      "An interactive dashboard designed to present complex data in a visually intuitive format. It helps users explore trends and insights through charts, graphs, and tables. Built with a focus on clarity and functionality, the dashboard enables businesses to make data-driven decisions efficiently and effectively",
      technologies: [
        "Python",
        "Django",
        "Htmx",
        "ChartJs",
        "Tailwind CSS"
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/vadlacharan/data-visualization-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dashboard.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
   
  ],

  
 
} as const;
