// source : https://www.youtube.com/watch?v=uflt4GHxT_g

const apiPrefix = 'https://api.spotify.com/v1';

export default async({
  offset,
  limit,
  q,
  spotify_token,
}) => {
  const uri = `${apiPrefix}/search?type=album,artist,track,playlist&limit=${limit}&offset={offset}&q=${encodeURIComponent(q)}*`;
  console.log('search begin, uri=', uri, 'token =', spotify_token);

  const res = await fetch(uri, {
    method: 'GET', 
    headers: {
      Authorization: `Bearer ${spotify_token}`,
    }
  });

 const json = await res.json();
  if (!res.ok) {
    return [];
  }
  const {
    tracks: {
      items, 
      }
    }
  }
    }