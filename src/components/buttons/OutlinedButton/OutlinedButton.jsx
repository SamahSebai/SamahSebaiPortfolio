import React from "react";
import { useStyles } from "./outlinedButton.styles";

function OutlinedButton(props) {
  const { children, onClick = () => {} } = props;
  const styles = useStyles();
  return (
    <button onClick={onClick} className={`${styles.button} button-custom`}>
      {children}
    </button>
  );
}

export default OutlinedButton;
