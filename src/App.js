import { useState, useEffect } from "react";
import { Typography, TextField } from "@material-ui/core";
import useStyles from "./styles";
import SpotifyComponent from "./musicRequest";
import { choosePlaylist } from "./playlists";

function App() {
  const classes = useStyles();
  const [story, setStory] = useState("");
  const [score, setScore] = useState(1);
  const [spotifyLink, setSpotifyLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    let [sL, iL] = choosePlaylist(score);
    setSpotifyLink(sL);
    setImageLink(iL);
  }, [score]);

  return (
    <div className={classes.main}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Typography variant="h4" className="header">
        Talk About Your Day.
      </Typography>
      <TextField
        //onChange={(e) => setStory(e.target.value)}
        onChange={(e) => setScore(parseInt(e.target.value))}
        className={classes.textBox}
        id="outlined-basic"
        label=""
        variant="outlined"
        placeholder="Do tell."
        InputProps={{
          className: classes.input,
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <SpotifyComponent spotifyLink={spotifyLink} imageLink={imageLink} />
    </div>
  );
}

export default App;
