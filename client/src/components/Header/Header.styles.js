import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    flex: "1 1 35%",
    backgroundColor: "rgba(241, 242, 246, 0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",
    marginTop: "1rem",
  },
  heading: {
    color: "#333",
    fontSize: "4rem",
    fontWeight: 300,
    marginBottom: "2rem",
    "& span": {
      color: "#3f51b5",
    },
  },
  control: {
    width: "80%",
    "& *": {
      fontSize: "2.5rem",
    },
  },
}));

export default useStyles;
