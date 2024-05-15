import Track from './Track';

const Tracklist = (props: { tracks: any; onAdd: any; isRemoval: any; onRemove: any }) => {
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
