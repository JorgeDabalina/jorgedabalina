import React from 'react';
import './styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pagesData from './data';

import Root from './components/root';
import Home from './pages/home';
import Bio from './pages/bio';
import Project from './pages/project';
import Error from './pages/error';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={<Root />}>
          <Route index
            element={<Home />} />
          {pagesData.map(({ pathNav, id }, index) => (
            <Route path={pathNav}
              key={index}
              element={<Project projectId={id} />}
            />
          ))}
          <Route path='bio'
            element={<Bio />} />
          <Route path='*'
            element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
