import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RankingEtc from './RankingEtc';
import React from 'react';
import Home from './pages/Home';
import styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
      {/* 여기에 네비게이션 두시면 됩니다. */}
      <MainContainer>
        <Routes>
          <Route exact path='/' element={} />
          <Route exact path='/' element={} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
const MainContainer = styled.main``;
export default App;
