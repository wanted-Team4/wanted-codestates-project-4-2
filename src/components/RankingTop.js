import RankingTopBox from "./RankingTopBox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  float: left;
`;

const RankingTop = () => {
  return (
    <Container>
      <RankingTopBox img="https://tmi.nexon.com/img/assets/icon_goldmedal.png" />
      <RankingTopBox img="https://tmi.nexon.com/img/assets/icon_silvermedal.png" />
      <RankingTopBox img="https://tmi.nexon.com/img/assets/icon_bronzemedal.png" />
    </Container>
  );
};

export default RankingTop;
