const playlistName = 'Play-This Test';

export const savePlaylist = async () => {
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
    body: JSON.stringify({ name: playlistName, description: 'PlayThis', public: false }),
  });
  const playlistJsonResponse = await createPlaylist.json();
  console.log(playlistJsonResponse);

  // add items to playlist api call below
};
