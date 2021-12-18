import React from 'react';
import HeaderComponent from './components/HeaderComponent';

import './App.css';
import FoodBoxComponent from './components/FoodBoxComponent';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="style.css" />
      <HeaderComponent />
      <FoodBoxComponent/>
    </div>
  );
}

export default App;