import { assets } from "./index";

/**
 * Contains all the copy (text) for the site.
 */
export const copy = {
  findMeOn: {
    text: "Find me on",
    subtext: (
      <>
        <span>wohlers.w@northeastern.edu</span>
        <span> &bull; </span>
        <a
          href="https://github.com/wwohlers/billwohlers-new"
          target="_blank"
          className="gray"
        >
          Built with React
        </a>
      </>
    ),
    items: [
      {
        logo: assets.logos.orgs.linkedin,
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/billwohlers/",
      },
      {
        logo: assets.logos.orgs.github,
        text: "GitHub",
        url: "https://github.com/wwohlers",
      },
      {
        logo: assets.logos.orgs.medium,
        text: "Medium",
        url: "https://medium.com/@billwohlers",
      },
    ],
  },
  home: {
    intro: {
      header: "Hi, I'm Bill",
      subtitle:
        "I build beautiful & functional web apps using modern technologies",
    },
    who: {
      header: "A little bit about me",
      items: {
        "I'm from": "Westchester, NY",
        "I currently live in": "Boston, MA",
        "I'm attending": "Northeastern University (class of 2023)",
        "My major is": "computer science",
        "I'm passionate about": "software design and engineering",
        // "Right now, I'm": "a software engineer at Reprise",
      },
    },
    techInterests: {
      header: "My go-to tech stack",
      useCaseText: "For",
      items: [
        {
          name: "TypeScript",
          logo: assets.logos.techs.typescript,
          tagline: "Versatile and rich ecosystem",
          useCases: "web clients, servers, mobile apps, and other software",
        },
        {
          name: "React",
          logo: assets.logos.techs.react,
          tagline: "Expressive and scalable",
          useCases: "web clients and mobile apps (React Native)",
        },
        {
          name: "NestJS",
          logo: assets.logos.techs.nest,
          tagline: "Robust and structured",
          useCases: "web servers and back-end software",
        },
      ],
      more: "See my Design Thoughts",
    },
    experience: {
      header: "My experience",
      items: [
        {
          header: "Professional",
          text: "Three years of web & app development experience on code bases large and small",
          logos: [
            assets.logos.orgs.c4c,
            assets.logos.orgs.chapter,
            assets.logos.orgs.reprise,
            assets.logos.orgs.trova,
            assets.logos.orgs.poloniex,
          ],
        },
        {
          header: "In my free time",
          text: "As a hobby, I build websites, apps, npm libraries, and more",
          logos: [
            assets.logos.orgs.undue,
            assets.logos.orgs.stride,
            assets.logos.orgs.huskyhusky,
            assets.logos.orgs.dunk,
          ],
        },
      ],
      more: "View my Portfolio",
    },
    testimonial: {
      quote:
        "I was extremely impressed by his business acumen, constructive feedback, and his ability to deliver high-quality code. He took the initiative to lead sprints, rigorously test his work, and provide continuous updates to the team. You can’t teach hustle or passion and Bill has both.",
      portrait: assets.michaelFodera,
      name: "Michael Fodera",
      title: "CEO, Trova",
    },
  },
  resume: {
    education: {
      school: "Northeastern University",
      tags: [
        "Class of 2023",
        "Honors College",
        "Khoury College of Computer Sciences",
      ],
      degree: {
        name: "B.S. in Computer Science",
        gpa: 3.9,
        courses: {
          "Fundamentals of CS 1": "B+",
          "Honors Discrete Structures": "A",
          "Fundamentals of CS 2": "A",
          "Mathematics of Data Models": "A",
          "Foundations of Cybersecurity": "A",
          "Software Project Management": "A",
          "Logic and Computation": "A",
          "Object-Oriented Design": "A",
          "Algorithms & Data": "A",
          "Networks & Distributed Systems": "A",
          "Software Development": "A-",
          "Computer Systems": "A",
          "Web Development": "A",
          "Fundamentals of Digital Design": "A",
        },
      },
    },
    professionalSummary: [
      "I love software engineering and all of its possibilities and challenges. I'm particularly interested in full-stack web design and development, including mobile app development with React Native.",
      "My ideal organization or team is fast-paced, embraces modern technology, and embodies the creative spirit of engineering.",
    ],
    skills: {
      "TypeScript/JS": 1,
      React: 0.9,
      "HTML/CSS": 0.9,
      "Next.js": 0.9,
      Vue: 0.8,
      "REST API Design": 0.8,
      AWS: 0.7,
      Java: 0.6,
      Git: 0.6,
      "React Native": 0.5,
      "UI/UX Design": 0.5,
      C: 0.4,
      Docker: 0.4,
      Kotlin: 0.4,
      Python: 0.4,
      Angular: 0.3,
    },
    experience: [
      {
        title: "Software Engineer at Reprise",
        logo: assets.logos.orgs.reprise,
        logoUrl: "https://getreprise.com",
        dates: "Jan 2022 - Jun 2022",
        tags: ["6-month co-op", "Vue", "Python"],
        responsibilities: [
          "Realized modern UI concepts using Vue/TailwindCSS as part of a major app redesign",
          "Built out new back-end features for major changes to core software platform",
        ],
      },
      {
        title: "Software Engineer at Poloniex",
        logo: assets.logos.orgs.poloniex,
        logoUrl: "https://poloniex.com",
        dates: "Jan 2021 - Jun 2021",
        tags: ["6-month co-op", "Vue", "Kotlin (Android Native)"],
        responsibilities: [
          "Reworked complex pages in web client for a site-wide redesign",
          "Fixed bugs and completed assigned issues for web and native Android apps",
        ],
      },
      {
        title: "Web Developer at Chapter",
        logo: assets.logos.orgs.chapter,
        logoUrl: "https://getchapter.app",
        dates: "Jul 2021 - Sep 2021",
        tags: ["Contractual", "Vue", "HTML/SCSS"],
        responsibilities: [
          "Developed UI for large web client feature builds",
          "Improved existing site designs using modern Vue, HTML and CSS",
        ],
      },
      {
        title: "Software Engineer at Code 4 Community",
        logo: assets.logos.orgs.c4c,
        logoUrl: "https://c4cneu.com",
        dates: "Sep 2019 - Ongoing",
        tags: ["Volunteer", "React", "Vue", "NestJS", "Java", "Postgres"],
        responsibilities: [
          "Led front-end development of c4cneu.com",
          "Contribute and review code for React web clients and NestJS REST API servers",
          "Spearheaded and oversaw transition from Java (Spring) web servers to NestJS",
          "Developed scaffold web server in NestJS for future projects",
        ],
      },
      {
        title: "Software Engineer at Trova",
        logo: assets.logos.orgs.trova,
        logoUrl: "https://trova.io",
        dates: "Apr 2020 - Sep 2020",
        tags: ["Internship", "Angular", "Express.js", "Postgres", "Heroku"],
        responsibilities: [
          "Completed large feature builds including matching algorithm and events calendar",
          "Led refactoring of back-end server code",
          "Executed critical DevOps functions on Heroku and AWS",
        ],
      },
    ],
    projects: [
      {
        title: "Undue",
        logo: assets.logos.orgs.undue,
        logoUrl: "https://getundue.com",
        dates: "August 2022",
        tags: ["Solo app development", "React Native"],
        responsibilities: [
          "Designed Undue, a planning/calendar app with a focus on simplicity and ease of use",
          "Architected and developed the app using React Native/Expo",
        ],
      },
      {
        title: "Dunk.js",
        logo: assets.logos.orgs.dunk,
        logoUrl: "https://www.npmjs.com/package/@bswohlers/dunk",
        dates: "July 2021",
        tags: [
          "Solo architect and dev",
          "NPM Package",
          "TypeScript",
          "React",
          "Redux",
        ],
        responsibilities: [
          "Designed, architected, developed, and published Dunk.js, a batteries-included, scalable, TypeScript-first state management framework",
        ],
      },
      {
        title: "Stride",
        logo: assets.logos.orgs.stride,
        logoUrl: "",
        dates: "Feb 2021 - Jul 2021 (discontinued)",
        tags: [
          "Solo architect and dev",
          "React",
          "React Native",
          "NestJS",
          "AWS",
          "MongoDB",
        ],
        responsibilities: [
          "Led architecture design for web client, mobile app, and REST server for an influencer marketing platform",
          "Leveraged AWS Elastic Load Balancer, S3, CloudFront, DocumentDB, Route53, and others",
          "Designed, developed, and deployed microservice back-end using NestJS and MongoDB",
          "Designed, developed, and deployed a React web client and primary React Native mobile app",
          "Discontinued in Sep 2021 due to changes in iOS that presented insurmountable challenges to our business model",
        ],
      },
      {
        title: "The Husky Husky",
        logo: assets.logos.orgs.huskyhusky,
        logoUrl: "https://thehuskyhusky.com",
        dates: "Feb 2020 - Ongoing",
        tags: ["Vue (Typescript)", "NestJS", "MongoDB", "AWS"],
        responsibilities: [
          "Architected full-stack content management system for student-run satire publication",
          "Designed, developed, and deployed Vue front-end using AWS S3, CloudFront, and Route53",
          "Designed, developed, and deployed NestJS server using AWS ELB and EC2",
        ],
      },
    ],
  },
};
