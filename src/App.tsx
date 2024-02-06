// import { useState } from 'react';
import Banner from './components/Banner';
// import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div>
      <Banner />
      <SearchBar />
      <SearchResults />
      {/* <Playlist /> */}
    </div>
  );
}

export default App;
