import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Data } from "../atoms";
import Selector from "./common/Selector";
import ShareModal from "./common/ShareModal";
import ReportModal from "./common/ReportModal";

const ProfileContainer = styled.div`
  height: 175px;
  width: 1100px;
  border-width: 1px 1px 1px 5px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  background-image: url("/img/background.png");
  background-color: rgba(0, 0, 0, 0.025);
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;
const Info = styled.div``;
const AvatarImageBox = styled.img`
  height: 120px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
`;
const Name = styled.p`
  display: inline-block;
  font-size: 45px;
  font-weight: bold;
  color: #1f334a;
  margin-right: 5px;
`;
const License = styled.p`
  font-size: 20px;
  font-weight: 800;
  margin-left: 10px;
  color: #07f;
  padding-bottom: 10px;
`;
const LinkBox = styled.div`
  display: flex;
  align-items: center;
`;

const UserAction = styled.div`
  margin-left: 20px;
  line-height: 25px;
`;
const RerenderBtn = styled.button`
  background-color: #ffffff;
  border-radius: 20px;
  width: 80px;
  height: 25px;
  margin-right: 10px;
  border: 1px solid #1f334a;
  color: #1f334a;
  font-size: 12px;
  vertical-align: middle;
  cursor: pointer;
`;
const ReportBtn = styled.button`
  background-color: #ffffff;
  border-radius: 20px;
  width: 80px;
  height: 25px;
  margin-right: 10px;
  border: 1px solid #1f334a;
  color: #1f334a;
  font-size: 12px;
  vertical-align: middle;
  cursor: pointer;
`;
const ShareBtn = styled.button`
  background-color: #ffffff;
  border-radius: 20px;
  width: 80px;
  height: 25px;
  border: 1px solid #1f334a;
  color: #1f334a;
  font-size: 12px;
  vertical-align: middle;
  cursor: pointer;
`;
const ViewBox = styled.div`
  margin: 0 40px;
  color: #6c7a89;
`;
const ViveTitle = styled.div``;
const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
const ViewCount = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`;

const Profile = ({ accessData }) => {
  const { accessId, name, level } = accessData;
  const [isCharacter, setIsCharacter] = useState("");
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);

  const shareModalHandler = () => {
    setOpenShareModal(!openShareModal);
  };

  const reportModalHandler = () => {
    setOpenReportModal(!openReportModal);
  };

  const characterImg = `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${isCharacter}.png`;

  return (
    <ProfileContainer>
      <InfoBox>
        <AvatarImageBox src={characterImg} />
        <Info>
          <UserInfo>
            <Name>{name}</Name>
            <License>Level {level}</License>
          </UserInfo>
          <LinkBox>
            <Selector />
            <UserAction>
              <RerenderBtn>
                <i className="fa-solid fa-rotate-right"></i> 전적갱신
              </RerenderBtn>
              <ReportBtn onClick={reportModalHandler}>
                <i className="fa-solid fa-bell"></i> 신고하기
              </ReportBtn>
              {openReportModal ? (
                <ReportModal reportModalHandler={reportModalHandler} />
              ) : null}
              <ShareBtn onClick={shareModalHandler}>
                <i className="fa-solid fa-share-nodes"></i> 공유하기
              </ShareBtn>
              {openShareModal ? (
                <ShareModal shareModalHandler={shareModalHandler} />
              ) : null}
            </UserAction>
          </LinkBox>
        </Info>
      </InfoBox>
      <ViewBox>
        <ViveTitle>
          <Title>
            <i className="fa-solid fa-eye"></i> 페이지뷰
          </Title>
        </ViveTitle>
        <ViewCount>920</ViewCount>
      </ViewBox>
    </ProfileContainer>
  );
};

export default Profile;
