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
      <div className="justify-center p-8 text-white bg-pink-900 w-[400px]">
        <h1 className="text-5xl font-oxygen font-bold p-3">Results:</h1>
        <ul>
          {songs.map((song) => (
            <>
              <li key={song.songName} className="py-3 bg-pink-700 my-4 flex flex-row space-x-10 p-4">
                <div>
                  <p>{song.songName}</p>
                  <p>{song.songArtist}</p>
                  <p>{song.songLength}</p>
                </div>
                <button className="bg-black h-fit w-6 rounded-full font-bold">+</button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchResults;
