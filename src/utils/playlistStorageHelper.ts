import { Track } from '../models/Track';

export const savePlaylist = async (playlistName: string, playlistTracks: Track[]) => {
  const trackURIs = playlistTracks.map((track) => track.uri);
  // Return if no tracks are added to playlist, to avoid creating empty playlists
  if (trackURIs.length === 0) {
    window.alert('Cannot create empty playlist, add some tracks.');
    return;
  }

  // Return if playlist is not named
  if (playlistName.length === 0) {
    window.alert('Please name your playlist first.');
    return;
  }

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
  const playlistId = playlistJsonResponse.id;

  const addPlaylistTracks = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ uris: trackURIs }),
  });

  // Checks response to save playlist request and notifies user if success of failure
  const addTracksJsonResponse = await addPlaylistTracks.json();
  console.log(addTracksJsonResponse.snapshot_id);
  if (addTracksJsonResponse.snapshot_id) {
    // Reset playlist doesn't work currently...
    playlistName = '';
    playlistTracks = [];
    window.alert('Playlist saved!');
  } else {
    window.alert('Error saving playlist, please try again.');
  }
};

export const addTrack = (track: Track, playlistTracks: Track[]) => {
  if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) return playlistTracks;
  return [...playlistTracks, track];
};

export const removeTrack = (track: Track) => {
  return (prevPlaylist: Track[]) => prevPlaylist.filter((item) => item.name !== track.name);
};
