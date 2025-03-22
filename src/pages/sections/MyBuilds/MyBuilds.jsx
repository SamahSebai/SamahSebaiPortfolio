import React from "react";
import { useStyles } from "./mybuilds.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";

import img from "../../../assets/images/temp/halcyon.avif";

import github_icon from "../../../assets/svgs/GitHub-1.svg";
import extern_icon from "../../../assets/svgs/External Link.svg";

import { my_builds } from "../../../data/MyBuilds.js";

function MyBuilds() {
  const styles = useStyles();

  return (
    <div className={styles.main} id="Work">
      <TitlePart num={"03."}>Some Things I’ve Built</TitlePart>
      <div className="works">
        {my_builds.map((work, index) => {
          return (
            <WorkCard
              key={index}
              work={work}
              orient={index % 2 === 0 ? "ltr" : "rtl"}
            />
          );
        })}
      </div>
    </div>
  );
}

const WorkCard = ({ orient = "ltr", work }) => {
  const styles = useStyles();
  const gotowebsite = () => {
    window.open(work.live_url, "_blank");
  };

  return (
    <div className={`${styles.card} ${styles[orient]}`}>
      <div className="left" onClick={gotowebsite}>
        <img src={work.image_url} alt="" />
        <div className="filter" />
        <div className="filter2" />
      </div>
      <div className="right">
        <h2>{work.company}</h2>
        <h1>{work.name}</h1>

        <p dangerouslySetInnerHTML={{ __html: work.description }}></p>

        <div className="techs">
          {work.techs.map((tech, index) => {
            return <span key={index}>{tech}</span>;
          })}
        </div>

        <div className="icons">
          {work.github_url && (
            <a href={work.github_url} target="_blank">
              <img src={github_icon} alt="" className="git" />
            </a>
          )}
          {work.live_url && (
            <a href={work.live_url} target="_blank">
              <img src={extern_icon} alt="" className="ext" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBuilds;
