export const savePlaylist = async (playlistName: string, trackURIs: any) => {
  console.log(trackURIs);
  const accessToken = sessionStorage.getItem('access_token');

  const getUserId = await fetch(`https://api.spotify.com/v1/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const idJsonResponse = await getUserId.json();
  const userId = idJsonResponse.id;
  console.log(userId);

  const createPlaylist = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    // Request works as GET without the body, error must be in the
    body: JSON.stringify({ name: playlistName, description: 'PlayThis', public: false }),
  });
  const playlistJsonResponse = await createPlaylist.json();
  // console.log(playlistJsonResponse);
  const playlistId = playlistJsonResponse.id;
  // console.log(playlistId);

  const addPlaylistTracks = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ uris: trackURIs }),
  });
};
