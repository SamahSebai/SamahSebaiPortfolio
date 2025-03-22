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
    "& img": {
      display: "block",
      width: "24px",
      margin: "0px 0px 25px 0px",
      transition: "all 0.2s",
      cursor: "pointer",
      filter:
        "invert(74%) sepia(11%) saturate(585%) hue-rotate(188deg) brightness(95%) contrast(89%)",

      [theme.breakpoints.down("xl")]: {
        width: "20px",
      },

      "&:hover": {
        transform: "translateY(-4px)",
        filter:
          "invert(95%) sepia(99%) saturate(590%) hue-rotate(83deg) brightness(102%) contrast(101%)",
      },
    },
  },
}));
