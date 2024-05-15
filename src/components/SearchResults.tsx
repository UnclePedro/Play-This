import Tracklist from './Tracklist';

const SearchResults = (props: { onRemove: any; searchResults: any; onAdd: any }) => {
  console.log('Search Results:', props.searchResults);
  return (
    <>
      <div className="flex justify-center m-4">
        <div className="p-4 xl:my-8 text-white bg-pink-900 w-[600px] rounded-xl shadow-xl">
          <h2 className="text-xl xl:text-4xl font-oxygen font-bold p-3">Results:</h2>
          <Tracklist tracks={props.searchResults} onAdd={props.onAdd} isRemoval={false} onRemove={props.onRemove} />
        </div>
      </div>
    </>
  );
};
export default SearchResults;
