import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0px 0px 0px 0px",
    height: "100vh",
    width: "100%",
    margin: "auto",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      height: "fit-content",
      padding: "30px 0px 30px 0px",
    },

    "& .number": {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontWeight: "300",
      fontSize: "20px",
      margin: "0px 0px",
      width: "fit-content",
      fontFamily: "SFMono",
      display: "block",

      [theme.breakpoints.down("xl")]: {
        fontSize: "18px",
      },
    },

    "& .big-title": {
      textAlign: "center",
      color: theme.palette.text.light,
      fontWeight: "500",
      fontSize: "80px",
      margin: "20px 0px 0px 0px",
      letterSpacing: "0px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "60px",
      },

      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
      },
    },

    "& .desc": {
      textAlign: "center",
      color: theme.palette.text.dark,
      fontWeight: "300",
      fontSize: "28px",
      margin: "20px 0px 0px 0px",
      width: "50%",

      [theme.breakpoints.down("xl")]: {
        fontSize: "22px",
        fontWeight: "300",
        margin: "10px 0px 0px 0px",
        width: "60%",
      },

      [theme.breakpoints.down("md")]: {
        width: "100%",
        fontSize: "20px",
        // textAlign: "justify",
      },
    },

    "& .btn-more": {
      width: "fit-content",
      margin: "40px 0px 0px 0px",

      [theme.breakpoints.down("xl")]: {
        margin: "30px 0px 0px 0px",
      },

      "& .button-custom": {
        fontSize: "20px",
        padding: "26px 52px",

        [theme.breakpoints.down("xl")]: {
          fontSize: "16px",
          padding: "20px 30px",
        },
      },
    },
  },
}));
