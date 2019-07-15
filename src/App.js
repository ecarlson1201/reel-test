import React from 'react';

import ItemList from './components/itemList';
import Search from './components/nav';

import './App.css';
import './float-grid.css';

function App() {
  return (
    <div>
        <Search />
        <ItemList />
    </div>
  );
};

export default App;