const SearchBar = () => {
  // Use Spotify API to send request for data from input text and store the results in an object array

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <div className="flex justify-center items-center font-oxygen bg-pink-900 w-fit rounded-lg">
          <label>
            <input className="border-2 rounded-xl m-4 p-3 text-center"></input>
          </label>
          <button className="text-white py-6 px-6 font-bold hover:text-lg transition-all duration-300">Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
