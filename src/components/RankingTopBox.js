import styled from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  margin: 0 30px;
`;

const Img = styled.img`
  z-index: 2;
  position: absolute;
  margin-left: 10px;
`;

const Card = styled.div`
  z-index: 1;
  margin-top: 15px;
  height: auto;
  border-radius: 10px;
  background: #fff;
  flex: 1;
  letter-spacing: -1px;
  width: ${(props) => props.width || '280px'};

  div {
    font-weight: 400;
  }
  span {
    font-weight: 900;
  }

  .rankingtopbox-text {
    background-image: url('https://tmi.nexon.com/img/background_flag_rank.png');
    background-position: 50%;
    background-size: cover;
    padding: 40px;
    border-radius: 10px;

    .text-title {
      font-weight: 900;
      color: #07f;
      font-size: 21px;
    }
  }
  .rankingtopbox-graph {
    text-align: center;
    display: flex;
    border-top: 1.5px solid #07f;

    div {
      font-size: 13px;
      font-weight: 500;
      letter-spacing: -1px;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      vertical-align: baseline;
      background: transparent;
    }

    .graph-win {
      position: relative;
      padding-top: 15px;
      flex: 1;
      text-align: center;

      ::after {
        position: absolute;
        content: ' ';
        display: block;
        top: 20px;
        right: 0;
        width: 1px;
        height: 45px;
        background-color: #f2f2f2;
        border: none;
        opacity: 1;
      }
      p {
        position: relative;

        flex: 1;
        text-align: center;
      }
    }

    .graph-retire {
      position: relative;
      padding-top: 15px;
      flex: 1;
      text-align: center;
      p {
        position: relative;

        flex: 1;
        text-align: center;
      }
    }
  }
`;

const RankingTopBox = ({ rank, points, img }) => {
  const winPercent = 50;
  const retirePercent = 14;
  // 통신이 성공됐을시에 사용 통신이 안된다면 로컬 데이터로 대체 해야함
  const [Data, setData] = useState([]);
  const BASE_URL = 'https://api.nexon.co.kr/kart/v1.0/';
  const JSON_HEADER = { 'Content-type': 'application/json' };
  const API_Key = process.env.REACT_APP_NEXON_KEY;
  let nickname = 'BBEESSTT';

  //   닉네임 검색으로  accessId 를 받아오는 함수
  const getDataModal = async (nickname) => {
    await axios
      .get(BASE_URL + `users/nickname/${nickname}`, {
        method: 'GET',
        headers: {
          Authorization: API_Key,
          ...JSON_HEADER,
        },
        params: {
          name: nickname ?? '',
        },
      })
      // res에 data 정보를 넣어준다.
      .then((res) => res.data)
      .then((data) => {
        // body 안에 데이터중  accessId 를 뽑아내면 된다.
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataModal(nickname);
  }, []);
  return (
    <Container>
      <Img data-v-e7dfcdec='' src={img} alt='' className='medal'></Img>

      <Card>
        <div className='rankingtopbox-text'>
          <div className='text-title'>베이비컬렉션</div>
          <br />
          <div>
            순위 &nbsp;&nbsp;<span>1위</span>
          </div>
          <div>
            누적포인트 &nbsp;&nbsp;<span>1위</span>
          </div>
        </div>

        <div className='rankingtopbox-graph'>
          <div className='graph-win'>
            <p>승률</p>
            <PieChart
              data={[
                {
                  value: 20,
                  color: '#0088FE',
                  name: 'name1',
                },
              ]}
              reveal={winPercent}
              lineWidth={15}
              background='#ddd'
              lengthAngle={360}
              rounded
              animate
              animationDuration={1000}
              label={() => winPercent + '%'}
              labelStyle={{
                fontSize: '12px',
                fill: '#0088FE',
                fontWeight: '400',
              }}
              labelPosition={0}
              radius={20}
            />
          </div>
          <div className='graph-retire'>
            <p>리타이어율</p>
            <PieChart
              data={[
                {
                  value: 20,
                  color: '#FF0000',
                  name: 'name1',
                },
              ]}
              reveal={retirePercent}
              lineWidth={15}
              background='#ddd'
              lengthAngle={360}
              rounded
              animate
              animationDuration={1000}
              label={() => retirePercent + '%'}
              labelStyle={{
                fontSize: '12px',
                fill: '#FF0000',
                fontWeight: '400',
              }}
              labelPosition={0}
              radius={20}
            />
          </div>
        </div>
      </Card>
    </Container>
  );
};
export default RankingTopBox;
