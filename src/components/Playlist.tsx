import { useState } from 'react';
import Tracklist from './Tracklist';
import { triggerSavePlaylist } from '../utils/savePlaylist';
import { Track } from '../models/Track';

interface Props {
  onAdd: (track: Track) => void;
  onRemove: (track: Track) => void;
  playlistTracks: Track[];
}

const Playlist = ({ onAdd, onRemove, playlistTracks }: Props) => {
  const [playlistName, setPlaylistName] = useState('');

  return (
    <>
      <div className="flex justify-center m-4">
        <div className="p-4 xl:my-8 text-white bg-pink-900 w-[600px] rounded-xl shadow-xl">
          <div className="flex flex-col">
            <input
              onChange={(element) => {
                setPlaylistName(element.target.value);
              }}
              placeholder="New Playlist"
              className="text-xl sm:text-2xl font-oxygen font-bold p-3 rounded-xl w-72 text-black mb-1"
            />
            <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove} onAdd={onAdd} />
            <button
              onClick={() => triggerSavePlaylist(playlistTracks, playlistName)}
              className="flex w-40 justify-center font-bold my-2 p-4 bg-pink-700 hover:bg-violet-600 rounded-xl shadow-lg transition-all duration-300 "
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
