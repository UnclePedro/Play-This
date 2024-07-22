import TrackTile from './TrackTile';

const Tracklist = (props: { tracks: any; onAdd: any; onRemove: any; isRemoval: boolean }) => {
  console.log('Tracklist:', props.tracks);
  return (
    <>
      {props.tracks.map((track: any) => (
        <TrackTile
          track={track}
          key={track.id}
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
          onRemove={props.onRemove}
        />
      ))}
    </>
  );
};

export default Tracklist;
