import RankingTopBox from "./RankingTopBox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
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
