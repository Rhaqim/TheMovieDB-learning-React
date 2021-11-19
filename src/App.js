import React from 'react';

// Routers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from './Components/Header/index';
import Home from './Components/Home';
import Movie from './Components/Movie';
import NotFound from './Components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/:movieId" element={<Movie />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );

export default App;
