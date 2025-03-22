import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    position: "fixed",
    bottom: "0px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",

    "& .vertical-line": {
      display: "block",
      width: "1px",
      height: "150px",
      backgroundColor: theme.palette.text.dark,
      margin: "10px 0px 0px 0px",

      [theme.breakpoints.down("xl")]: {
        height: "90px",
      },
    },
    "& p": {
      color: theme.palette.text.dark,
      padding: "10px",
      margin: "20px auto",

      fontFamily: "SFMono",
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "1px",

      writingMode: "vertical-rl",
      transition: "all 0.2s",
      cursor: "pointer",

      [theme.breakpoints.down("xl")]: {
        fontSize: "14px",
      },

      "&:hover": {
        color: theme.palette.primary.main,
        transform: "translateY(-4px)",
      },
    },
  },
}));
