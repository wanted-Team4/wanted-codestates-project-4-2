import { useEffect } from "react";
import styled from "styled-components";

const DetailsLi = styled.li`
  float: left;
  width: 80.6px;
  text-align: center;
`;
const CheckUser = styled.div`
  //     width: 73.78px;
  //     font-weight: 500;
  //     background-color: #e6e8eb;
  //     z-index: 2;
`;
const Rank = styled.p`
  height: 40px;
  line-height: 40px;
  background-color: #f2f2f2;
  /* z-index: 1; */
  &.red {
    color: #f62459;
  }
`;
const Kart = styled.div`
  height: 78px;
  line-height: 78px;
`;
const KartImg = styled.img`
  height: 35px;
  vertical-align: middle;
`;
const User = styled.p`
  height: 17px;
  line-height: 17px;
`;
const Time = styled.p`
  height: 42px;
  line-height: 42px;
`;

const RecordRank = ({ data, idx }) => {
  const { matchRank, characterName, matchTime, kart } = data;

  const addComma = (matchTime) => {
    return matchTime.replace(/\B(?<!\.\d*)(?=(\d{2})+(?!\d))/g, "'");
  };

  useEffect(() => {
    addComma(matchTime);
  }, []);

  return (
    <DetailsLi>
      <CheckUser>
        <Rank className={`${matchTime}` ? null : "red"}>
          {matchRank === "99" ? "리타이어" : matchRank}
        </Rank>
        <Kart>
          {kart ? (
            <KartImg src={`/metadata/kart/${kart}.png`} />
          ) : (
            <KartImg src="/img/empty_kart.png" />
          )}
        </Kart>
        <User>{characterName}</User>
        <Time>{matchTime ? addComma(matchTime) : "-"}</Time>
      </CheckUser>
    </DetailsLi>
  );
};

export default RecordRank;
