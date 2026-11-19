import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Project from "../models/Project.js";

const seedDatabase = async () => {
  try {
    // 1. Seed Admin User if none exists
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      console.log("No users found. Seeding default Admin...");
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("jarvis_protocol", salt);

      await User.create({
        name: "Soumya Shukla",
        email: "admin@stark.com",
        password: hashedPassword,
        isAdmin: true,
      });
      console.log("Default Admin seeded: admin@stark.com / jarvis_protocol");
    }

    // 2. Seed Projects if none exist
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log("No project blueprints found. Seeding defaults...");
      const defaultProjects = [
        {
          title: "PureCart - MERN E-Commerce Platform",
          description: "Developed a full-stack e-commerce platform with secure JWT-based authentication and role-based admin access. Implemented product catalog, shopping cart, order management, and user order history functionalities. Integrated Stripe payment gateway.",
          techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Cloudinary"],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
          liveLink: "",
          githubLink: "",
          featured: true,
        },
        {
          title: "WalletX - Digital Wallet Application",
          description: "Built a full-stack digital wallet application with secure user authentication. Implemented peer-to-peer money transfer using MongoDB transactions for reliable data consistency. Developed real-time balance tracking and transaction history management.",
          techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
          image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80",
          liveLink: "",
          githubLink: "",
          featured: true,
        },
        {
          title: "Expense Tracker App",
          description: "Designed a clean expense manager dashboard with interactive analytical pie charts. Tracks monthly budgets, income sources, and categorized spending history. Built with MERN stack and secure route validation.",
          techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
          liveLink: "",
          githubLink: "",
          featured: true,
        },
      ];

      await Project.create(defaultProjects);
      console.log("Default project blueprints seeded successfully.");
    }
  } catch (error) {
    console.error("Database seeding failed:", error.message);
  }
};

export default seedDatabase;
