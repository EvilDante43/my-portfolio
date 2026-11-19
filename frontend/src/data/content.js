export const profile = {
  name: 'Soumya Shukla',
  email: 'soumyashukla08april@gmail.com',
  phone: '+91 7879227757',
  location: 'Bhopal, Madhya Pradesh, India',
  github: 'https://github.com/EvilDante43',
  linkedin: 'https://www.linkedin.com/in/soumya-shukla-8775a2326/',
  resume: '/Soumya_Shukla_Resume.pdf',
  resumeName: 'Soumya_Shukla_Resume.pdf',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const about = [
  'I\u2019m a Computer Science and Engineering undergraduate at Oriental Institute of Science and Technology, Bhopal.',
  'I enjoy building full-stack applications using the MERN stack and solving Data Structures and Algorithms problems using Java.',
  'I have hands-on experience developing authentication systems, REST APIs, database-driven applications, and responsive user interfaces.',
  'Through my projects and internship experience, I have developed an understanding of building practical software solutions, writing maintainable code, and working with modern development tools.',
  'I\u2019m continuously learning and improving my engineering skills to become a better software developer.',
];

export const education = [
  { title: 'B.Tech \u2013 Computer Science and Engineering', place: 'Oriental Institute of Science and Technology, Bhopal', period: '2023 \u2013 2027', detail: 'CGPA: 8.25/10' },
  { title: 'Class XII', place: 'Sharda Vidya Mandir, CBSE, Bhopal', period: '2023', detail: '85.3%' },
  { title: 'Class X', place: 'Sharda Vidya Mandir, CBSE, Bhopal', period: '2021', detail: '96.3%' },
];

export const skills = [
  { group: 'Programming Languages', icon: 'code', items: ['Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'Frontend Development', icon: 'layout', items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'Backend Development', icon: 'server', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { group: 'Databases', icon: 'db', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { group: 'Libraries and Tools', icon: 'tools', items: ['Axios', 'Zod', 'JWT', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'Netlify'] },
];

export const experience = {
  role: 'Full Stack Developer Intern',
  company: 'DecodeLabs',
  location: 'Remote',
  period: 'April 2026 \u2013 May 2026',
  points: [
    'Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB.',
    'Designed and implemented RESTful APIs to support scalable backend services.',
    'Built responsive user interfaces and integrated frontend components with backend APIs.',
    'Implemented JWT-based authentication, database operations, and API validation.',
    'Collaborated with the development team using Git and GitHub for version control, debugging, and feature development.',
  ],
};

export const featured = [
  {
    id: 'purecart', kind: 'grid', hue: 255, domain: 'pure-cart-phi.vercel.app', name: 'PureCart',
    title: 'PureCart \u2013 Full Stack E-Commerce Platform',
    description: 'A full-stack e-commerce platform featuring secure authentication, product browsing, shopping cart functionality, online payments, and order management.',
    features: ['JWT-based authentication', 'Role-based admin access', 'Product catalog', 'Shopping cart', 'Order management', 'User order history', 'Stripe payment integration', 'Cash on Delivery', 'RESTful API architecture', 'MongoDB database integration'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe', 'Cloudinary'],
    links: [{ label: 'Live Demo', href: 'https://pure-cart-phi.vercel.app/' }],
    related: {
      kind: 'table', hue: 255, domain: 'pure-cart-6vgb.vercel.app', name: 'PureCart Admin',
      title: 'PureCart \u2013 Admin Dashboard',
      description: 'An administrative dashboard designed to manage the PureCart e-commerce platform.',
      features: ['Product management', 'Image uploads using Cloudinary', 'Order management', 'Order status updates', 'Admin access control'],
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT'],
      links: [{ label: 'Admin Demo', href: 'https://pure-cart-6vgb.vercel.app/' }],
    },
  },
  {
    id: 'walletx', kind: 'wallet', hue: 165, domain: 'wallet-x-tau.vercel.app', name: 'WalletX',
    title: 'WalletX \u2013 Digital Wallet Application',
    description: 'A full-stack digital wallet application designed to provide secure user authentication, peer-to-peer money transfers, real-time balance tracking, and transaction management.',
    features: ['Secure JWT authentication', 'Password hashing using bcrypt', 'Peer-to-peer money transfers', 'MongoDB transactions for data consistency', 'Real-time balance tracking', 'Transaction history management', 'Responsive user interface'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Tailwind CSS'],
    links: [{ label: 'Live Demo', href: 'https://wallet-x-tau.vercel.app/signin' }],
  },
];

export const projects = [
  { id: 'expense', kind: 'list', hue: 30, domain: 'expense-tracker-mern-virid.vercel.app', name: 'Expense Tracker', title: 'Expense Tracker \u2013 MERN Application', description: 'A MERN stack expense tracking application designed to help users manage and monitor their expenses.', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'], links: [{ label: 'Live Demo', href: 'https://expense-tracker-mern-virid.vercel.app/' }] },
  { id: 'todo', kind: 'list', hue: 200, domain: 'mern-todo-app-opal.vercel.app', name: 'Todo App', title: 'Todo App \u2013 Task Management Application', description: 'A task management application built using the MERN stack.', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'], links: [{ label: 'Live Demo', href: 'https://mern-todo-app-opal.vercel.app/' }] },
  { id: 'amazon', kind: 'grid', hue: 40, domain: 'amazon-clone-two-roan.vercel.app', name: 'Amazon Clone', title: 'Amazon Clone \u2013 E-Commerce UI', description: 'An Amazon-inspired e-commerce interface developed to demonstrate frontend development and e-commerce UI implementation.', stack: ['React.js', 'JavaScript', 'HTML', 'CSS'], links: [{ label: 'Live Demo', href: 'https://amazon-clone-two-roan.vercel.app/' }] },
];

export const achievements = [
  { icon: 'medal', title: 'NPTEL Gold Medal', text: 'Awarded Gold Medal in the Top 5% for the NPTEL Programming in Java certification.' },
  { icon: 'code', title: 'Data Structures and Algorithms', text: 'Solved 250+ Data Structures and Algorithms problems on coding platforms.' },
  { icon: 'users', title: 'Hackathons', text: 'Participated in multiple hackathons, collaborating in teams to develop innovative software solutions.' },
];
