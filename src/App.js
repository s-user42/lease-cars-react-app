import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';

import Homepage from './pages/Homepage/Homepage';
import { useState } from 'react';



function App() {


  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route path="/" element={<Homepage />} />
                <Route path="new-cars" element={<div>cars</div>} />
              </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
