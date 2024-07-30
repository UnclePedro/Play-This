import { Track } from '../models/Track';
import Tracklist from './Tracklist';

interface Props {
  onRemove: (track: Track) => void;
  searchResults: Track[];
  onAdd: (track: Track) => void;
}

const SearchResults = ({ onRemove, searchResults, onAdd }: Props) => {
  return (
    <>
      <div className="flex justify-center m-4">
        <div className="p-4 xl:my-8 text-white bg-pink-900 w-[600px] rounded-xl shadow-xl">
          <h2 className="text-xl xl:text-4xl font-oxygen font-bold p-3">Results:</h2>
          <div className="flex justify-center items-center">
            {searchResults.length > 0 ? (
              <>
                <div className="w-11/12 sm:w-[500px] bg-pink-700  flex rounded-xl shadow-lg p-2 font-thin mb-1">
                  <div className="flex items-center px-2 w-1/3">
                    <p>Name</p>
                  </div>
                  <div className="flex items-center px-2 w-1/3">
                    <p>Artist</p>
                  </div>
                  <div className="flex items-center px-2 w-1/3">
                    <p>Album</p>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <Tracklist tracks={searchResults} onAdd={onAdd} isRemoval={false} onRemove={onRemove} />
        </div>
      </div>
    </>
  );
};
export default SearchResults;
