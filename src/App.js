import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RankingEtc from './RankingEtc';
import React from 'react';
import Home from './pages/Home';
import styled from 'styled-components';
import DashBoard from './components/DashBoard';

const App = () => {
    return (
        <BrowserRouter>
            {/* 여기에 네비게이션 두시면 됩니다. */}
            <MainContainer>
                <Routes>
                    <Route exact path='/rank' element={<RankingEtc />} />
                    <Route exact path='/' element={<DashBoard />} />
                </Routes>
            </MainContainer>
        </BrowserRouter>
    );
};
const MainContainer = styled.main``;
export default App;
