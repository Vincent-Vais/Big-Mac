import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    flex: "1 1 15%",
    backgroundColor: "rgba(47, 53, 66, 0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  colored: {
    color: "#eb2f06",
    fontWeight: 400,
  },
  text: {
    fontSize: "3.25rem",
    fontWeight: 300,
    color: "#dfe4ea",
    wordSpacing: "2.25px",
    letterSpacing: "1px",
  },
  progress: {
    width: "50%",
  },
}));

export default useStyles;
