import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route exact path='/rank' element={<Ranking />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
const MainContainer = styled.main`
`;
export default App;
