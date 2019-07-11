import React from 'react';
import ItemList from './components/ItemList';
import Search from './components/SearchSort'
import './App.css';
import './float-grid.css'

function App() {
  return (
    <div className="row board">
      <Search/>
      <ItemList/>
    </div>
  );
}

export default App;