import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Homepage from './pages/Homepage/Homepage';
import ChooseCars from './pages/ChooseCars/ChooseCars';



function App() {


  return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="new-cars" element={<ChooseCars />} />
                <Route path="contacts" />
            </Routes>
        <Footer />
        </BrowserRouter>
  );
}

export default App;
