import Track from './Track';

const Tracklist = (props: { tracks: any; onAdd: any; onRemove: any; isRemoval: boolean }) => {
  console.log('Tracklist:', props.tracks);
  return (
    <>
      {props.tracks.map((track: any) => (
        <Track track={track} key={track.id} onAdd={props.onAdd} isRemoval={props.isRemoval} onRemove={props.onRemove} />
      ))}
    </>
  );
};

export default Tracklist;
