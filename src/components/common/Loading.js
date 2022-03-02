import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const SpinContainer = styled.div`
  position: absolute;
  top: 22em;
  left: 50em;
`;
const Text = styled.p`
  position: absolute;
  font-size: 24px;
  font-weight: 400;
  color: #f62459;
  top: 20em;
  left: 31em;
`;

const Loading = () => {
  return (
    <>
      <SpinContainer>
        <TailSpin color="#f62459" height={90} width={90} />
      </SpinContainer>
      <Text>닉네임을 검색해주세요:D</Text>
    </>
  );
};

export default Loading;
