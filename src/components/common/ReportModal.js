import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.488);
  z-index: 10;
`;
const ModalBox = styled.div`
  width: 350px;
  height: 270px;
  background-color: white;
  padding: 30px 25px;
  border-bottom: 3px solid #07f;
`;
const Title = styled.p`
  font-weight: 600;
  line-height: 20px;
  font-size: 18px;
`;
const TextInfo = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
`;
const TextInput = styled.input`
  margin-top: 20px;
  height: 100px;
  width: 295px;
`;
const ButtonBox = styled.div`
  float: right;
  margin-right: 6px;
  margin-top: 15px;
`;
const Btn = styled.button`
  width: 50px;
  height: 30px;
  font-size: 12px;
  border: 0;
  background-color: #07f;
  color: #fff;
  margin-left: 5px;
  :hover {
    background-color: #004fab;
  }
`;

const ReportModal = ({ reportModalHandler }) => {
  return (
    <ModalContainer>
      <ModalBox>
        <Title>유저신고</Title>
        <TextInfo>해당 유저를 신고하시겠습니까?</TextInfo>
        <TextInfo>신고하시려면 사유를 입력해주세요.</TextInfo>
        <TextInput />
        <ButtonBox>
          <Btn onClick={reportModalHandler}>아니요</Btn>
          <Btn>네</Btn>
        </ButtonBox>
      </ModalBox>
    </ModalContainer>
  );
};

export default ReportModal;
