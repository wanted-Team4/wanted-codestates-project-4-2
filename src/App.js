import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      {/* 여기에 네비게이션 두시면 됩니다. */}
      <Profile />
      <MainContainer>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
const MainContainer = styled.main``;
export default App;

