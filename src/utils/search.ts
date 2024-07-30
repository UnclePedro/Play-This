import { Track } from '../models/Track';

export const search = async (term: string) => {
  const accessToken = sessionStorage.getItem('access_token');
  console.log(`Your access token is: ${accessToken}`);

  const response = await fetch(`https://api.spotify.com/v1/search?type=track&limit=10&q=${term}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const jsonResponse = await response.json();

  if (jsonResponse) {
    const results = jsonResponse.tracks.items.map(
      (track: { id: string; name: string; artist: Track[]; album: Track; uri: string }) => ({
        id: track.id,
        name: track.name,
        artist: track.artist[0].name,
        album: track.album.name,
        uri: track.uri,
      }),
    );
    return results;
  }
};
