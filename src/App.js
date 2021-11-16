import React from 'react';

// Components

import Header from './Components/Header/index';
import Home from './Components/Home';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
