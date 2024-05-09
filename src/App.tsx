import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { authorize, getToken } from './util/Authorize';
import { search } from './util/Search';

interface Track {
  id: number;
  name: string;
  artist: string;
  album: string;
  uri: string;
}

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'We Run',
      artist: 'Bailey Ibbs',
      length: '6:11',
      id: 0,
      uri: '1234',
    },
    {
      name: 'Gas Me Up (Diligent)',
      artist: 'Skepta',
      length: '2:51',
      id: 1,
      uri: '1234',
    },
    {
      name: 'Greaze Mode',
      artist: 'Skepta',
      length: '3:15',
      id: 2,
      uri: '1234',
    },
  ]);

  // Authorization
  const [codeVerifier, setCodeVerifier] = useState('');
  useEffect(() => {
    setCodeVerifier(sessionStorage.getItem('code_verifier') || '');
  }, []);

  const searchTrigger = (term: string) => {
    search(term).then((result) => {
      setSearchResults(result);
      console.log(`Your search results are ${result}`);
    });
  };

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

  // function to map a trackURI to each track in the playlistTracks array when Save Playlist button is clicked
  // Don't think I need this, URI's are mapped on search
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
  };

  return (
    <div>
      <Banner />
      {codeVerifier ? (
        <>
          <SearchBar onSearch={searchTrigger} />
          <button onClick={getToken} className="justify-center p-4 text-white bg-pink-900 rounded-xl shadow-xl">
            Get Token
          </button>
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
        </>
      ) : (
        <div className="flex justify-center">
          <button onClick={authorize} className="justify-center p-4 text-white bg-pink-900 rounded-xl shadow-xl">
            Log In
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
