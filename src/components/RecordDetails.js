import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import RecordRank from "./RecordRank";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 177px;
  margin-top: -5px;
  margin-bottom: 5px;
  border-width: 1px 1px 1px 1px;
  border-color: #f2f2f2;
  border-style: solid;
  color: #1f334a;
  margin-left: 10px;
`;
const DetailsUl = styled.ul`
  width: 100%;
  list-style: none;
  color: #1f334a;
  font-size: 12px;
  font-weight: 400;
`;
const DetailsLi = styled.li`
  float: left;
  width: 73.11111px;
  text-align: center;
`;
const Rank = styled.p`
  height: 40px;
  line-height: 40px;
  background-color: #f2f2f2;
`;
const Kart = styled.p`
  height: 78px;
  line-height: 78px;
`;
const User = styled.p`
  height: 17px;
  line-height: 17px;
`;
const Time = styled.p`
  height: 42px;
  line-height: 42px;
`;

const RecordDetails = ({ matchId }) => {
  const [players, setPlayers] = useState([]);
  console.log();

  const getPlayersData = (matchId) => {
    axios
      .get(`https://api.nexon.co.kr/kart/v1.0/matches/${matchId}`, {
        headers: {
          Authorization: process.env.REACT_APP_NEXON_KEY,
        },
      })
      .then((res) => {
        setPlayers(res.data.players);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const compareRank = (a, b) => {
    if (a.matchRank < b.matchRank) {
      return -1;
    }
    if (a.matchRank > b.matchRank) {
      return 1;
    }
    return 0;
  };

  players.sort(compareRank);

  useEffect(() => {
    getPlayersData(matchId);
  }, []);

  return (
    <Container>
      <DetailsUl>
        <DetailsLi>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Time>기록</Time>
        </DetailsLi>
        {players.map((data, idx) => (
          <RecordRank key={idx} data={data} />
        ))}
      </DetailsUl>
    </Container>
  );
};

export default RecordDetails;
