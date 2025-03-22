import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  loading: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: theme.palette.background.dark,

    position: "fixed",
    top: "0px",
    left: "0px",
    zIndex: "9999",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    animation: "LoadingFadeOut 0.2s linear 3.3s forwards",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(0.5)",
  },
}));
