import React from "react";

import { useStyles } from "./titlepart.styles";

function TitlePart({ num, children }) {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div className="info">
        <span className="number">{num}</span>
        <span className="title">{children}</span>
      </div>
      <div className="line" />
    </div>
  );
}

export default TitlePart;
