import { useState } from 'react';

const SearchBar = (props: { onSearch: any }) => {
  // Use Spotify API to send request for data from input text and store the results in an object array
  const [term, setTerm] = useState('');

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
          {/* Currently button not hooked up to search, instead input onChange is recording the search bar value... how do I make the search only trigger when button is clicked? */}
          <button onClick={passTerm} className="text-white py-6 px-6 font-bold text-3xl">
            🔍
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
