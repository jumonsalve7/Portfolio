console.log("BASE_URL:", import.meta.env.BASE_URL);
export const projects = [
  {
    id: 1,
    title: "MoneyFlow - Expense Tracker",
    description:
      "A modern, full-featured expense tracking application built with React. MoneyFlow helps you manage your personal finances by tracking incomes and expenses, visualizing spending patterns, and converting between multiple currencies.",
    image: `${import.meta.env.BASE_URL}moneyflow.png`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/jumonsalve7/moneyflow-frontend",
    demo: "https://moneyflow-frontend-alpha.vercel.app/",
  },
  
  {
    id: 2,
    title: "Social Media App - AroundUS",
    description:
      "A social media-inspired web application where users can create an account, upload and manage image posts, and interact with other posts by liking them. The project focuses on user authentication, responsive design, and a modern, interactive user experience.",
    image: `${import.meta.env.BASE_URL}AroundUS.png`,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/jumonsalve7/web_project_api_full",
    demo: "https://socialmed.vitdam.org/login",
  },
  {
    id: 3,
    title: "My First Web Page - Resume",
    description:
      "This was my first website. I'm proud to see how I started and how far I've come, and how much there is still to learn.",
    image: `${import.meta.env.BASE_URL}SSD.png`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jumonsalve7/jumonsalve7.github.io",
    demo: "https://jumonsalve7.github.io/",
  },
];
