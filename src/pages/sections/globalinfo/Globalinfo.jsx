import React from "react";
import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton";
import { useStyles } from "./globalinfo.styles";
import my_resume from "../../../assets/pdf/Samah-Sebai.pdf";
import Typewriter from "typewriter-effect";
import TypeWriterComp from "../../../components/TypeWriter/TypeWriter";

function Globalinfo() {
  const styles = useStyles();

  const handle_download_cv = () => {
    window.open(my_resume, "_blank");
  };

  const typeswrites = [
    "Full Stack Web Developer. ",
    "Software Engineer.",
    "Freelancer.",
    "ReactJs Developer.",
    "Angular Developer.",
    "NodeJs Developer.",
    "Former && Teacher",
  ];

  return (
    <section className={styles.main}>
      <div>
        <p className="mynameis">Hi, my name is</p>
        <h1 className="name">SEBAI SAMAH.</h1>
        <h1 className="role">
          <TypeWriterComp strings={typeswrites} />
        </h1>
        <p className="description">
          I’m a software engineer specializing in building exceptional digital
          experiences using the <span className="important">MERN</span> stack.
          Currently, I’m a <span className="important">freelancer</span> seeking
          a <span className="important"> full-time position</span>.
        </p>
        <OutlinedButton onClick={handle_download_cv}>My Resume</OutlinedButton>
      </div>
    </section>
  );
}

export default Globalinfo;
