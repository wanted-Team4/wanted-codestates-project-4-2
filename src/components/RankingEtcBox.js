
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import json from '../data/Rank.json';

const RankingEtc = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(json.slice(0, 20));
  //4위부터 뿌려줄 컴포넌트 데이터
  const filterData = result.filter(
    (item) => item.id !== 1 && item.id !== 2 && item.id !== 3
  );

  const rankData = filterData.map((item) => {
    return (
      <EtcSub key={item.id}>
        <EtcContents>
          <EtcRank>{item.id}</EtcRank>
          <EtcNick>{item.nik}</EtcNick>
          <EtcPts>{item.pt}PT</EtcPts>
          <EtcDriving>{item.Play}회</EtcDriving>
          <EtcSpanRank>{item.Rank}위</EtcSpanRank>
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
      setResult(result.concat(json.slice(itemIndex + 20, itemIndex + 40)));
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
