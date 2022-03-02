import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import React from 'react';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/rank' element={<Ranking />} />
                <Route exact path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
