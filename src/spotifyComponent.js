// Sentiment -> choose song -> get spotify HTML
import useStyles from "./styles";

const SpotifyComponent = ({ spotifyLink }) => {
  const classes = useStyles();

  return (
    <div>
      {/* <img src="" alt="" className={classes.playlistImage} /> */}
      <iframe
        className={classes.spotify}
        title="spotify"
        src={spotifyLink}
        frameBorder="0"
        allowtransparency="true"
        opacity=".5"
        //allow="encrypted-media"
      ></iframe>
    </div>
  );
};
export default SpotifyComponent;

/*
let apiFunc = function (api) {
    componentDidMount() { // runs after first render
        fetch(`'${api}'`) //add spotify  playlist link
            .then(res => res.json) //converting info to json format
            .then(json => {
                this.setState ({
                    isLoaded: true,
                    playlist: json,
                })
            })

        render() {

            let {isLoaded, playlist} = this.state; 

            if(!loaded){
                return <div>Loading Playlist...<div/>
            } else {
                    return(
                       <div className ="App">

                           <ul>
                               {items.map(item => ( //maps allows you to loop and add what you need to get from api in li tag
                                   <li key = {item.id}>
                                            
                                    <li>  
                               ))} 
                            <ul>
                           <div>

                    )
            }*/
//} useEffect } from 'react'
/*
    apiFunc(happy) //add api
    later fetch('/') //add spotify happy playlist link
            .then(reson) //converting info to json format
            .then(json => {
    apiFunc(moderately happy) //add api later                    playlist: json,
                })
            })

    apiFunc(neutral)        render() {
}   }
}*/
