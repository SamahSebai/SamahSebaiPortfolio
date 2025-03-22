import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    "& .info": {
      minWidth: "fit-content",
    },

    "& .number": {
      color: theme.palette.primary.main,
      fontFamily: "SFMono",
      fontSize: "22px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "20px",
      },
    },
    "& .title": {
      color: theme.palette.text.light,
      fontSize: "32px",
      fontWeight: "500",
      margin: "0px 10px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "30px",
      },

      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
        margin: "0px 5px",
      },
    },
    "& .line": {
      height: "1px",
      width: "300px",
      backgroundColor: "#233554",
      transform: "translateY(-3px)",

      [theme.breakpoints.down("md")]: {
        flexGrow: "1",
        width: "auto",
      },
    },
  },
}));
