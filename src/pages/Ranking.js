import Description from "../components/Description";
import RankingEtcBox from "../components/RankingEtcBox";
import RankingTop from "../components/RankingTop";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #005fcc;
  padding: 50px;
  height: 700px;
`;

const Ranking = () => {
  return (
    <Container>
      <Description />
      <RankingTop />
      {/* <RankingEtcBox /> */}
    </Container>
  );
};

export default Ranking;
