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
    "Full Stack Developer with hands-on experience in scalable web systems, microservices, CRM platforms, audit systems, and billing applications. Strong in both frontend and backend development with production bug fixing and feature delivery experience. Focused on clean architecture and high performance solutions.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "MySQl",
    "MongoDB",
    "Javascript",
    "Spring Boot",
    "Java",
    "PostgreSQL",
    "NestJS",
    "Azure",
  ],
  experience: [
    {
      company: "Tedekstra",
      href: "",
      logoUrl: "/me.png",
      role: "Full Stack Developer",
      location: "Liverpool, England, United Kingdom (Remote)",
      start: "Jul 2025",
      end: "Present",
      description:
        "• Lead contributor on Complince, a UK-based business sites, buildings, and construction audit management platform.\n• Resolved 600+ production bugs across frontend and backend systems.\n• Created new REST endpoints for site check and audit workflows.\n• Implemented PDF generation for 28 audit and compliance templates.\n• Delivered UI fixes and backend logic improvements across microservices.\n• Stack: Java Spring Boot microservices, PostgreSQL, React, Redux, Bootstrap.",
      badges: ["Remote"],
    },
    {
      company: "Tedekstra",
      href: "",
      logoUrl: "/me.png",
      role: "Software Engineering Trainee",
      location: "Liverpool, England, United Kingdom (Remote)",
      start: "Mar 2025",
      end: "Jul 2025",
      description:
        "• Wrote clean, reusable code following modern engineering practices.\n• Optimized application performance for better responsiveness.\n• Assisted in frontend and backend integration tasks.",
      badges: ["Remote"],
    },
  ],
  workProjects: [
    {
      title: "Complince",
      href: "",
      dates: "Work Project",
      description:
        "- Fixed 600+ production bugs across services and UI modules.\n- Built audit endpoints and compliance workflows.\n- Implemented a 28-template PDF generation system.",
      technologies: [
        "Spring Boot Microservices",
        "PostgreSQL",
        "React",
        "Redux",
        "Bootstrap",
      ],
      links: [],
    },
    {
      title: "Alliance Connectivity",
      href: "",
      dates: "Work Project",
      description:
        "- Designed and developed the system end-to-end independently.\n- Built backend billing and profit calculation services.\n- Developed a modern dashboard UI for operations.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vite",
        "TypeScript",
        "React",
        "Zustand",
        "Tailwind CSS",
      ],
      links: [],
    },
    {
      title: "Mployr",
      href: "",
      dates: "Work Project",
      description:
        "- Built a microservices architecture.\n- Developed email notification and invoice services.",
      technologies: [
        "Spring Boot Microservices",
        "PostgreSQL",
        "React",
        "Redux",
      ],
      links: [],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/pm_resume.pdf", icon: StickyNoteIcon, label: "Resume" },
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
    {
      title: "Potion Notes",
      href: "https://potion-notes-nine.vercel.app/",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "Developed a nice easy to use free notes application similar to notion.",
      technologies: [
        "Next.js",
        "Typescript",
        "EdgeStore",
        "Convex",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://potion-notes-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pratul03/potion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/potion.png",
    },
  ],
} as const;
