import { useState } from 'react';

interface Props {
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <div className="flex justify-center items-center font-oxygen bg-pink-900 w-fit rounded-lg">
          <label>
            <input
              onChange={(element) => {
                setSearchTerm(element.target.value);
              }}
              className="border-2 rounded-xl m-4 p-3 text-center"
              placeholder="Search..."
            />
          </label>
          <button onClick={() => onSearch(searchTerm)} className="text-white py-6 px-6 font-bold text-3xl">
            🔍
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
