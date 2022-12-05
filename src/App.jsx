import React from 'react';
import MainRouter from './MainRouter';
import { Header, Footer } from './components';

import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;
