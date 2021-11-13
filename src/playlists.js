// Choose a playlist from a mood score
export function choosePlaylist(rawScore) {
  let score = Math.floor(rawScore * 2.5 + 3.5);

  let playlist = {
    spotifyLink: "",
    imageLink: "",
    message: "",
    color: "",
  };

  switch (score) {
    case 1:
      // document.getElementById(".body").style.backgroundColor = "#000ff";

      playlist.message = "Do better bozo, but here's a playlist for you";
      // Negative
      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/6tEHdC4ee1bkhjtoPKNhbm";
      playlist.imageLink =
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg";
      break;
    case 2:
      playlist.message = "Rough day?, here is a playlist for you!";
      // Neutrally Negative
      playlist.spotifyLink =
        "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWVV27DiNWxkR";
      playlist.imageLink =
        "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/1:1/w_1666,h_1666,c_limit/MemeLoveTriangle_297886754.jpg";

      break;
    case 3:
      playlist.message = "You got this, here is a playlist to boost your mood";
      //mixed
      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0";
      playlist.imageLink =
        "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/cranky-disagreeable-words-peevish-5959-d6d936e302f7b35279982bbebc9d8869@1x.jpg";
      break;
    case 4:
      playlist.message = "Keep smiling and listen to this playlist";
      // casually happy
      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX0UrRvztWcAU";
      playlist.imageLink =
        "https://i.ytimg.com/vi/JDb3ZZD4bA0/maxresdefault.jpg";
      break;
    case 5:
      playlist.message = "Stay turnt up with this playlist selected for you";
      // really happy
      playlist.spotifyLink =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC";
      playlist.imageLink =
        "https://i.ytimg.com/vi/JDb3ZZD4bA0/maxresdefault.jpg";
      break;
    default:
      break;
  }

  return playlist;
}
