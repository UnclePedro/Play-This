import { Track } from '../models/Track';

interface Props {
  isRemoval: boolean;
  onRemove: (track: Track) => void;
  onAdd: (track: Track) => void;
  track: Track;
}

const TrackTile = ({ isRemoval, onRemove, onAdd, track }: Props) => {
  const renderAction = () => {
    if (isRemoval) {
      return (
        <button onClick={() => onRemove(track)} className="font-bold text-xl bg-white px-2 text-pink-700 rounded xl">
          -
        </button>
      );
    }
    return (
      <button onClick={() => onAdd(track)} className="font-bold text-xl bg-white px-2 text-pink-700 rounded xl">
        +
      </button>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-11/12 sm:w-[500px] bg-pink-700 flex rounded-xl shadow-lg p-2 my-1">
          <div className="flex items-center font-bold px-2 w-1/3">
            {track.name.length < 25 ? track.name : track.name.substring(0, 25) + '...'}
          </div>
          <div className="flex items-center px-2 w-1/3">
            {track.artist.length < 25 ? track.artist : track.artist.substring(0, 25) + '...'}
          </div>
          <div className="flex items-center px-2 w-1/3">
            {track.album.length < 25 ? track.album : track.album.substring(0, 25) + '...'}
          </div>

          <div className="p-4">{renderAction()}</div>
        </div>
      </div>
    </>
  );
};

export default TrackTile;
