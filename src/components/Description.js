import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  width: 80%;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: left;
  margin-left: 12%;
  flex-direction: column;

  .description-title {
    font-size: 25px;
  }
  .description-divider {
    border-top: 4px solid #fff;
    width: 45px;
    margin: 18px 0;
  }
  .description-sub {
    font-size: 13px;
  }
  .description-button {
    margin: 30px 0;
    display: flex;
    .button-left {
      border-radius: 5px;
      padding: 6px;
      border: 1px solid #fff;
      font-size: 13px;
    }
    .button-right {
      border-radius: 5px;
      padding: 6px;
      border: 1px solid #fff;
      font-size: 13px;
    }
    .divider {
      border-right: 2px solid #fff;
    }
  }
`;

const Description = () => {
  return (
    <Container>
      <div>
        <div className='description-title'>3월 TMI 랭킹</div>
        <div className='description-divider' />
        <div className='description-sub'>
          랭킹 산정기간 2022년 03월 01일 00:00:00 ~ 2022년 03월 31일 24:00:00
        </div>
        <div className='description-sub'>
          최근 업데이트 2022년 03월 01일 09:22:51
        </div>
      </div>

      <div className='description-button'>
        <div className='button-left'>
          <span className='divider'>개인전</span>
          <span>팀전</span>
        </div>

        <div className='button-right'>
          <span className='divider'>통합</span>
          <span className='divider'>매빠</span>
          <span>무부</span>
        </div>
      </div>
    </Container>
  );
};

export default Description;
