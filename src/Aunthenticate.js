
// source : https://www.youtube.com/watch?v=4HaNVYb_Ujo&t=272s

export default function () {
  let token = window.location.hash.substr(1);
  if (token) {
      const o = Object.fromEntries(new URLSearchParams(token));
      return o.access_token;
  } else {
      // If there is no token, redirect to Spotify authorization
      redirectToSpotifyAuthentication();
  }
}

function redirectToSpotifyAuthentication() {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const clientId = '1245e44bb45b4653aa2af0acd26e31e5';
  const redirectUri = `${window.location.protocol}//${window.location.host}/`;
  let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  window.location = `${authEndpoint}?${query}`;
}