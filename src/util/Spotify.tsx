const Spotify = () => {
  let accessToken: any;
  const clientId = '17b12d160569489584b96ea99cc989cb';
  const redirectUrl = 'http://localhost:3000';

  const getAccessToken = () => {
    if (accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expiryTime) {
      // set access token and expiry time variables
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);

      // set the function which resets the access token when it expires
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);

      // clear url after access token expires
      window.history.pushState('Access token', '/');
      return accessToken;
    }
    // Third check for access token if first and second are both false
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
    window.location.href = redirect;
  };

  const search = (term: string) => {
    accessToken = getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: 'GET',
      headers: { Authorization: `bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse) {
          //   console.log('Response error');
        }
        return jsonResponse.tracks.items.map(
          (track: { id: string; name: string; artists: string; album: any; uri: string }) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0],
            album: track.album.name,
            uri: track.uri,
          }),
        );
      });
  };
  return { search };
};

export default Spotify;
