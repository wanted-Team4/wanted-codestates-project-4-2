import React from "react";
import styled from "styled-components";

const RankingEtc = () => {
  const data = [
    { id: 1, rank: "1", nink: "b", pts: "1", dri: "1", rankAvg: "4" },
    { id: 2, rank: "2", nink: "c", pts: "1", dri: "1", rankAvg: "4" },
    { id: 3, rank: "3", nink: "d", pts: "1", dri: "1", rankAvg: "4" },
    { id: 4, rank: "4", nink: "v", pts: "1", dri: "1", rankAvg: "4" },
    { id: 5, rank: "5", nink: "n", pts: "1", dri: "1", rankAvg: "4" },
    { id: 6, rank: "6", nink: "e", pts: "1", dri: "1", rankAvg: "4" },
    { id: 7, rank: "7", nink: "q", pts: "1", dri: "1", rankAvg: "4" },
    { id: 8, rank: "8", nink: "t", pts: "1", dri: "1", rankAvg: "4" },
    { id: 9, rank: "9", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
  ];

  //4위부터 뿌려줄 컴포넌트 데이터
  const filterData = data.filter(
    (item) => item.id !== 1 && item.id !== 2 && item.id !== 3
  );

  const rankData = filterData.map((item) => {
    return (
      <EtcSub key={item.id}>
        <EtcContents>
          <EtcRank>{item.rank}</EtcRank>
          <EtcNick>{item.nink}</EtcNick>
          <EtcPts>{item.pts}포인트</EtcPts>
          <EtcDriving>{item.dri}횟수</EtcDriving>
          <EtcSpanRank>{item.rankAvg}순위</EtcSpanRank>
        </EtcContents>
      </EtcSub>
    );
  });

  return (
    <EtcMian>
      <EtcSub>
        <EtcNavContents>
          <EtcRank>#</EtcRank>
          <EtcNick>닉네임(순위변동)</EtcNick>
          <EtcPts>누적포인트 (전일대비)</EtcPts>
          <EtcDriving>주행횟수</EtcDriving>
          <EtcSpanRank>평균순위</EtcSpanRank>
        </EtcNavContents>
      </EtcSub>
      {rankData}
    </EtcMian>
  );
};

const EtcMian = styled.ul`
  // 전체를 감싸는 ul
  list-style: none;
`;
const EtcSub = styled.li`
  //  ul안에 바로 li 태그
`;
const EtcNavContents = styled.div`
  // li 안에 div li안에 고정태그
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  color: blue;
  font-weight: 500;
  font-size: 12px;
  border: 1px solid #f2f2f2;
`;
const EtcContents = styled.div`
  // li안에 div 태그
  margin-bottom: 10px;
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;

// div 안에 span 태그 모음
const EtcRank = styled.span``;
const EtcNick = styled.span`
  position: absolute;
  left: 220px;
`;
const EtcPts = styled.span`
  display: inline-block;

  position: absolute;
  right: 260px;
`;
const EtcDriving = styled.span`
  position: absolute;
  right: 140px;
`;
const EtcSpanRank = styled.span`
  position: absolute;
  right: 60px;
`;

export default RankingEtc;
