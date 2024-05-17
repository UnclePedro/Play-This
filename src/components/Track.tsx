const Track = (props: { isRemoval: boolean; onRemove: any; onAdd: any; track: any }) => {
  // console.log('Track:', props.track);
  const addTrack = () => {
    props.onAdd(props.track);
  };

  const removeTrack = () => {
    props.onRemove(props.track);
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button onClick={removeTrack} className="font-bold text-xl bg-white px-2 text-pink-700 rounded xl">
          -
        </button>
      );
    }
    return (
      <button onClick={addTrack} className="font-bold text-xl bg-white px-2 text-pink-700 rounded xl">
        +
      </button>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-11/12 sm:w-[500px] bg-pink-700 flex rounded-xl shadow-lg p-2 my-1">
          <div className="flex items-center font-bold px-2 w-1/3">
            {props.track.name.length < 25 ? props.track.name : props.track.name.substring(0, 25) + '...'}
          </div>
          <div className="flex items-center px-2 w-1/3">
            {props.track.artist.length < 25 ? props.track.artist : props.track.artist.substring(0, 25) + '...'}
          </div>
          <div className="flex items-center px-2 w-1/3">
            {props.track.album.length < 25 ? props.track.album : props.track.album.substring(0, 25) + '...'}
          </div>

          <div className="p-4">{renderAction()}</div>
        </div>
      </div>
    </>
  );
};

export default Track;
