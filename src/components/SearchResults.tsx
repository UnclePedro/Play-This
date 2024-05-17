import Tracklist from './Tracklist';

const SearchResults = (props: { onRemove: any; searchResults: any; onAdd: any }) => {
  console.log('Search Results:', props.searchResults);
  return (
    <>
      <div className="flex justify-center m-4">
        <div className="p-4 xl:my-8 text-white bg-pink-900 w-[600px] rounded-xl shadow-xl">
          <h2 className="text-xl xl:text-4xl font-oxygen font-bold p-3">Results:</h2>
          <div className="flex justify-center items-center">
            <div className="w-11/12 sm:w-[500px] bg-pink-700 flex rounded-xl shadow-lg p-2 font-thin mb-1">
              <div className="flex items-center px-2 w-[166px]">
                <p>Name</p>
              </div>
              <div className="flex items-center px-2 w-[166px]">
                <p>Artist</p>
              </div>
              <div className="flex items-center px-2 w-[166px]">
                <p>Album</p>
              </div>
            </div>
          </div>
          <Tracklist tracks={props.searchResults} onAdd={props.onAdd} isRemoval={false} onRemove={props.onRemove} />
        </div>
      </div>
    </>
  );
};
export default SearchResults;
