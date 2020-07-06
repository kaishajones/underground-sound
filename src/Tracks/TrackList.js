import React, { Component } from "react";
import Main from "../Main";
import App from ".";
import axios from "axios";
import { Route, NavLink, HashRouter } from "react-router-dom";


class TrackList extends Component {

  render() {

    const { tracks, loading } = this.props

    if (loading) {
      return (
        <h1 id="logo">Loading...</h1>
      )
    }
    return (
      <main>


        <h1 class="titles">Track List</h1>

        <ul class="track-list-container">
          {tracks.map(track => (

            <li class="track-container" key={track.id}>
              <div class="cell cell-5">
                <img class="album-art" src={track.album.images[1].url} />
                <div><b>{track.name}</b></div>
                <div>
                  {
                    track.artists.map(artist => artist.name).join(",")
                  }
                </div>
                <div class="audioPlayer">
                  <audio controls >
                    <source src={track.preview_url} type="audio/mp3" />
                  </audio>
                </div>
              </div>
            </li>

          ))}
        </ul>

      </main>
    )
  }
}

function DisplayTrack(props) {
  return <div>{props.album.name} {props.album.images[0]}</div>;
}

export default TrackList;
