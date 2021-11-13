// User text -> google api -> sentiment numbers

// Sentiment -> choose song -> get spotify HTML
import React, { useState, useEffect } from "react";
import useStyles from "./styles";

const SpotifyComponent = ({ spotifyLink, imageLink }) => {
  const classes = useStyles();

  //const isLoaded = true;

  /*return this.isLoaded ? (
    <div>
      <img src={imageLink} alt="" />
      <iframe
        title="spotify"
        src={spotifyLink}
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  ) : (
    <div>
      <h4>Loading Playlist...</h4>
    </div>
  );*/

  return (
    <div>
      <img src={imageLink} alt="" className={classes.playlistImage} />
      <iframe
        className={classes.spotify}
        title="spotify"
        src={spotifyLink}
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};
export default SpotifyComponent;

// constructor(props)
// {
//     super(props);
//     this.state = {
//         playlist: [],
//         isLoaded: false,
//     }
//   };

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
