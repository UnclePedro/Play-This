export const search = async (term: string) => {
  const accessToken = sessionStorage.getItem('access_token');
  console.log(`Your access token is: ${accessToken}`);

  const response = await fetch(`https://api.spotify.com/v1/search?type=track&limit=10&q=${term}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const jsonResponse = await response.json();

  if (jsonResponse) {
    // console.log(jsonResponse);
    const results = jsonResponse.tracks.items.map(
      (track: { id: string; name: string; artists: any; album: any; uri: string }) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }),
    );
    return results;
  }
};
