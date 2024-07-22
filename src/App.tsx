import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { authorize, getToken } from './util/Authorize';
import { search } from './util/Search';
import { savePlaylist } from './util/SavePlaylist';
import { Track } from './models/Track';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  // Authorization
  const [codeVerifier, setCodeVerifier] = useState('');
  useEffect(() => {
    setCodeVerifier(sessionStorage.getItem('code_verifier') || '');
  }, []);

  const searchTrigger = async (term: string) => {
    await getToken();
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

  // function to map a trackURI to each track in the playlistTracks array when Save Playlist button is clicked, to give Spotify the data to add tracks to playlist
  const triggerSavePlaylist = async () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    savePlaylist(playlistName, trackURIs).then(() => {
      // setPlaylistName(''); doesn't clear when playlist is saved
      setPlaylistTracks([]);
    });
    // console.log(trackURIs);
  };

  return (
    <div>
      <Banner />
      {codeVerifier && window.location.href.includes('?code=') ? (
        <>
          <SearchBar onSearch={searchTrigger} />
          <div className="flex flex-col xl:flex-row justify-center">
            <SearchResults searchResults={searchResults} onAdd={addTrack} onRemove={removeTrack} />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onSave={triggerSavePlaylist}
              onAdd={addTrack}
              onRemove={removeTrack}
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
