import { Track } from '../models/Track';
import TrackTile from './TrackTile';

interface Props {
  tracks: Track[];
  onAdd: (track: Track) => void;
  onRemove: (track: Track) => void;
  isRemoval: boolean;
}

const Tracklist = ({ tracks, onAdd, onRemove, isRemoval }: Props) => {
  return (
    <>
      {tracks.map((track: any) => (
        <TrackTile track={track} key={track.id} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove} />
      ))}
    </>
  );
};

export default Tracklist;
