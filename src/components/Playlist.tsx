const Playlist = (props: { playlistData: object[] }) => {
  return (
    <>
      <input placeholder="Playlist..." className="text-4xl font-oxygen font-bold p-3 rounded-xl w-72"></input>
      <ul>
        {props.playlistData.map((playlistItem: object) => (
          <li
            key={playlistItem.name}
            className="py-3 w-72 bg-pink-700 my-2 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300 text-white"
          >
            <div className="text-left">
              <h3 className="font-bold text-lg">{playlistItem.name}</h3>
              <p>{playlistItem.artist}</p>
              <p>{playlistItem.length}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="py-3 w-72 bg-white font-bold my-2 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300 ">
        Save to Spotify
      </button>
    </>
  );
};

export default Playlist;
