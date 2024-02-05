const SearchResults = () => {
  const songs = [
    // From search component, receive song objects array, and map into a results list
    {
      songName: 'We Run',
      songArtist: 'Bailey Ibbs',
      songLength: '6:11',
    },
    {
      songName: 'Gas Me Up (Diligent)',
      songArtist: 'Skepta',
      songLength: '2:51',
    },
  ];

  return (
    <>
      <div className="p-8 text-white bg-pink-900 w-[400px] rounded-xl shadow-xl ">
        <h2 className="text-4xl font-oxygen font-bold p-3">Results:</h2>
        <ul>
          {songs.map((song) => (
            <>
              <button>
                <li
                  key={song.songName}
                  className="py-3 w-72 bg-pink-700 my-4 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300"
                >
                  <div className="text-left">
                    <h3 className="font-bold text-lg">{song.songName}</h3>
                    <p>{song.songArtist}</p>
                    <p>{song.songLength}</p>
                  </div>
                  <p className="font-bold">+</p>
                </li>
              </button>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchResults;
