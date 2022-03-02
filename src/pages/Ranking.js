import Description from '../components/Description';
import RankingEtcBox from '../components/RankingEtcBox';
import RankingTop from '../components/RankingTop';
import React from 'react';
import styled from 'styled-components';
// import waveimg from '../../public/img/waveimg';

const Container = styled.div`
  background: #005fcc;
  padding: 50px;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
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
    bottom: 10px;
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

const Ranking = () => {
  return (
    <Container>
      <Description />
      <RankingTop />
      {/* <RankingEtcBox /> */}
      <div>
        <div
          className='wave wave1'
          style={{ background: 'url(/img/wave.png)' }}
        />
        <div
          className='wave wave2'
          style={{ background: 'url(/img/wave.png)' }}
        />
      </div>
    </Container>
  );
};

export default Ranking;

// const WaveBox = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   background: #3586ff;
//   overflow: hidden;
// `;
