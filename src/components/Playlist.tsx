import { useEffect, useState } from 'react';

const Playlist = (props: { playlist: object[] }) => {
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlist, setPlaylist] = useState(props.playlist);

  useEffect(() => {
    setPlaylist(props.playlist);
  }, [props.playlist]);

  const removeSong = (song: object) => {
    console.log('Removing song:', song);
    setPlaylist((prevPlaylist) => prevPlaylist.filter((item) => item.name !== song.name));
    console.log('Playlist Data', playlist);
  };

  console.log('Playlist Data in Playlist:', props.playlist);

  return (
    <>
      <input
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        className="text-2xl font-oxygen font-bold p-3 rounded-xl w-72"
      ></input>
      <ul>
        {playlist.map((playlistItem: object) => (
          <>
            <button onClick={() => removeSong(playlistItem)}>
              <li
                key={playlistItem.name}
                className="py-3 w-72 bg-pink-700 my-2 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300 text-white"
              >
                <div className="text-left">
                  <h3 className="font-bold text-lg">{playlistItem.name}</h3>
                  <p>{playlistItem.artist}</p>
                  <p>{playlistItem.length}</p>
                </div>
                <p className="font-bold">-</p>
              </li>
            </button>
          </>
        ))}
      </ul>
      <button className="py-3 w-72 bg-white font-bold my-2 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300 ">
        Save to Spotify
      </button>
    </>
  );
};

export default Playlist;
