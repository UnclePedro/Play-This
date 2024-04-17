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

  interface Track {
    name: string;
    artist: string;
    length: string;
    id: number;
    uri?: string; // Assuming 'uri' is an optional property
  }

  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState<Track[]>([]);

  const addTrack = (track: Track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) return;

    setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
  };

  const removeTrack = (track: Track) => {
    setPlaylistTracks((prevPlaylist) => prevPlaylist.filter((item) => item.name !== track.name));
  };

  const updatePlaylistName = (name: string) => {
    setPlaylistName(name);
  };

  const search = (term: string) => {
    // logic to take the input (term) and make request to spotify's server to go below
    // console.log(term);
  };

  // function to map a trackURI to each track in the playlistTracks array when Save Playlist button is clicked
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
  };

  // Save playlist function

  return (
    <div>
      <Banner />
      <SearchBar onSearch={search} />
      <div className="flex flex-col xl:flex-row justify-center">
        <SearchResults searchResults={searchResults} onAdd={addTrack} onRemove={undefined} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
          onAdd={undefined}
        />
      </div>
    </div>
  );
}

export default App;
