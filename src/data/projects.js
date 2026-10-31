import classiq from "../assets/classiq.png";
import portfolio from "../assets/portfolio.png";
import ykgbookshop from "../assets/ykgbookshop.png";
import librarymanagement from "../assets/librarymanagement.png";
import ghjobsearch from "../assets/ghjobsearch.png";
import bookmark from "../assets/bookmark.png";
import gallery from "../assets/gallery.png";

export const projects = [
  {
    slug: "classiq",
    title: "ClassIQ",
    featured: true,
    blurb:
      "QR attendance, class-rep tools, an admin dashboard, and SMS — plus a mobile flow where students scan in, share materials, and run trivia.",
    outcome: "Attendance and classroom ops in one educational platform.",
    stack: ["React", "PHP", "SMS"],
    liveUrl: "https://classiq.free.nf",
    githubUrl: null,
    image: classiq,
  },
  {
    slug: "ghana-job-search",
    title: "Ghana Job Search",
    featured: false,
    blurb:
      "Job listings, applications, and profiles connecting seekers with employers in Ghana.",
    outcome: "A local job board with tracking and user accounts.",
    stack: ["PHP", "MySQL"],
    liveUrl: "https://ghjobsearch.free.nf",
    githubUrl: null,
    image: ghjobsearch,
  },
  {
    slug: "ykg-bookshop",
    title: "YKG Bookshop",
    featured: false,
    blurb:
      "An online bookstore with catalog browsing and a checkout-oriented storefront.",
    outcome: "A shoppable catalog for a Ghanaian bookshop.",
    stack: ["PHP", "MySQL"],
    liveUrl: "https://ykgbooks.free.nf",
    githubUrl: null,
    image: ykgbookshop,
  },
  {
    slug: "library-management",
    title: "Library Management System",
    featured: false,
    blurb:
      "First full-stack React project: catalog, loans, and admin flows with a Node backend.",
    outcome: "A working library desk in the browser.",
    stack: ["React", "Node.js"],
    liveUrl: "https://ykgbooks.free.nf",
    githubUrl: null,
    image: librarymanagement,
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    featured: false,
    blurb:
      "Personal site for work, story, and contact — rebuilt as a dark editorial layout.",
    outcome: "The site you are on now.",
    stack: ["React", "CSS", "Vite"],
    liveUrl: "/",
    githubUrl: "https://github.com/mishael6",
    image: portfolio,
  },
  {
    slug: "bookmanager",
    title: "Bookmanager",
    featured: false,
    blurb:
      "Inventory, sales, and customer records for a bookshop counter — no public live URL yet.",
    outcome: "A desk tool for stock and sales.",
    stack: ["JavaScript"],
    liveUrl: null,
    githubUrl: null,
    image: bookmark,
  },
  {
    slug: "modern-art-gallery",
    title: "Modern Art Gallery",
    featured: false,
    blurb:
      "A gallery layout for contemporary work and artist notes. Demo link coming.",
    outcome: "A visual catalog of artworks.",
    stack: ["HTML", "CSS"],
    liveUrl: null,
    githubUrl: null,
    image: gallery,
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const selectedWork = projects.filter((project) =>
  ["classiq", "ghana-job-search", "ykg-bookshop"].includes(project.slug)
);
