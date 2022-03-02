import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';

const TotalRecord = () => {
    //전적데이터
    const total = 200;
    const win = 51;
    const lose = 149;
    const winPercent = 50;
    const completePercent = 86;
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
            <TextContents>
                <div>
                    <span className='blue'>종합</span>
                    &nbsp;
                    <span>전적</span>
                </div>
                <span className='small'>
                    {total}전 {win}승 {lose}패
                </span>
            </TextContents>
            <ChartContents>
                <div>
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
                            fontSize: '20px',
                            fill: '#0088FE',
                            fontWeight: '400',
                        }}
                        labelPosition={0}
                        radius={35}
                    />
                </div>
                <div>
                    <p>완주율</p>
                    <PieChart
                        data={[
                            {
                                value: 20,
                                color: '#00C49F',
                                name: 'name1',
                            },
                        ]}
                        reveal={completePercent}
                        lineWidth={15}
                        background='#ddd'
                        lengthAngle={360}
                        rounded
                        animate
                        animationDuration={1000}
                        label={() => completePercent + '%'}
                        labelStyle={{
                            fontSize: '20px',
                            fill: '#00C49F',
                            fontWeight: '400',
                        }}
                        labelPosition={0}
                        radius={35}
                    />
                </div>
                <div>
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
                            fontSize: '20px',
                            fill: '#FF0000',
                            fontWeight: '400',
                        }}
                        labelPosition={0}
                        radius={35}
                    />
                </div>
            </ChartContents>
            <TextContents>
                <div>
                    <span className='blue'>최다주행</span>
                    &nbsp;
                    <span>모드</span>
                </div>
                <span className='big'>통합</span>
            </TextContents>
        </Container>
    );
};

export default TotalRecord;

const Container = styled.div`
    width: 360px;
    padding: 0 10px;
    box-sizing: border-box;
`;

const TextContents = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    font-size: 15px;
    font-weight: 500;
  }
  .small {
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

    .blue {
        color: #0088fe;
        font-size: 15px;
        font-weight: 500;
    }
    .small {
        font-size: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;
    }
    .big {
        font-size: 18px;
        font-weight: 500;
        display: flex;
        align-items: center;
    }
`;

const ChartContents = styled.div`
    width: 100%;
    border-top: 1px solid #999;
    display: flex;
    flex-direction: row;
    p {
        text-align: center;
        color: #333;
        margin: 15px 0 -15px;
        font-size: 15px;
        font-weight: 400;
    }
`;
