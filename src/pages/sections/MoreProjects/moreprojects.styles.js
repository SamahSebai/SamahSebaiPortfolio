import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0px 0px 100px 0px",
    width: "81%",
    margin: "auto",

    [theme.breakpoints.down("xl")]: {
      padding: "0px 0px 75px 0px",
      width: "91%",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px 0px 20px 0px",
    },

    "& .big-title": {
      textAlign: "center",
      color: theme.palette.text.light,
      fontWeight: "500",
      fontSize: "40px",
      margin: "0px 0px 10px 0px",
      letterSpacing: "0px",

      [theme.breakpoints.down("xl")]: {
        fontSize: "35px",
        margin: "0px 0px 5px 0px",
      },

      [theme.breakpoints.down("md")]: {
        fontSize: "26px",
      },
    },

    "& .big-link": {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontWeight: "300",
      fontSize: "18px",
      margin: "0px 0px",
      cursor: "pointer",
      position: "relative",
      width: "fit-content",
      margin: "auto",
      fontFamily: "SFMono",
      display: "block",
      textDecoration: "none",

      [theme.breakpoints.down("xl")]: {
        fontSize: "16px",
      },

      "&::after": {
        content: "''",
        width: "0%",
        height: "1px",
        backgroundColor: theme.palette.primary.main,
        display: "block",
        position: "absolute",
        left: "0px",
        bottom: "-2px",
        transition: "all 0.2s",
      },

      "&:hover": {
        "&::after": {
          width: "100%",
        },
      },
    },

    "& .works": {
      display: "flex",
      alignItems: "justify",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
      margin: "50px 0px",

      [theme.breakpoints.down("xl")]: {
        margin: "30px 0px",
      },
    },

    "& .btn-more": {
      width: "fit-content",
      margin: "50px auto",

      [theme.breakpoints.down("xl")]: {
        margin: "40px auto",
      },

      "& .button-custom": {
        fontSize: "16px",
        padding: "20px 30px",
      },
    },
  },

  card: {
    width: "31.9%",
    backgroundColor: "#112341",
    margin: "0.7%",
    borderRadius: "6px",
    transition: "all 0.3s",
    boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
    padding: "4% 3%",

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",

    [theme.breakpoints.down("xl")]: {
      padding: "3% 3%",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "20px",
      margin: "0px 0px 20px 0px",
    },

    "& .header-body": {
      width: "100%",

      "& .header": {
        width: "100%",
        margin: "0px 0px 35px 0px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        [theme.breakpoints.down("xl")]: {
          margin: "0px 0px 27px 0px",
        },

        "& .folder-icon": {
          height: "50px",

          [theme.breakpoints.down("xl")]: {
            height: "40px",
          },
        },

        "& .links": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& .git-icon": {
            height: "24px",
            margin: "0px 10px 0px 0px",
            cursor: "pointer",

            [theme.breakpoints.down("xl")]: {
              height: "22px",
            },
          },

          "& .lnk-icon": {
            height: "26px",
            cursor: "pointer",

            [theme.breakpoints.down("xl")]: {
              height: "25px",
            },
          },
        },
      },

      "& .body": {
        width: "100%",
        height: "fit-content",
        margin: "0px 0px 35px 0px",

        "& .title": {
          fontSize: "28px",
          margin: "0px",
          lineHeight: "1.1",
          fontWeight: "500",
          color: theme.palette.text.light,
          transition: "all 0.2s",

          [theme.breakpoints.down("xl")]: {
            fontSize: "23px",
            fontWeight: "500",
          },

          [theme.breakpoints.down("md")]: {
            fontSize: "20px",
            fontWeight: "400",
          },
        },

        "& .desc": {
          color: theme.palette.text.main,
          fontSize: "22px",
          fontWeight: "300",

          [theme.breakpoints.down("xl")]: {
            fontSize: "18px",
            margin: "10px 0px 0px 0px",
          },

          "& span": {
            color: theme.palette.primary.main,
            fontWeight: "400",
          },
        },
      },
    },

    "& .footer": {
      width: "100%",

      display: "flex",
      flexWrap: "wrap",
      width: "100%",

      "& span": {
        color: theme.palette.text.dark,
        fontFamily: "SFMono",
        fontSize: "16px",
        fontWeight: "300",
        display: "block",
        margin: "0px 15px 0px 0px",
        userSelect: "none",

        [theme.breakpoints.down("xl")]: {
          fontSize: "13px",
        },

        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
    },

    "&:hover": {
      transform: "translateY(-7px)",

      "& .body": {
        "& .title": {
          color: `${theme.palette.primary.main} !important`,
        },
      },
    },
  },
}));
