import React from 'react';
import styled from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';

const TotalRecord = () => {
    //전적데이터
    const total = 200;
    const win = 51;
    const lose = 149;
    const winPercent = 50;
    const completePercent = 86;
    const retirePercent = 14;

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
    width: 450px;
`;

const TextContents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    font-weight: 500;

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
