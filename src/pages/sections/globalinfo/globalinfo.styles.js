import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "100px 0px 100px 0px",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      padding: "100px 0px 30px 0px",
      height: "fit-content",
    },

    "& .mynameis": {
      color: theme.palette.primary.main,
      fontFamily: "SFMono",
      fontWeight: "400",
      lineHeight: "1.1",
      fontSize: "24px",
      marginBottom: "30px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "16px",
        marginBottom: "30px",
      },

      [theme.breakpoints.down("md")]: {},
    },
    "& h1": {
      fontSize: "100px",
      fontWeight: "500",
      lineHeight: "1.1",
      margin: "0px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "80px",
      },

      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
      },
    },
    "& .name": {
      color: theme.palette.text.light,
    },
    "& .role": {
      color: theme.palette.text.dark,
      height: "100px",

      [theme.breakpoints.down("xl")]: {
        height: "80px",
      },

      [theme.breakpoints.down("md")]: {
        height: "40px",
      },
    },
    "& .description": {
      maxWidth: "800px",
      fontWeight: "300",
      fontSize: "24px",
      lineHeight: "1.4",
      color: theme.palette.text.dark,
      textShadow: "0px 0px 1px #8892b0",

      [theme.breakpoints.down("xl")]: {
        fontSize: "20px",
        maxWidth: "540px",
      },

      [theme.breakpoints.down("md")]: {
        textAlign: "justify",
      },

      "& .important": {
        color: theme.palette.primary.main,
      },
    },
    "& .button-custom": {
      padding: "24px 40px",
      fontSize: "18px",
      marginTop: "30px",

      [theme.breakpoints.down("xl")]: {
        padding: "20px 28px",
        fontSize: "14px",
      },

      [theme.breakpoints.down("md")]: {
        margin: "10px auto",
        display: "block",
        padding: "18px 26px",
        fontSize: "14px",
      },
    },
  },
}));
