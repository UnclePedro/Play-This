import Track from './Track';

const Tracklist = (props: { tracks: any; onAdd: any; isRemoval: any; onRemove: any }) => {
  return (
    <>
      <div>
        {props.tracks.map((track: any) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={props.onAdd}
              isRemoval={props.isRemoval}
              onRemove={props.onRemove}
            />
          );
        })}
      </div>
    </>
  );
};

export default Tracklist;
