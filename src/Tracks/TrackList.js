import React, { Component } from "react";
import Main from "../Main";
import App from ".";
import axios from "axios";
import { Route, NavLink, HashRouter } from "react-router-dom";


class TrackList extends Component {

  render() {

    const { tracks, loading } = this.props
    const select = document.querySelector('button').value

    if (loading) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <main>


        <h1 class="button">Track List</h1>

        <ul>
          {tracks.map(track => (

            <li key={track.id}>
              <div class="cell cell-5">
                <img src={track.album.images[2].url} />
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
