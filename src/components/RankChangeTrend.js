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

const RankChangeTrend = ({ data }) => {
    //전적데이터
    const total = data.length;
    const recentData = [...data.slice(0, 50)];
    const totalRankSum = data.reduce((sum, cur) => {
        return sum + cur.player.matchRank;
    }, 0);
    const recentRankSum = recentData.reduce((sum, cur) => {
        return sum + cur.player.matchRank;
    }, 0);
    let totalRank = String(totalRankSum / 200).slice(0, 4);
    const recentRank = String(recentRankSum / 50).slice(0, 4);

    // chart 더미 데이터
    const chartDummyData = [
        { rank: 8 },
        { rank: 7 },
        { rank: 5 },
        { rank: 3 },
        { rank: 1 },
        { rank: 8 },
        { rank: 8 },
        { rank: 8 },
        { rank: 8 },
        { rank: 8 },
    ];

    let chartArr = [];
    for (let i = 0; i < 20; i++) {
        // chartArr.push({ rank: data[i].player.matchRank });
        // chartArr = data[i].player.matchRank;
        return chartArr;
    }
    // console.log(chartArr);

    console.log('>>', chartArr);
    //data를 아래처럼 가공해서 array에 넣어준다.
    //이런 형식으로 어떻게 가공하지
    // let rank = data.map((item) => item.player.matchRank);
    // const testRank = data.map((dataItem, i) => dataItem[i].player.matchRank);
    // const chartData = [{ rank: testRank }];
    // console.log(testRound);

    return (
        <Container>
            <TextContents>
                <div>
                    <span className="blue">순위변동</span>
                    &nbsp;
                    <span>추이</span>
                </div>
                <span className="small">
                    지난 {total}경기 {totalRank}위 &nbsp; 최근50경기{' '}
                    {recentRank}위
                </span>
            </TextContents>
            <ChartContents>
                <LineChart
                    width={300}
                    height={200}
                    data={chartDummyData}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="round" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="rank"
                        stroke="#0088fe"
                        fill="#0088fe"
                    />
                </LineChart>
            </ChartContents>
        </Container>
    );
};

export default RankChangeTrend;

const Container = styled.div`
    width: 360px;
    padding: 0 10px;
    box-sizing: border-box;
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
