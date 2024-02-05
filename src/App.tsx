// import { useState } from 'react';
import Banner from './components/Banner';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="h-screen bg-rose-900/75">
      <Banner />
      <SearchBar />
      <SearchResults />
      {/* <Playlist /> */}
    </div>
  );
}

export default App;
