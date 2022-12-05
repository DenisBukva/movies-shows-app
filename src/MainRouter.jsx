import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen, MovieOrShowDetails, MovieOrShowSearch } from './pages';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detail/:id/:keyword" element={<MovieOrShowDetails />} />
        <Route path="/:catalog" element={<MovieOrShowSearch />} />
      </Routes>
    </>
  );
};

export default MainRouter;
