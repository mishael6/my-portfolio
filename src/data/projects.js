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
      "Students can mark attendance by scanning a code, share class materials, and take quizzes. Teachers and school staff can manage classes and send text updates.",
    outcome: "One place for schools to manage attendance and class activities.",
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
      "A website where people in Ghana can find jobs, apply, and keep track of their applications.",
    outcome: "Helps job seekers connect with employers in Ghana.",
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
      "An online shop where customers can browse and order books from YKG Bookshop.",
    outcome: "Lets customers browse books from the shop online.",
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
      "A system for keeping track of library books, loans, returns, and staff tasks.",
    outcome: "Helps library staff manage books and borrowing.",
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
      "My website for sharing my projects, background, and contact details.",
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
      "A tool for a bookshop to track books in stock, sales, and customer details. It is not online yet.",
    outcome: "Helps a bookshop keep track of stock and sales.",
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
      "An online gallery for browsing modern art and reading about the artists. A demo is not available yet.",
    outcome: "A place to view artworks and learn about their artists.",
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
