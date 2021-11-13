import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  main: {
    background: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  textBox: {
    borderRadius: 4,
    width: "30%",
    height: "20%",
    margin: "30px 5px",
  },
  input: {
    color: "white",
  },
  notchedOutline: {
    borderColor: "white",
  },
  header: {
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  playlistImage: {
    height: "500px",
  },
  spotify: {
    width: "300",
    height: "380",
  },
}));
