import { useState } from 'react';
import Banner from './components/Banner';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { authorize } from './utils/authorize';
import { search } from './utils/search';
import { Track } from './models/Track';
import { addTrack, removeTrack } from './utils/playlistStorageHelper';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState<Track[]>([]);

  const codeVerifier = sessionStorage.getItem('code_verifier') || '';

  return (
    <div>
      <Banner />
      {codeVerifier && window.location.href.includes('?code=') ? (
        <>
          <SearchBar onSearch={(term: string) => search(term).then(setSearchResults)} />
          <div className="flex flex-col xl:flex-row justify-center">
            <SearchResults
              searchResults={searchResults}
              onAdd={(track: Track) => setPlaylistTracks((prevPlaylist) => addTrack(track, prevPlaylist))}
              onRemove={(track: Track) => setPlaylistTracks(removeTrack(track))}
            />
            <Playlist
              playlistTracks={playlistTracks}
              onAdd={(track: Track) => setPlaylistTracks((prevPlaylist) => addTrack(track, prevPlaylist))}
              onRemove={(track: Track) => setPlaylistTracks(removeTrack(track))}
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
