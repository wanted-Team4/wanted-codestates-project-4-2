import React from 'react';
import styled from 'styled-components';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

// let myLineChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: options,
// });

const RankChangeTrend = () => {
    //전적데이터
    const totalGame = 200;
    const lastGame = 2.37;
    const recentGame = 2.72;
    const ranking = 1;

    const data = [
        { round: 1, rank: 2 },
        { round: 2, rank: 5 },
        { round: 3, rank: 5 },
        { round: 4, rank: 5 },
        { round: 5, rank: 7 },
        { round: 6, rank: 5 },
        { round: 7, rank: 8 },
        { round: 8, rank: 1 },
        { round: 9, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 1, rank: 2 },
        { round: 2, rank: 5 },
        { round: 3, rank: 5 },
        { round: 4, rank: 5 },
        { round: 5, rank: 7 },
        { round: 6, rank: 5 },
        { round: 7, rank: 8 },
        { round: 8, rank: 1 },
        { round: 9, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 1, rank: 2 },
        { round: 2, rank: 5 },
        { round: 3, rank: 5 },
        { round: 4, rank: 5 },
        { round: 5, rank: 7 },
        { round: 6, rank: 5 },
        { round: 7, rank: 8 },
        { round: 8, rank: 1 },
        { round: 9, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
        { round: 10, rank: 1 },
    ];

    return (
        <Container>
            <TextContents>
                <div>
                    <span className='blue'>순위변동</span>
                    &nbsp;
                    <span>추이</span>
                </div>
                <span className='small'>
                    지난 {totalGame} &nbsp; 경기 {lastGame}위 &nbsp; 최근
                    {recentGame}경기 &nbsp;
                    {ranking}위
                </span>
            </TextContents>
            <ChartContents>
                <LineChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='round' />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type='monotone'
                        dataKey='rank'
                        stroke='#0088fe'
                        fill='#0088fe'
                    />
                </LineChart>
            </ChartContents>
        </Container>
    );
};

export default RankChangeTrend;

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
