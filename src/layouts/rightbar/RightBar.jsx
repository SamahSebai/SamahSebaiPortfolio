import React from "react";
import { useStyles } from "./rightBar.styles";
import { ContactMe } from "../../functions/contact_me";

function RightBar() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <p onClick={ContactMe}>samah.sebai.engineering.com</p>
      <span className="vertical-line" />
    </div>
  );
}

export default RightBar;
