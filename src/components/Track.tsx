const Track = (props: { isRemoval: boolean; onRemove: any; onAdd: any; track: any }) => {
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
      <div className="flex justify-center items-center my-2">
        <div className="bg-pink-700 flex flex-row justify-between px-6 rounded-xl shadow-lg w-[500px]">
          <div className="flex items-center font-bold">{props.track.name}</div>
          <div className="flex items-center">{props.track.artist}</div>
          <div className="flex items-center">{props.track.length}</div>
          <div className="p-4">{renderAction()}</div>
        </div>
      </div>
    </>
  );
};

export default Track;
