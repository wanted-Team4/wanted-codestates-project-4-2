import React from 'react';
import styled from 'styled-components';
import { constSelector } from 'recoil';
import { PieChart } from 'react-minimal-pie-chart';

const TotalRecord = () => {
    //전적데이터
    const total = 200;
    const win = 51;
    const lose = 149;
    const winPercent = 50;
    const completePercent = 86;
    const retirePercent = 14;
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <Container>
            <Title>
                <div>
                    <span className='blue'>종합</span>
                    <span>전적</span>
                </div>
                <span>
                    {total}전 {win}승 {lose}패
                </span>
            </Title>
            <PieChart
                data={[
                    {
                        value: 20,
                        color: '#0088FE',
                        name: 'name1',
                    },
                ]}
                reveal={winPercent}
                lineWidth={30}
                background='#fff'
                lengthAngle={360}
                rounded
                animate
                label={() => winPercent + '%'}
                labelStyle={{ fontSize: '20px', fill: '#333' }}
                labelPosition={0}
            />
            {/* 
            <ChartContainer>
                <div>
                    <span>승률</span>
                    <div className='pieChart pieChart1'>
                        <div className='percent'>{winPercent}%</div>
                    </div>
                </div>
                <div>
                    <span>완주율</span>
                    <div className='pieChart pieChart2'>
                        <div className='percent'>{completePercent}%</div>
                    </div>
                </div>
                <div>
                    <span>리타이어률</span>
                    <div className='pieChart pieChart3'>
                        <div className='percent'>{retirePercent}%</div>
                    </div>
                </div>
                <div>
                    <span className='blue'>최다주행</span>
                    <span>모드</span>
                </div>
                <span className='big'>통합</span>
            </ChartContainer> 
            */}
        </Container>
    );
};

export default TotalRecord;

const Container = styled.div`
    width: 100%;
    background: solid #333 1px;
`;

const Title = styled.div`
    display: block;
    width: 100%;
    .blue {
        color: blue;
    }
`;

const ChartContainer = styled.div`
    .pieChart {
        display:inline-block
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: 0.3s;
        background: conic-gradient(#0088FE 100deg, #fff 260deg );
        border:1px solid red;
        
    }
    .percent {
        display:inline-block
        position: absolute;
        transform: translate(10px, 10px);
        width: 80px;
        height: 80px;
        text-align:center; line-height: 80px;
        background: none;
        border-radius: 50%;
        border: solid 1px blue;
    }
`;
