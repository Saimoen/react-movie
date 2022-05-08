import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import UserList from './pages/UserList'


function App() {
  return (
    <BrowserRouter>
     <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/coup-de-coeur' element={<UserList />}></Route>
    <Route path='*' element={<Home />}></Route>
     </Routes>     
    </BrowserRouter>
  );
}

export default App;
