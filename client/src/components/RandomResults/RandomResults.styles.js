import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    // flex: "1 1 50%",
    minHeight: "50%",
    backgroundColor: "rgba(47, 53, 66, 0.7)",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#dfe4ea",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "2.5rem",
    fontWeight: 400,
    color: "#dfe4ea",
    wordSpacing: "2.25px",
    letterSpacing: "1px",
    width: "65%",
  },
  colored: {
    color: "#eb2f06",
  },
  bold: {
    fontWeight: 700,
  },
}));

export default useStyles;
