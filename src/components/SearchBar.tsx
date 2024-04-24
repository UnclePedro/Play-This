import { useState } from 'react';

const SearchBar = (props: { onSearch: any }) => {
  const [term, setTerm] = useState('');

  // passing input term from input to search function in Spotify
  const passTerm = () => {
    props.onSearch(term);
  };

  const handleTermChange = (event: any) => {
    setTerm(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <div className="flex justify-center items-center font-oxygen bg-pink-900 w-fit rounded-lg">
          <label>
            <input
              onChange={handleTermChange}
              className="border-2 rounded-xl m-4 p-3 text-center"
              placeholder="Search..."
            ></input>
          </label>
          <button onClick={passTerm} className="text-white py-6 px-6 font-bold text-3xl">
            🔍
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
