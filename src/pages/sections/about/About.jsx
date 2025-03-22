import React from "react";
import TitlePart from "../../../components/TitlePart/TitlePart";

import img1 from "../../../assets/images/img1.png";

import { useStyles } from "./about.styles";

function About() {
  const styles = useStyles();
  const skills = [
    "JavaScript (ES6+)",
    "ReactJs",
    "Angular",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Firebase",
    ".NET Core",
    "ASP.NET",
    "Java",
    "C#",
    "Python",
    "Docker",
    "Jenkins",
    "GitLab CI",
    "Machine Learning",
    "Data Mining",
    "Data Analysis",
  ];

  return (
    <div className={styles.about} id="About">
      <TitlePart num={"01."}>About Me</TitlePart>
      <div className="container">
        <div className="description">
          <p>
            I am Samah Sebai, a proactive Software Engineer based in{" "}
            <span className="imp">Kista, Stockholm</span>, with a strong passion
            for crafting cutting-edge solutions. My expertise spans full-stack
            development, with a focus on technologies like{" "}
            <span className="imp">React</span>,{" "}
            <span className="imp">Angular</span>,{" "}
            <span className="imp">Node.js</span>, and{" "}
            <span className="imp">.NET</span>. I have completed the{" "}
            <span className="imp">
              Applied Machine Learning and Data Mining
            </span>{" "}
            program at{" "}
            <span className="imp">KTH Royal Institute of Technology</span>,
            where I explored data-driven solutions for performance optimization.
          </p>
          <p>
            With hands-on experience from internships at{" "}
            <span className="imp">MSK Technologie</span>,{" "}
            <span className="imp">WEBDESIGN TUNISIE</span>, and{" "}
            <span className="imp">GDCollectData</span>, I have developed and
            delivered impactful projects, including employment platforms,
            e-commerce websites, and mobile applications. I thrive in dynamic
            environments, leveraging agile methodologies to deliver scalable and
            user-centric solutions.
          </p>
          <p>
            Here are some of the technologies I’ve been working with recently:
          </p>
          <ul className="skills">
            {skills.map((skill, key) => {
              return (
                <li key={key}>
                  <span className="point">▹</span> {skill}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="img-part">
          <div className="img-container">
            <div
              className="img"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="box-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
