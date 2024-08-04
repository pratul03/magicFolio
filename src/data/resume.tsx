import { Icons } from "@/components/icons";
import { HomeIcon, StickyNoteIcon } from "lucide-react";

export const DATA = {
  name: "Pratul Makar",
  initials: "PM",
  url: "https://magic-folio.vercel.app/",
  location: "Kolkata, WB",
  locationLink: "https://www.google.com/maps/place/Baruipur",
  description: "Aspiring Software Engineer.Love to learn and build things.",
  summary:
    "I am a student at [GMIT](https://gmitkolkata.org/) pursuing a B.Tech in Computer Science and Engineering. I am passionate about building scalable and efficient software systems. I have experience in Full Stack Development and Android app development.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MySQl",
    "MongoDB",
    "Javascript",
    "Spring Boot",
    "Java",
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/pmresume.pdf", icon: StickyNoteIcon, label: "Resume" },
  ],
  contact: {
    email: "pratulmakar02@gmail.com",
    mo: "+91 9382216381",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pratul03",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pratul-makar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pratulmakar02@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Gargi Memorial Institute of Technology",
      href: "https://gmitkolkata.org/",
      degree: "Bachelors of Technology in Computer Science and Engineering",
      logoUrl: "/GMIT.png",
      start: "2025",
      end: "2021",
    },
    {
      school: "Sundarban Adarsha Vidyamandir",
      href: "https://www.facebook.com/SundarbanAdarshaVidyamandir/",
      degree: "12th (Science)",
      logoUrl: "/sav.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Sitarampur High School (H.S)",
      href: "https://www.facebook.com/p/Sitarampur-High-School-100057060746130/",
      degree: "10th",
      logoUrl: "/sp.png",
      start: "2013",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "sZoom",
      href: "https://s-zoom.vercel.app/",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "Developed a video conferencing web app with features like screen sharing, chat, and recording with ease.",
      technologies: [
        "Next.js",
        "Typescript",
        "STREAM-IO",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://s-zoom.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/szoom.png",
    },
    {
      title: "Hotel Booking System",
      href: "https://github.com/pratul03/Hotel-Booking-Management-System",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a Hotel Booking System with features like booking, cancellation, and room management For seamless Traveling.",
      technologies: [
        "React.js",
        "Javascript",
        "MySQL",
        "Java",
        "TailwindCSS",
        "Spring Boot",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/pratul03/Hotel-Booking-Management-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hba.png",
    },
    {
      title: "Tour & Travel",
      href: "https://final-project-neon.vercel.app/",
      dates: "Nov 2022 - Dec 2022",
      active: true,
      description:
        "Developed a Tour & Travel website for booking tours and travel packages.",
      technologies: ["Javascript", "CSS", "HTML"],
      links: [
        {
          type: "Website",
          href: "https://final-project-neon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pratul03/FINAL_PROJECT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tt.png",
    },
    {
      title: "3D Portfolio",
      href: "https://pmport.vercel.app/",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "Developed a 3D Portfolio website to showcase my projects and skills.",
      technologies: [
        "Next.js",
        "Typescript",
        "Three.js",
        "React-three-fiber",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://pmport.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pratul03/Personal_Portfolio_WebSite/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/3dp.png",
    },
  ],
} as const;
