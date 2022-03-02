import Description from "../components/Description";
import RankingEtcBox from "../components/RankingEtcBox";
import RankingTop from "../components/RankingTop";
import React from "react";
import styled from "styled-components";
// import waveimg from '../../public/img/waveimg';

const Ranking = () => {
  return (
    <>
      <Section>
        <Container>
          <Description />
          <RankingTop />
        </Container>
        <div
          className="wave wave1"
          style={{
            background: "url(/img/wave.png)",
          }}
        />
        <div
          className="wave wave2"
          style={{ background: "url(/img/wave.png)" }}
        />
      </Section>
      <RankingEtcBox />
    </>
  );
};

export default Ranking;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 80%;
  background: #005fcc;
  overflow: hidden;
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-size: 1000px 100px;
  }
  .wave1 {
    animation: animate 30s linear infinite;
    opacity: 0.2;
    animation-delay: 0s;
    z-index: 1000;
    bottom: 0;
  }
  .wave2 {
    animation: animate2 15s linear infinite;
    opacity: 0.2;
    animation-delay: 0s;
    z-index: 999;
    bottom: 0;
  }

  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }

  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }
`;

const Container = styled.div`
  background: #005fcc;
  padding: 50px;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
