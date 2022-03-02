import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RankingEtc from './components/RankingEtcBox';
import React from 'react';
import Home from './pages/Home';
import styled from 'styled-components';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route exact path='/rank' element={<RankingEtc />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};

const MainContainer = styled.main`
`;
export default App;
