import mskobs_img from "../assets/images/mskobs.jpg";
import easyshop_img from "../assets/images/easyshop.jpg";
import imakerbot_img from "../assets/images/imakerbot.jpg";
import premiere_img from "../assets/images/premiere.jpg";
import tunisiareads_img from "../assets/images/tunisiareads.jpg";
import makesens_img from "../assets/images/makesens.jpg";

export const my_builds = [
  {
    company: "MSK Technologie",
    name: "MSKIOBS Employment Platform",
    description: `A user-friendly job search platform with comprehensive job listings, advanced search capabilities, secure user authentication, and an efficient employer dashboard.`,
    image_url: mskobs_img,
    techs: ["Angular", ".NET Core", "ASP.NET", "TypeScript", "Jest (JWT)"],
    /* github_url: null,
    live_url: "Link to Video",*/
  },
  {
    company: "WEBDESIGN TUNISIE",
    name: "Easy Shop Hub",
    description: `An E-commerce website with an attractive interface, diverse product catalog, advanced search, secure payment options, and an efficient admin interface.`,
    image_url: easyshop_img,
    techs: ["React", "Node.js", "Express.js", "MongoDB"],
    /* github_url: null,
    live_url: "Link to Video",*/
  },
  {
    company: "GDCollectData",
    name: "iMakerBot Mobile Interface",
    description: `Development of the mobile application interface for the conversational engine of "iMakerBot" to address user search queries.`,
    image_url: imakerbot_img,
    techs: ["AngularJS", "Ionic Framework", "SASS", "HTML5", "CSS3"],
    /*github_url: null,
    live_url: "Link to Video",*/
  },
  {
    company: "Première Consulting",
    name: "Première Consulting Web Application",
    description: `Design and development of a consulting web application with user account management based on roles and type of services provided.`,
    image_url: premiere_img,
    techs: ["PHP", "Symfony", "HTML5", "Bootstrap", "jQuery", "CSS3"],
    /*github_url: null,
    live_url: "Link to Video",*/
  },
  {
    company: "Hobby Project",
    name: "TunisiaReads Library",
    description: `A Spring Boot-based application that enables users to manage books, authors, and loans in a library. Featuring secure access, search functionalities, and user ratings.`,
    image_url: tunisiareads_img,
    techs: [
      "Spring Boot",
      "Thymeleaf",
      "Hibernate",
      "Spring Security",
      "Spring MVC",
      "Bootstrap",
      "MySQL/H2",
    ],
    /*github_url: null,
    live_url: null,*/
  },
  {
    company: "Hobby Project",
    name: "MakeSens",
    description: `Implemented a database for creating image datasets in the new version of the MakeSens open-source project. Developed a free online tool for labeling photos.`,
    image_url: makesens_img,
    techs: ["TypeScript", "SCSS", "MongoDB"],
    /*github_url: null,
    live_url: null,*/
  },
];
