import { Component } from "react";
import Main from "./Main";
import axios from "axios";
import { Route, NavLink, HashRouter } from "react-router-dom";

const apiUrl = "https://api.spotify.com/v1/search?query=underground_rappers&type=track&market=US&offset=5&limit=10";
const OauthUrl = "https://accounts.spotify.com/api/token";
const client_id = '1245e44bb45b4653aa2af0acd26e31e5';
const client_secret = '2dbb9d5e8295495794d95cd5bb62c8f9';
const base64credentials = btoa(client_id + ':' + client_secret)

class Tracks extends Component {
  constructor() {
    super();
    this.state = { tracks: [], loading: false };
  }

  async componentDidMount() {


    this.setState({ loading: true })
    const OauthResponse = await axios.post(OauthUrl, 'grant_type=client_credentials', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64credentials}`,
      }
    })

    const token = OauthResponse.data.access_token
    const response = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` } })

    this.setState({
      loading: false,
      tracks: response.data.tracks.items
    })
  }

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
