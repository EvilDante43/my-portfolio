import express from "express";

const router = express.Router();

// Static resume-derived data served through the API so the frontend
// fetches everything dynamically instead of hardcoding it.
const portfolioData = {
  name: "Soumya Shukla",
  role: "Software Development Engineer",
  tagline: "Full Stack Developer | MERN Specialist",
  contact: {
    phone: "+91 7879227757",
    email: "soumyashukla08april@gmail.com",
    linkedin: "#",
    github: "#",
  },
  summary:
    "Computer Science undergraduate with strong foundations in Data Structures & Algorithms and Full Stack Web Development. Skilled in building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Proficient in RESTful APIs, JWT authentication, and cloud deployment.",
  education: [
    {
      school: "Oriental Institute of Science and Technology, Bhopal",
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA: 8.25 / 10",
      period: "2023 – 2027",
    },
    {
      school: "Sharda Vidya Mandir, CBSE, Bhopal",
      degree: "Class XII (Senior Secondary)",
      score: "85.3%",
      period: "2023",
    },
    {
      school: "Sharda Vidya Mandir, CBSE, Bhopal",
      degree: "Class X (Secondary)",
      score: "96.3%",
      period: "2021",
    },
  ],
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "DecodeLabs · Remote",
      period: "Apr 2026 – May 2026",
      points: [
        "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
        "Designed and implemented RESTful APIs to support scalable and efficient backend services.",
        "Built responsive user interfaces and integrated frontend components with backend APIs.",
        "Implemented JWT-based authentication, database operations, and API validation for secure application development.",
        "Collaborated with the development team using Git and GitHub for version control, debugging, and feature development.",
      ],
    },
  ],
  projects: [
    {
      title: "PureCart",
      subtitle: "MERN E-Commerce Platform",
      stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Cloudinary"],
      period: "May 2026 – Jul 2026",
      points: [
        "Full-stack e-commerce platform with secure JWT-based authentication and role-based admin access.",
        "Product catalog, shopping cart, order management, and user order history.",
        "Secure online payments using Stripe along with Cash on Delivery (COD).",
        "Admin dashboard to manage products, upload images via Cloudinary, and update order status.",
        "RESTful APIs designed with Express.js and MongoDB for efficient data management.",
      ],
      deployment: "Frontend on Vercel · Backend on Render · MongoDB Atlas",
    },
    {
      title: "WalletX",
      subtitle: "Digital Wallet Application",
      stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
      period: "Jan 2026 – Mar 2026",
      points: [
        "Full-stack digital wallet application with secure user authentication and authorization.",
        "Peer-to-peer money transfer using MongoDB transactions for reliable data consistency.",
        "Real-time balance tracking and transaction history management.",
        "RESTful APIs with JWT authentication and bcrypt password hashing.",
        "Responsive UI built using React.js and Tailwind CSS.",
      ],
      deployment: "Frontend on Vercel · Backend on Render · MongoDB Atlas",
    },
  ],
  skills: {
    Languages: ["Java", "JavaScript", "TypeScript", "SQL"],
    Frameworks: ["React.js", "Node.js", "Express.js"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL"],
    "Libraries & Tools": ["JWT", "Zod", "Tailwind CSS", "Axios"],
    "Developer Tools": ["Git", "GitHub", "VS Code", "Vercel", "Render", "Netlify"],
  },
  achievements: [
    "Awarded Gold Medal (Top 5%) in the NPTEL Programming in Java certification.",
    "Solved 250+ Data Structures & Algorithms problems on coding platforms.",
    "Participated in multiple hackathons, collaborating in teams to develop innovative software solutions.",
  ],
};

// @route   GET /api/portfolio
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: portfolioData });
});

export default router;
