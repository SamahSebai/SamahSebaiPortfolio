import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "100px 0px",
    width: "80%",
    margin: "auto",

    [theme.breakpoints.down("xl")]: {
      padding: "75px 0px",
      width: "90%",
    },

    [theme.breakpoints.down("md")]: {
      padding: "40px 0px",
      width: "100%",
    },

    "& .works": {
      width: "100%",
      padding: "0px 0px 0px 0px",
    },
  },

  card: {
    width: "100%",
    height: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    margin: "50px 0px 100px 0px",

    [theme.breakpoints.down("xl")]: {
      height: "400px",
    },

    [theme.breakpoints.down("md")]: {
      height: "fit-content",
      flexDirection: "column",
      margin: "50px 0px 50px 0px",
    },

    "& .left": {
      width: "60%",
      height: "100%",
      cursor: "pointer",
      position: "relative",
      borderRadius: "6px",
      overflow: "hidden",

      [theme.breakpoints.down("md")]: {
        width: "100%",
        overflow: "visible",
      },

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },

      "& .filter": {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "#388c78",
        transition: "all 0.2s",
        opacity: "0.2",
        top: "0px",

        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },

    "& .right": {
      width: "50%",
      height: "fit-content",
      position: "absolute",
      right: "0px",

      [theme.breakpoints.down("md")]: {
        width: "100%",
        position: "relative",
        backgroundColor: "#102241",
        padding: "10px 20px 30px 20px",
      },

      "& h1": {
        textAlign: "right",
        color: theme.palette.text.light,
        fontWeight: "500",
        fontSize: "36px",
        margin: "0px 0px",
        letterSpacing: "0px",
        position: "absolute",
        right: "0px",
        top: "-35px",
        cursor: "pointer",
        transition: "all 0.2s",

        [theme.breakpoints.down("xl")]: {
          fontSize: "28px",
          top: "-20px",
        },

        [theme.breakpoints.down("md")]: {
          position: "relative",
          top: "auto",
          textAlign: "left",
        },
      },

      "& h2": {
        textAlign: "right",
        color: theme.palette.primary.main,
        fontWeight: "300",
        fontSize: "22px",
        margin: "10px 0px",
        letterSpacing: "2px",
        position: "absolute",
        right: "0px",
        top: "-75px",

        [theme.breakpoints.down("xl")]: {
          fontSize: "18px",
          top: "-55px",
        },

        [theme.breakpoints.down("md")]: {
          position: "relative",
          top: "auto",
          textAlign: "left",
        },
      },

      "& p": {
        textAlign: "right",
        margin: "20px 0px",
        padding: "20px",
        color: theme.palette.text.light,
        fontSize: "22px",
        width: "100%",
        fontWeight: "300",
        backgroundColor: "#102241",
        borderRadius: "6px",
        lineHeight: "1.5",

        [theme.breakpoints.down("xl")]: {
          fontSize: "20px",
        },

        [theme.breakpoints.down("md")]: {
          textAlign: "justify",
          margin: "0px 0px",
          padding: "10px 0px",
        },

        "& span": {
          color: theme.palette.primary.main,
          fontWeight: "400",
          position: "relative",
          width: "fit-content",

          [theme.breakpoints.down("xl")]: {
            fontWeight: "300",
          },

          "&::after": {
            content: "''",
            width: "0%",
            height: "1px",
            backgroundColor: theme.palette.primary.main,
            display: "block",
            position: "absolute",
            left: "0px",
            bottom: "0px",
            transition: "all 0.2s",
          },

          "&:hover": {
            "&::after": {
              width: "100%",
            },
          },
        },
      },

      "& .techs": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: "0px",
        bottom: "-25px",

        [theme.breakpoints.down("xl")]: {
          bottom: "-10px",
        },

        [theme.breakpoints.down("md")]: {
          position: "relative",
          top: "auto",
          justifyContent: "center",
          flexWrap: "wrap",
        },

        "& span": {
          color: theme.palette.text.light,
          fontSize: "15px",
          fontWeight: "300",
          display: "block",
          margin: "0px 0px 0px 20px",
          userSelect: "none",
          letterSpacing: "0px",
          fontFamily: "SFMono",

          [theme.breakpoints.down("xl")]: {
            fontSize: "14px",
          },

          [theme.breakpoints.down("md")]: {
            display: "block",
            margin: "5px 10px",
          },

          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
      },

      "& .icons": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        right: "0px",
        bottom: "-80px",

        [theme.breakpoints.down("xl")]: {
          bottom: "-60px",
        },

        [theme.breakpoints.down("md")]: {
          // position: "relative",
          top: "0px",
          bottom: "auto",
          right: "20px",
          margin: "20px 0px 0px 0px",
        },

        "& img": {
          display: "block",
          margin: "0px 0px 0px 20px",
          cursor: "pointer",

          [theme.breakpoints.down("xl")]: {
            margin: "0px 0px 0px 15px",
          },
        },

        "& .git": {
          height: "26px",

          [theme.breakpoints.down("xl")]: {
            height: "24px",
          },
        },

        "& .ext": {
          height: "28px",

          [theme.breakpoints.down("xl")]: {
            height: "26px",
          },
        },
      },
    },

    "&:hover": {
      "& .right": {
        "& h1": {
          color: theme.palette.primary.main,
        },
      },
    },
  },

  rtl: {
    flexDirection: "row-reverse",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },

    "& .right": {
      left: "0px",

      [theme.breakpoints.down("md")]: {
        right: "0px",
        left: "auto",
      },

      "& h1": {
        textAlign: "left",
        left: "0px",
      },

      "& h2": {
        textAlign: "left",
        left: "0px",
      },

      "& p": {
        textAlign: "left",
      },

      "& .techs": {
        justifyContent: "flex-start",
        left: "0px",

        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
        },

        "& span": {
          margin: "0px 20px 0px 0px",

          [theme.breakpoints.down("md")]: {
            display: "block",
            margin: "5px 10px",
          },
        },
      },

      "& .icons": {
        justifyContent: "flex-start",
        left: "0px",

        [theme.breakpoints.down("md")]: {
          left: "auto",
          right: "20px",
        },

        "& img": {
          margin: "0px 20px 0px 0px",

          [theme.breakpoints.down("md")]: {
            margin: "0px 0px 0px 20px",
          },
        },
      },
    },
  },
}));
