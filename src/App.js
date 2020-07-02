import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import { findAllByDisplayValue } from '@testing-library/react';




// const apiKey = process.env.REACT_APP_NPS_API_KEY;
const apiUrl = "https://api.spotify.com/v1/search?query=underground_rappers&type=track&market=US&offset=5&limit=10";
const OauthUrl = "https://accounts.spotify.com/api/token";
const client_id = '1245e44bb45b4653aa2af0acd26e31e5';
const client_secret = '2dbb9d5e8295495794d95cd5bb62c8f9';
const base64credentials = btoa(client_id + ':' + client_secret)

// 
class App extends Component {
  constructor() {
    super();
    this.state = { tracks: [], loading: false };
  }


  async componentDidMount() {
    // Since we are about to make API calls we set loading to true,
    //this can be used to show an indicator to the user
    this.setState({ loading: true })
    // Request the access token from spotify by passing the credentials client ID and client secret
    const OauthResponse = await axios.post(OauthUrl, 'grant_type=client_credentials',
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${base64credentials}`,
        }
      })
    // Extract the accesss token from the response body
    const token = OauthResponse.data.access_token
    // Make a request to ge the data from Spotify using the access token just obtained.
    const response = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` } })
    // Since the API call is finished, set loading to false, and extract the tracks and set them in state.
    this.setState({
      loading: false,
      tracks: response.data.tracks.items
    })
  }

  render() {
    const { tracks, loading } = this.state

    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <ul>
        {tracks.map(track => (
          <li>
            <img src={track.album.images[2].url} />
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

//set login credentials
// get access token
// query search api
// get list of tracks
// render each track to page


export default App;
