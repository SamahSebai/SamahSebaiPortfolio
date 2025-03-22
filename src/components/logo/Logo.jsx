import React from "react";
import { useStyles } from "./logo.styles";

function Logo() {
  const styles = useStyles();
  return (
    <div style={{ position: "absolute" }}>
      <div className={styles.custom_logo}>
        <p>S</p>
        <div className="bar bar-1">
          <span className="filled-bar" />
        </div>
        <div className="bar bar-2">
          <span className="filled-bar" />
        </div>
        <div className="bar bar-3">
          <span className="filled-bar" />
        </div>
        <div className="bar bar-4">
          <span className="filled-bar" />
        </div>
        <div className="bar bar-5">
          <span className="filled-bar" />
        </div>
        <div className="bar bar-6">
          <span className="filled-bar" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
