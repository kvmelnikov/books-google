import React from 'react';
import logo from './logo.svg';
import Form from 'react-bootstrap/Form';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/main-page/main-page';
import { BooksList } from './components/books-list/books-list';

function App() {
  const home = '/'
 

  return (
      <Routes>
          <Route path={home} element={<MainPage/>}>
            <Route path={home} element={<BooksList/>}/>
          </Route>
      </Routes>
  );
}

export default App;
