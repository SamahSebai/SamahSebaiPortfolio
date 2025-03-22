import React, { useState } from "react";
import { useStyles } from "./workplaces.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";
import { WhereWorked } from "../../../data/WhereWorked";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";

function WorkPlaces() {
  const [current, setcurrent] = useState(WhereWorked[0]);
  const [opened, setOpened] = useState(false);
  const handle_switch = () => {
    setOpened(!opened);
  };

  const styles = useStyles();
  return (
    <div className={styles.main} id="Experience">
      <TitlePart num={"02."}>Where I’ve Worked</TitlePart>
      <div className="container">
        <div className={`left ${opened && "opened-left"}`}>
          {WhereWorked.map((item, key) => {
            let is_active = current.title === item.title;
            const Choose = () => {
              setcurrent(item);
            };
            return (
              <span
                key={key}
                className={is_active ? "active" : ""}
                onClick={Choose}
              >
                {is_active && <figure />}
                {item.title}
              </span>
            );
          })}
          <div className="opener" onClick={handle_switch}>
            {opened ? (
              <CloseIcon className="close" />
            ) : (
              <ArrowRightIcon className="open" />
            )}
          </div>
        </div>

        {current && (
          <div className="right" key={current.content.time}>
            <h1>
              {current.content.position}{" "}
              <a href={current.content.companyLink} target="_blanl">
                {current.content.company}
              </a>
            </h1>
            <p>{current.content.time}</p>

            <ul className="descrip">
              {current.content.done.map((item, key) => {
                return (
                  <li key={key}>
                    <span className="point">▹</span>{" "}
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkPlaces;
