// import { useState } from 'react';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="h-screen bg-rose-900/75">
      <Banner />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
