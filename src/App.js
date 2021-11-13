import { useState, useEffect } from "react";
import { Typography, TextField, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import SpotifyComponent from "./spotifyComponent";
import { choosePlaylist } from "./playlists";
import getSentiment from "./sentiment";

function App() {
  const classes = useStyles();
  const [story, setStory] = useState("");
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [playlist, setPlaylist] = useState({
    spotifyLink: "",
    playlistimageLink: "",
    message: "Talk about your day.",
    color: "green",
  });

  useEffect(() => {
    async function fetchSentiment() {
      setSpinnerOn(true);
      let sentiment = await getSentiment(story);
      let pl = await choosePlaylist(sentiment);
      setPlaylist(pl);
    }
    if (story === "") {
      setPlaylist({
        spotifyLink: "",
        playlistimageLink: "",
        message: "Talk about your day.",
        color: "green",
      });
      setSpinnerOn(false);
    } else {
      fetchSentiment();
    }
  }, [story]);

  return (
    <div className={classes.body}>
      <div
        className={classes.main}
        style={{
          backgroundImage: `url("${playlist.imageLink}")`,
        }}
      >
        <Typography
          variant="h4"
          className="header"
          style={{
            position: "absolute",
            top: "17%",
            fontFamily: "Zen Kurenaido",
            fontWeight: "900",
          }}
        >
          {playlist.message === "" ? "How was your day?" : playlist.message}
        </Typography>
        <TextField
          onChange={(e) => setStory(e.target.value)}
          className={classes.textBox}
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder=" Please tell"
          style={{ position: "absolute", top: "190px", width: "40%" }}
          InputProps={{
            className: classes.input,
            classes: {
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        {spinnerOn ? (
          <CircularProgress className={classes.spinner} color="white" />
        ) : (
          <></>
        )}
        <SpotifyComponent
          spotifyLink={playlist.spotifyLink}
          style={{ height: "20%" }}
        />
      </div>
    </div>
  );
}

export default App;
