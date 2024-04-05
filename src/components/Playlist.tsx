import Tracklist from './Tracklist';

const Playlist = (props: {
  onAdd: any;
  onSave: any;
  onRemove: any;
  playlistTracks: any;
  onNameChange: any;
  playlistName: string;
}) => {
  const handleNameChange = (event: any) => {
    props.onNameChange(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center m-4">
        <div className="p-8 xl:my-8 text-white bg-pink-900 w-[600px] rounded-xl shadow-xl">
          <div className="flex flex-col items-start">
            <input
              onChange={handleNameChange}
              defaultValue={'New Playlist'}
              className="text-2xl font-oxygen font-bold p-3 rounded-xl w-72 text-black"
            />
            <Tracklist tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} onAdd={props.onAdd} />
            <button
              onClick={props.onSave}
              className="py-3 w-72 bg-pink-700 font-bold my-2 flex flex-row space-x-10 p-4 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300 "
            >
              Save to Spotify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
