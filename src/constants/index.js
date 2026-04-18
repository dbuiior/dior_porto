import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
// import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am an enthusiastic full stack developer who enjoys building strong and scalable web applications. With years of experience, I have developed skills in HTML, C, CSS, JavaScript, React, and MySQL, as well as working with Excel. My goal is to use my knowledge to create creative solutions that help businesses grow and provide great experiences for users.

.`;

export const ABOUT_TEXT = `I am constantly eager to learn new technologies and adapt to evolving challenges in the tech industry. I thrive in collaborative environments, enjoy solving complex problems, and am always looking for ways to expand my knowledge.Whether it's exploring new frameworks, improving my coding practices, or learning about the latest industry trends.I actively seek opportunities for growth, both through hands-on experience and through continuous learning, ensuring that I can bring innovative and effective solutions to every project I work on.`;

export const EXPERIENCES = [
  {
    year: "On going Project",
    role: "Read File for Delivery Documentation",
    company: "Business Report",
    description: `Creating a delivery report by reading a CSV file, which will then be sent to the database. This process enables us to calculate business profit and track the quantity of items ordered.`,
    technologies: ["SQL Server","Excel","Jupyter Notebook","Visual Paradigm"],
  },
  {
    year: "2024",
    role: "Portofolio Web",
    company: "Self Porto",
    description: `creating a personal web portfolio using React for its dynamic and component-based structure, paired with Tailwind CSS to enhance the design aesthetics, making the portfolio visually appealing and modern. This project serves both as a learning experience and a way to showcase my skills in web development, while ensuring a clean, responsive.`,
    technologies: ["React","Node","Tailwind"],
  },
  {
    year: "2023",
    role: "Analyzing Data by Comparing Model",
    company: "Data Analyze",
    description: `Perform a analyzing data, with 1 data source, with then comparing each model to calculate the accuracy obtained.`,
    technologies: ["Ipynb","Jupyter NoteBook","Machine Learning","Kaggle"],
  },
  {
    year: "2022 - 2023",
    role: "Write File, Searching and Sorting",
    company: "Assignment Project",
    description: `Developed hotel around the world study case project using C programming languange to perform sort,searching and write file, continued with flowchart progress.`,
    technologies: ["C","Draw.io","Excel CSV File"],
  },
  {
    year: "2022 - 2023",
    role: "Database Design",
    company: "Pharmacy Study Case",
    description: `Developed and normalized the core functional data of the pharmacy to ensure data integrity and eliminate redundancy. This process guarantees that each table is functionally independent while still maintaining the ability to access and relate to other tables seamlessly, without encountering any data anomalies and follow up with ERD.`,
    technologies: ["Excel","Visual Paradigm"],
  },
  {
    year: "2022",
    role: "Website Design",
    company: "Watch Company and E-Commerce Market Website",
    description: `Contributed to the development of web applications using Figma, HTML, CSS, and JS.`,
    technologies: ["Figma","HTML","CSS","JavaScript"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    category: "Web",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS","SQL Server"],
    link: "https://www.figma.com/proto/QBaA5epR7ru3UoHMFyvkvq/TaniBoen?node-id=444-1390&starting-point-node-id=444%3A1390",
  },
  {
    title: "Web Design",
    category: "Web",
    image: project2,
    description:
      "In my web design projects, I focus on creating visually appealing and user-friendly websites that enhance the overall user experience. Each project involves careful consideration of layout, color schemes, typography, and imagery to ensure a cohesive and engaging design",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    link:"https://www.figma.com/proto/qUHta2oid3hfA0SjPZNoXw/Project-Jam?node-id=2-29&node-type=canvas&t=LTtDMCfpxP4fbhbe-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
  },
  {
    title: "Data Analytics",
    category: "Data",
    image: project4,
    description:
      "A scientific study focused on analyzing sequences of data by comparing various machine learning methods to achieve optimal accuracy",
    technologies: ["ipynb", "Jupyter Notebook","mySQL"],
    link:"https://colab.research.google.com/drive/1zfjqVsEVwZe9GsaSA__5J6TQICxEIW4j#scrollTo=JReXXYW_TmJk",
  },
];

export const CONTACT = {
  phoneNo: "+6287853330699",
  email: "adior.gandawidjaja@gmail.com",
};
