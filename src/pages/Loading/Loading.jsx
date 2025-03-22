import React from "react";
import { useStyles } from "./loading.styles";
import Logo from "../../components/logo/Logo";

function Loading() {
  const styles = useStyles();
  return (
    <div className={styles.loading}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
}

export default Loading;
