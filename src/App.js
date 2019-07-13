import React from 'react';

import ItemList from './components/itemList';
import Search from './components/nav';

import './App.css';
import './float-grid.css';

function App() {
  return (
    <main role='main'>
      <div className="row">
        <Search />
        <ItemList />
      </div>
    </main>
  );
};

export default App;