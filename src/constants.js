// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import LTSU_logo from './assets/education_logo/LTSU_logo.png';
import TPV_logo from './assets/education_logo/TPV_logo.png';
import SVM_logo from './assets/education_logo/SVM_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.jpg';
import csprepLogo from './assets/work_logo/cs_prep.webp';
import movierecLogo from './assets/work_logo/movie_rec.jpg';
import npmLogo from './assets/work_logo/npm.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    img: LTSU_logo,
    school: "Lamrin Tech Skills University",
    date: "Sept 2023 - Aug 2027",
    grade: "7.81 CGPA",
    desc: "I am studying my BTech in Computer Science with specialization in Cyber Security from LTSU, Ropar. Throughout my studies, I am immersed in a variety of subjects that deepen my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gain practical insights into the world of software development.",
    degree: "BTech - Computer Science (Cyber Security)"
  },
  {
    id: 1,
    img: TPV_logo,
    school: "T P Verma College",
    date: "Apr 2020 - March 2022",
    grade: "62%",
    desc: "I completed my class 12 education from T P Verma College, West Champaran, Bihar, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "BSEB(XII) - PCM with Computer Science"
  },
  {
    id: 2,
    img: SVM_logo,
    school: "Saraswati Vidya Mandir, Narkatiaganj",
    date: "Apr 2019 - March 2020",
    grade: "67%",
    desc: "I completed my class 10 education from Saraswati Vidya Mandir, Narkatiaganj, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X) - Science with Computer Application"
  },
];

export const projects = [
  {
    id: 0,
    title: "My Portfolio",
    description:
      "I built a fully responsive and dynamic portfolio website using the MERN stack (MongoDB, Express.js, React, Node.js) to showcase my projects, skills The website features a modern UI, smooth animations, and a clean layout designed to provide a seamless browsing experience.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "Tailwind CSS", "MongoDB", "Express.js"],
    github: "https://github.com/anshumanjs/My-portfolio-",
    webapp: "",
  },
  {
    id: 1,
    title: "Therapy Scheduling & Patient Management Software",
    description:
      "Developed a full-stack web application with authentication, notifications, feedback loop, and health dashboards.Implemented pre/post therapy notifications and patient health reports tracking progress after each therapy",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "nodejs", "expressjs", "mongodb", "firebase", "API"],
    github: "https://github.com/anshumanjs/panchakarma-therapy-management",
    webapp: "",
  },
  {
    id: 2,
    title: "spotify clone",
    description:
      "Built a responsive music streaming web app with play, pause, and playlist management features. Implemented clean UI and interactive design using JavaScript, HTML, CSS. ",
    image: csprepLogo,
    tags: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshumanjs/spotify-clone",
    webapp: "",
  },
  {
    id: 3,
    title: "Feedback collection app",
    description:
      "Designed and deployed a web-based feedback application to collect and store user responses. Integrated database for structured storage and retrieval.",
    image: movierecLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshumanjs/feedback-app",
    webapp: "",
  },
  
];