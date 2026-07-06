import moneyflow from "../../assets/moneyflow.png";
import AroundUS from "../../assets/AroundUS.png";
import SSD from "../../assets/SSD.png";

export const projects = [
  {
    id: 1,
    title: "MoneyFlow - Expense Tracker",
    description:
      "A modern, full-featured expense tracking application built with React. MoneyFlow helps you manage your personal finances by tracking incomes and expenses, visualizing spending patterns, and converting between multiple currencies.",
    image: moneyflow,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/jumonsalve7/moneyflow-frontend",
    demo: "https://moneyflow-frontend-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "Social Media App - AroundUS",
    description:
      "A social media-inspired web application where users can create an account, upload and manage image posts, and interact with other posts by liking them. The project focuses on user authentication, responsive design, and a modern, interactive user experience.",
    image: AroundUS,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/jumonsalve7/web_project_api_full",
    demo: "https://socialmed.vitdam.org/login",
  },
  {
    id: 3,
    title: "My First Web Page - Resume",
    description:
      "This was my first website. I'm proud to see how I started and how far I've come, and how much there is still to learn.",
    image: SSD,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jumonsalve7/jumonsalve7.github.io",
    demo: "https://jumonsalve7.github.io/",
  },
];