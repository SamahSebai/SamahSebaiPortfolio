import { makeStyles } from "@mui/styles";

const delay_bar = 0.3;
const waiting = 0.3;

export const useStyles = makeStyles((theme) => ({
  custom_logo: {
    height: "200px",
    width: "200px",
    position: "relative",

    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "105px",
    fontWeight: "500",

    animation: `logo-fade-out ${delay_bar}s linear ${delay_bar * 10 +
      waiting}s forwards`,

    "& p": {
      transform: "translateY(12px)",
      position: "absolute",
      opacity: "0",
      animation: `h-fade-in ${delay_bar}s linear ${delay_bar * 7 +
        waiting}s forwards`,
    },
    "& .bar": {
      height: "100px",
      width: "10px",
      position: "absolute",
    },

    "& .filled-bar": {
      backgroundColor: theme.palette.primary.main,
      display: "block",
      width: "100%",
      height: "0%",
      borderRadius: "500px",
      animationName: "bar-height",
      animationDuration: `${delay_bar}s`,
      animationFillMode: "forwards",
    },

    "& .bar-1": {
      transform: "translate(-41px, -71px) rotate(60deg)",
      "& .filled-bar": {
        animationDelay: `${delay_bar * 1 + waiting}s`,
      },
    },
    "& .bar-2": {
      transform: "translate(-82px, 0px) rotate(0deg)",
      "& .filled-bar": {
        animationDelay: `${delay_bar * 2 + waiting}s`,
      },
    },
    "& .bar-3": {
      transform: "translate(-41px, 71px) rotate(-60deg)",
      "& .filled-bar": {
        animationDelay: `${delay_bar * 3 + waiting}s`,
      },
    },
    "& .bar-4": {
      transform: "translate(41px, 71px) rotate(-120deg);",
      "& .filled-bar": {
        animationDelay: `${delay_bar * 4 + waiting}s`,
      },
    },
    "& .bar-5": {
      transform: "translate(82px, 0px) rotate(-180deg)",
      "& .filled-bar": {
        animationDelay: `${delay_bar * 5 + waiting}s`,
      },
    },
    "& .bar-6": {
      transform: "translate(41px, -71px) rotate(-240deg);",
      "& .filled-bar": {
        animationDelay: `${delay_bar * 6 + waiting}s`,
      },
    },
  },
}));
