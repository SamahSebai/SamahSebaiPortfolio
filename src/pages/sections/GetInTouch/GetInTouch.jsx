import React from "react";
import { useStyles } from "./getintouch.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";

import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton";
import { ContactMe } from "../../../functions/contact_me";

function GetInTouch() {
  const styles = useStyles();

  return (
    <div className={styles.main} id="Contact">
      <span href="https://www.google.com" className="number">
        04. What’s Next?
      </span>
      <h1 className="big-title">Get In Touch</h1>

      <p className="desc">
        Actively seeking new job opportunities and ready to bring my skills to a
        challenging role. Open to connections, collaborations, or conversations.
        Feel free to reach out!
      </p>

      <div className="btn-more">
        <OutlinedButton onClick={ContactMe}>Say Hello</OutlinedButton>
      </div>
    </div>
  );
}

export default GetInTouch;
