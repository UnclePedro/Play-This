import { useState } from 'react';

const SearchResults = () => {
  const [playlist, setPlaylist] = useState<any[]>([]);

  const addSong = (song: object) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
  };

  const songs = [
    // Receive song objects array from search component, and map into a results list
    {
      name: 'We Run',
      artist: 'Bailey Ibbs',
      length: '6:11',
    },
    {
      name: 'Gas Me Up (Diligent)',
      artist: 'Skepta',
      length: '2:51',
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <div className="p-8 text-white bg-pink-900 w-[400px] rounded-xl shadow-xl">
          <h2 className="text-4xl font-oxygen font-bold p-3">Results:</h2>
          <ul>
            {songs.map((song) => (
              <>
                <button onClick={() => addSong(song)}>
                  <li
                    key={song.name}
                    className="py-3 w-72 bg-pink-700 my-2 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300"
                  >
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{song.name}</h3>
                      <p>{song.artist}</p>
                      <p>{song.length}</p>
                    </div>
                    <p className="font-bold">+</p>
                  </li>
                </button>
              </>
            ))}
          </ul>
          <h2 className="text-4xl font-oxygen font-bold p-3 mt-8">Playlist:</h2>
          <ul>
            {playlist.map((playlistItem) => (
              <li
                key={playlistItem.name}
                className="py-3 w-72 bg-pink-700 my-2 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300"
              >
                <div className="text-left">
                  <h3 className="font-bold text-lg">{playlistItem.name}</h3>
                  <p>{playlistItem.artist}</p>
                  <p>{playlistItem.length}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
