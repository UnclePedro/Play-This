const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center items-center font-oxygen p-4">
        <label>
          <input className="border-yellow-300 border-2 rounded m-4 p-1"></input>
        </label>
        <button className="text-white bg-gray-600 px-2 py-1 rounded">Jam!</button>
      </div>
    </>
  );
};

export default SearchBar;
