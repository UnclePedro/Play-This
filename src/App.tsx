import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { authorize, getToken } from './utils/authorize';
import { search } from './utils/search';
import { Track } from './models/Track';

function App() {
  // Authorization
  const [codeVerifier, setCodeVerifier] = useState('');
  useEffect(() => {
    setCodeVerifier(sessionStorage.getItem('code_verifier') || '');
  }, []);

  const [searchResults, setSearchResults] = useState([]);
  const searchTrigger = async (term: string) => {
    await getToken();
    search(term).then((result) => {
      setSearchResults(result);
      console.log(`Your search results are ${result}`);
    });
  };

  const [playlistTracks, setPlaylistTracks] = useState<Track[]>([]);

  const addTrack = (track: Track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) return;
    setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
  };

  const removeTrack = (track: Track) => {
    setPlaylistTracks((prevPlaylist) => prevPlaylist.filter((item) => item.name !== track.name));
  };

  return (
    <div>
      <Banner />
      {codeVerifier && window.location.href.includes('?code=') ? (
        <>
          <SearchBar onSearch={searchTrigger} />
          <div className="flex flex-col xl:flex-row justify-center">
            <SearchResults searchResults={searchResults} onAdd={addTrack} onRemove={removeTrack} />
            <Playlist playlistTracks={playlistTracks} onAdd={addTrack} onRemove={removeTrack} />
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
