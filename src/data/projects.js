import classiq from "../assets/classiq.png";
import ykgbookshop from "../assets/ykgbookshop.png";
import librarymanagement from "../assets/librarymanagement.png";
import ghjobsearch from "../assets/ghjobsearch.png";
import bookmark from "../assets/bookmark.png";
import gallery from "../assets/gallery.png";
import atc from "../assets/atc.png";
import coursecorrekt from "../assets/coursecorrekt.png";
import xyzvote from "../assets/xyzvote.png";
import lacreamy from "../assets/lacreamy.png";
import portfolioScreenshot from "../assets/portfolio-project.png";

export const projects = [
  {
    slug: "classiq",
    title: "ClassIQ",
    featured: true,
    blurb:
      "Students can mark attendance by scanning a code, share class materials, and take quizzes. Teachers and school staff can manage classes and send text updates.",
    outcome: "One place for schools to manage attendance and class activities.",
    stack: ["React", "PHP", "SMS"],
    liveUrl: "https://class-iq.netlify.app",
    githubUrl: null,
    image: classiq,
  },
  {
    slug: "atlantic-travel-consult",
    title: "Atlantic Travel Consult",
    featured: false,
    blurb:
      "A travel website where people can explore destinations, learn about travel services, and plan a trip.",
    outcome: "Helps travelers discover trips and connect with the travel team.",
    stack: [],
    liveUrl: "https://atlantictravelc.com",
    githubUrl: null,
    image: atc,
  },
  {
    slug: "course-korrekt",
    title: "Course Korrekt",
    featured: false,
    blurb:
      "A place for students to share and find past exam questions and other study documents. People who upload documents can earn money when others buy them.",
    outcome: "Helps students find study materials and gives uploaders a way to earn.",
    stack: [],
    liveUrl: "https://coursecorrekt.netlify.app",
    githubUrl: null,
    image: coursecorrekt,
  },
  {
    slug: "xyzvote",
    title: "xyzVote",
    featured: false,
    blurb:
      "An event platform where people can vote and buy tickets for award shows. Organizers can run online and in-person events, with mobile money payments.",
    outcome: "Helps event organizers manage voting and ticket sales.",
    stack: [],
    liveUrl: "https://xyzvote.com",
    githubUrl: null,
    image: xyzvote,
  },
  {
    slug: "la-creamy",
    title: "LaCreamy",
    featured: false,
    blurb:
      "A bakery website where customers can browse the menu and place orders for freshly made pastries.",
    outcome: "Makes it easier for customers to explore and order baked goods.",
    stack: [],
    liveUrl: "https://lacreamycake.netlify.app",
    githubUrl: null,
    image: lacreamy,
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
    liveUrl: null,
    githubUrl: "https://github.com/classic792/Library-management-system",
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
    liveUrl: null,
    githubUrl: "https://github.com/classic792/Library-management-system",
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
    liveUrl: "https://mishaelsix.netlify.app",
    githubUrl: "https://github.com/mishael6",
    image: portfolioScreenshot,
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
    githubUrl: "https://github.com/mishael6/Bookmark-Manager",
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
    githubUrl: "https://github.com/mishael6/art-gallery-website",
    image: gallery,
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const selectedWork = projects.filter((project) =>
  ["classiq", "ghana-job-search", "ykg-bookshop"].includes(project.slug)
);
