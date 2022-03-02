import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const RankingEtc = () => {
  const data = [
    {
      id: 1,
      rank: "1",
      nink: "ㅇ",
      pts: "1",
      dri: "1",
      rankAvg: "4",
    },
    { id: 2, rank: "2", nink: "넥슨조아요", pts: "1", dri: "1", rankAvg: "4" },
    { id: 3, rank: "3", nink: "넥슨싫어요", pts: "1", dri: "1", rankAvg: "4" },
    { id: 4, rank: "4", nink: "기업과제", pts: "1", dri: "1", rankAvg: "4" },
    {
      id: 5,
      rank: "5",
      nink: "베이비컬렉션",
      pts: "1",
      dri: "1",
      rankAvg: "4",
    },
    { id: 6, rank: "6", nink: "e", pts: "1", dri: "1", rankAvg: "4" },
    { id: 7, rank: "7", nink: "q", pts: "1", dri: "1", rankAvg: "4" },
    { id: 8, rank: "8", nink: "t", pts: "1", dri: "1", rankAvg: "4" },
    { id: 9, rank: "9", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 10, rank: "10", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 11, rank: "11", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 12, rank: "12", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 13, rank: "13", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 14, rank: "14", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 15, rank: "15", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 16, rank: "16", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 17, rank: "17", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 18, rank: "18", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 19, rank: "19", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 20, rank: "20", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 21, rank: "21", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 22, rank: "22", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 23, rank: "23", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 24, rank: "24", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 25, rank: "25", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 26, rank: "26", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 27, rank: "27", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 28, rank: "28", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 29, rank: "29", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 30, rank: "30", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 31, rank: "31", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 32, rank: "32", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
    { id: 33, rank: "33", nink: "y", pts: "1", dri: "1", rankAvg: "4" },
  ];

  //4위부터 뿌려줄 컴포넌트 데이터
  const filterData = data.filter(
    (item) => item.id !== 1 && item.id !== 2 && item.id !== 3
  );
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(filterData.slice(0, 20));

  const rankData = result.map((item) => {
    return (
      <EtcSub key={item.id}>
        <EtcContents>
          <EtcRank>{item.rank}</EtcRank>
          <EtcNick>{item.nink}</EtcNick>
          <EtcPts>{item.pts}PT</EtcPts>
          <EtcDriving>{item.dri}회</EtcDriving>
          <EtcSpanRank>{item.rankAvg}위</EtcSpanRank>
        </EtcContents>
      </EtcSub>
    );
  });

  const _infiniteScroll = useCallback(() => {
    // 스크롤 높이 값
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    // 스크롤 top 값
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    // 화면높이
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight + 5 >= scrollHeight) {
      setItemIndex(itemIndex + 20);
      setResult(
        result.concat(filterData.slice(itemIndex + 20, itemIndex + 40))
      );
    }
  }, [itemIndex, result]);
  useEffect(() => {
    window.addEventListener("scroll", _infiniteScroll, true);
    return () => window.removeEventListener("scroll", _infiniteScroll, true);
  }, [_infiniteScroll]);

  return (
    <EtcMian>
      <EtcSub>
        <EtcNavContents>
          <EtcRank>#</EtcRank>
          <EtcNick>닉네임</EtcNick>
          <EtcPts>누적포인트</EtcPts>
          <EtcDriving>주행</EtcDriving>
          <EtcSpanRank>순위</EtcSpanRank>
        </EtcNavContents>
      </EtcSub>
      {rankData}
    </EtcMian>
  );
};

const EtcMian = styled.ul`
  // 전체를 감싸는 ul
  list-style: none;
  position: relative;
  margin: 0 auto;
  width: 80%;
  /* top: -40px; */
  @media screen and (max-width: 500px) {
    width: 100%;
  }
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
  border: 1px solid #dbd9d9;
  justify-content: space-between;
`;
const EtcContents = styled.div`
  // li안에 div 태그
  margin-bottom: 10px;
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  margin: 10px 0px;
  justify-content: space-between;
  &:hover {
    border: 2px solid #0077ff;
    color: #0077ff;
  }
`;

// div 안에 내용 모음
const EtcRank = styled.div`
  position: absolute;
  left: 6vw;
  width: 10vw;
`;
const EtcNick = styled.div`
  position: absolute;
  left: 20vw;
  width: 30vw;
`;
const EtcPts = styled.div`
  display: inline-block;
  position: absolute;
  right: 10vw;
  width: 28vw;
`;
const EtcDriving = styled.div`
  position: absolute;
  right: 7vw;
  width: 15vw;
`;
const EtcSpanRank = styled.div`
  position: absolute;
  right: 1vw;
  width: 10vw;
`;

export default RankingEtc;
