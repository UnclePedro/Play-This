const SearchBar = () => {
  // Use Spotify API to send request for data from input text and store the results in an object array

  return (
    <>
      <div className="flex justify-center items-center font-oxygen p-4">
        <label>
          <input className="border-2 rounded-full m-4 p-5 text-center"></input>
        </label>
        <button className=" bg-white py-6 px-8 rounded-full font-bold shadow-lg">JAM!</button>
      </div>
    </>
  );
};

export default SearchBar;
