import React, { Component } from "react";
import Main from "./Main";
import App from "./App";
import axios from "axios";
import { Route, NavLink, HashRouter } from "react-router-dom";


class Tracks extends Component {

  render() {

    const { tracks, loading } = this.state

    if (loading) {
      return (
        <div>Loading...</div>
      )
    }
    return (

      <ul>
        {tracks.map(track => (
          <li>
            <img src={tracks.album.images[2].url} />
            <div>{track.name}</div>
            <div>
              {
                track.artists.map(track => track.name).join(",")
              }
            </div>
            <div>
              <audio controls >
                <source src={track.preview_url} type="audio/mp3" />
              </audio>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

function TrackList(props) {

}

function DisplayTrack(props) {
  return <div>{props.album.name} {props.album.images[0]}</div>;
}

export default Tracks;
