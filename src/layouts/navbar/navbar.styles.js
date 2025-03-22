import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "0px 50px",
    height: "100px",
    width: "100%",
    backgroundColor: "#0b182f",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: "0px",
    zIndex: "100",
    transition: "all 0.2s",

    [theme.breakpoints.down("xl")]: {
      height: "70px",
    },

    [theme.breakpoints.down("md")]: {
      padding: "10px 20px",
    },

    "& .logo": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& img": {
        height: "55px",

        [theme.breakpoints.down("xl")]: {
          height: "42px",
        },
      },
    },

    "& .icon_click": {
      height: "50px",
      display: "none",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexDirection: "column",
      cursor: "pointer",
      padding: "13px 0px",
      position: "relative",

      [theme.breakpoints.down("md")]: {
        display: "flex",

        "& span": {
          display: "block",
          height: "2px",
          borderRadius: "500px",
          backgroundColor: theme.palette.primary.main,
          transition: "all 0.2s",
        },

        "& .top": {
          width: "40px",
        },

        "& .mid": {
          width: "32px",
        },

        "& .bot": {
          width: "22px",
        },
      },
    },

    "& .actived": {
      justifyContent: "center",

      "& .top": {
        width: "40px",
        height: "3px",
        transform: "rotate(45deg)",
        position: "absolute",
        zIndex: "9999999",
      },

      "& .mid": {
        display: "none",
      },

      "& .bot": {
        width: "40px !important",
        height: "3px",
        transform: "rotate(-45deg)",
        position: "absolute",
        zIndex: "9999999",
      },
    },

    "& .routes": {
      display: "flex",
      alignItems: "center",

      [theme.breakpoints.down("md")]: {
        height: "100vh",
        width: "70%",
        position: "absolute",
        right: "0px",
        top: "0px",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#102241",
        boxShadow: "-10px 0px 30px -15px #112240",
        transform: "translateX(100%)",
        transition: "all 0.2s",
      },

      "& .icon_click": {
        top: "10px",
        right: "20px",
        position: "absolute",
      },

      "& .sections": {
        margin: "0px 20px 0px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },

        "& span , a": {
          fontFamily: "SFMono",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "17px",
          cursor: "pointer",

          [theme.breakpoints.down("xl")]: {
            fontSize: "13px",
            lineHeight: "17px",
          },

          [theme.breakpoints.down("md")]: {
            fontSize: "20px !important",
            textAlign: "center",
            lineHeight: "1",
          },
        },

        "& a": {
          textDecoration: "none",
          color: theme.palette.text.light,
          margin: "0px 20px",
          cursor: "fixed",

          "&:hover": {
            color: theme.palette.primary.main,
          },

          [theme.breakpoints.down("xl")]: {
            margin: "0px 15px",
          },

          [theme.breakpoints.down("md")]: {
            margin: "5vh 0px",
          },
        },

        "& span": {
          color: theme.palette.primary.main,
        },
      },
    },

    "& .opened-navbar": {
      transform: "translateX(0px) !important",
    },

    "& .button-custom": {
      padding: "13px 18px",
      fontSize: "15px",

      [theme.breakpoints.down("xl")]: {
        padding: "12px 16px",
        fontSize: "13px",
        fontWeight: "300",
      },

      [theme.breakpoints.down("md")]: {
        margin: "5vh auto",
        padding: "15px 30px",
        fontSize: "16px",
      },
    },
  },
  shrink: {
    height: "100px",
    backgroundColor: "rgba(10, 25, 47, 0.85)",
    boxShadow: `0 10px 30px -10px rgba(2,12,27,0.7)`,
    backdropFilter: "blur(10px)",

    [theme.breakpoints.down("xl")]: {
      height: "70px",
    },
  },
}));
