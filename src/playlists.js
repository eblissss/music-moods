// Choose a playlist from a mood score
export function choosePlaylist(rawScore) {
  let score = Math.round(rawScore);

  let spotifyLink = "";
  let imageLink = "";

  switch (score) {
    case 1:
      // Really down bad
      spotifyLink =
        "https://open.spotify.com/embed/playlist/2tN9jIiiCBLCSAVuaVvgHX?si=dc4be4f9f2674987";
      imageLink =
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg";
      break;
    case 2:
      // Neutrally Down bad
      spotifyLink =
        "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWVV27DiNWxkR";
      imageLink =
        "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/1:1/w_1666,h_1666,c_limit/MemeLoveTriangle_297886754.jpg";

      break;
    case 3:
      //mixed down bad
      spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
      imageLink =
        "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/cranky-disagreeable-words-peevish-5959-d6d936e302f7b35279982bbebc9d8869@1x.jpg";
      break;
    case 4:
      // casually happy
      spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
      imageLink = "https://i.ytimg.com/vi/JDb3ZZD4bA0/maxresdefault.jpg";
      break;
    case 5:
      // really happy
      spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
      imageLink = "https://i.ytimg.com/vi/JDb3ZZD4bA0/maxresdefault.jpg";
      break;
    default:
      break;
  }

  return [spotifyLink, imageLink];
}
