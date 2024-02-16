import { useState } from 'react';
import Banner from './components/Banner';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Tracklist from './components/Tracklist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'We Run',
      artist: 'Bailey Ibbs',
      length: '6:11',
      id: 0,
    },
    {
      name: 'Gas Me Up (Diligent)',
      artist: 'Skepta',
      length: '2:51',
      id: 1,
    },
    {
      name: 'Greaze Mode',
      artist: 'Skepta',
      length: '3:15',
      id: 2,
    },
  ]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track: object) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) return;

    setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
  };

  const removeTrack = (track: object) => {
    setPlaylistTracks((prevPlaylist) => prevPlaylist.filter((item) => item.name !== track.name));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
  };

  // Save playlist function

  return (
    <div>
      <Banner />
      <SearchBar />
      <div className="flex flex-row justify-center space-x-8">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
