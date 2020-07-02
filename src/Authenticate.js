// import base64 from 'react-native-base64'

// // // source : https://www.youtube.com/watch?v=4HaNVYb_Ujo&t=272s

// // export default function () {
// //   let token = window.location.hash.substr(1);
// //   if (token) {
// //       const o = Object.fromEntries(new URLSearchParams(token));
// //       return o.access_token;
// //   } else {
// //       // If there is no token, redirect to Spotify authorization
// //       redirectToSpotifyAuthentication();
// //   }
// // }

// // function redirectToSpotifyAuthentication() {
// //   const authEndpoint = 'https://accounts.spotify.com/authorize';
// //   const clientId = '1245e44bb45b4653aa2af0acd26e31e5';
// //   const redirectUri = `${window.location.protocol}//${window.location.host}/`;
// //   let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
// //   window.location = `${authEndpoint}?${query}`;
// // }



// // const apiPrefix = 'https://accounts.spotify.com/api';
// // const client_id = '1245e44bb45b4653aa2af0acd26e31e5';
// // const client_secret = '2dbb9d5e8295495794d95cd5bb62c8f9';

// // const base64credentials = base64.encode(client_id + ':' + client_secret)
 
// // export default async () => {
// //   console.log('token begin');
// //   const response = await axios(`${apiPrefix}/token`, {
// //     method: 'POST',
// //     headers: {
// //       Authorization: `Basic ${base64credentials}`,
// //       'Content-Type': 'application/x-www-form-urlencoded',
// //   },
// //   body: 'grant_type=client_credentials',
// // });
// // const json = await resizeBy.json();
// // const newToken = json.access_token;
// // console.log('token is', newToken);
// // return newToken;
// // }



































// // var request = require('request'); // "Request" library

// // var client_id = 'CLIENT_ID'; // Your client id
// // var client_secret = 'CLIENT_SECRET'; // Your secret

// // // your application requests authorization
// // var authOptions = {
// //   url: 'https://accounts.spotify.com/api/token',
// //   headers: {
// //     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
// //   },
// //   form: {
// //     grant_type: 'client_credentials'
// //   },
// //   json: true
// // };

// // request.post(authOptions, function(error, response, body) {
// //   if (!error && response.statusCode === 200) {

// //     // use the access token to access the Spotify Web API
// //     var token = body.access_token;
// //     var options = {
// //       url: 'https://api.spotify.com/v1/',
// //       headers: {
// //         'Authorization': 'Bearer ' + token
// //       },
// //       json: true
// //     };
// //     request.get(options, function(error, response, body) {
// //       console.log(body);
// //     });
// //   }
// // });

