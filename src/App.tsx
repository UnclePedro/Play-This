// import { useState } from 'react';
import Banner from './components/Banner';
import PageWrapper from './components/PageWrapper';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="h-screen scale-down">
      <PageWrapper />
      <Banner />
      <SearchBar />
    </div>
  );
}

export default App;
