import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/main-page/main-page';

function App() {
  const home = '/'

  return (
      <Routes>
          <Route path={home} element={<MainPage/>}>

          </Route>
      </Routes>
  );
}

export default App;
