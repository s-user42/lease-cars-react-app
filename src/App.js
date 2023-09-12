import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CarsBlog from './components/CarsBlog/CarsBlog';

import Homepage from './pages/Homepage/Homepage';
import ChooseCars from './pages/ChooseCars/ChooseCars';
import Form from './pages/Form/Form';
import LeaseVsBuy from './pages/LeaseVsBuy/LeaseVsBuy';



function App() {

  return (
        <BrowserRouter>
        <div className="wrapper">
            <Header />
            
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="new-cars" element={<ChooseCars />} />
                <Route path="contacts" element={<Form />} />
                <Route path="comparation" element={<LeaseVsBuy />} />
            </Routes>

            <CarsBlog />
            <Footer />
        </div>
        </BrowserRouter>
  );
}

export default App;
