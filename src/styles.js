import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  body: {
    backgroundImage:
      "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0), rgb(69, 187, 0))",
    opacity: "3.0",
  },
  main: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "auto",
    background: "#282c34",
    minHeight: "100vh",
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  textBox: {
    width: "50%",
    height: "20%",
    margin: "30px 20px",
    textShadow: "2px",
  },
  input: {
    fontFamily: "Permanent Marker",
    fontSize: "1.5rem",
    color: "white",
  },
  notchedOutline: {
    borderColor: "white",
  },
  header: {
    position: "absolute",
    marginTop: "20px",
    top: "10%",
    fontFamily: "Permenent Marker",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    textShadow: "5px, black",
  },
  spotify: {
    position: "absolute",
    bottom: "25px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px",
    height: "500px",
  },
  spinner: {
    position: "absolute",
    left: "60%",
    transform: "translateX(-1000%)",
  },
}));
