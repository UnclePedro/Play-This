const Playlist = () => {
  const playlist = [
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
        <div className="flex justify-center items-center font-oxygen bg-pink-900 w-fit rounded-lg">
          <input className="border-2 rounded-xl m-4 p-3 text-center" placeholder="Name your playlist..."></input>
          {playlist[0].name}
        </div>
      </div>
    </>
  );
};

export default Playlist;
