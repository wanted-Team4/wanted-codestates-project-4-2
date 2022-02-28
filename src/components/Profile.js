import { useState } from "react";
import styled from "styled-components";
import Selector from "./Selector"
import SharePopup from "./SharePopup";

const ProfileContainer = styled.div`
    height: 175px;
    width: 1250px;
    border-width: 1px 1px 1px 5px;
    border-style: solid;
    border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
    margin: 0 auto;
    background-image: url('/img/background.png');
    background-color: rgba(0,0,0,.025);
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const InfoBox = styled.div`
    display: flex;
    align-items: center;
`
const Info = styled.div`
`
const AvatarImageBox = styled.img`
    height: 120px;
`
const UserInfo = styled.div`
    margin-bottom: 20px;
`
const Name = styled.p`
    display: inline-block;
    font-size: 45px;
    font-weight: bold;
    color:#1f334a;
    margin-right: 5px;
`
const License = styled.img`
    width: 30px;

`
const LinkBox = styled.div`
    display: flex;
    align-items: center;
`

const UserAction = styled.div`
    margin-left: 20px;
    line-height: 25px;
`
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
`
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
`
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
`
const ViewBox = styled.div`
    margin: 0 40px;
    color: #6c7a89;
`
const ViveTitle = styled.div`
`
const Title = styled.p`
    font-weight: 400;
    font-size: 14px;
`
const ViewCount = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: 600;
`

const Profile = () => {
    const [openShareModal, setOpenShareModal] = useState(false);

    const modalHandler = () => {
        setOpenShareModal(!openShareModal)
    }

    return (
        <ProfileContainer>
            <InfoBox>
                <AvatarImageBox src='metadata/character/2ecb10f5e23493727a80a91421d6242a18b131f743676e72317bde4bd5d27131.png' />
                <Info>
                    <UserInfo>
                        <Name>BBEESSTT</Name>
                        <License src='logo192.png'></License>
                    </UserInfo>
                    <LinkBox>
                        <Selector />
                        <UserAction>
                            <RerenderBtn>
                                <i className="fa-solid fa-rotate-right"></i> 전적갱신
                            </RerenderBtn>
                            <ReportBtn>
                                <i className="fa-solid fa-bell"></i> 신고하기
                            </ReportBtn>
                            <ShareBtn onClick={modalHandler}>
                                <i className="fa-solid fa-share-nodes"></i> 공유하기
                            </ShareBtn>
                            {openShareModal ? (
                                <SharePopup modalHandler={modalHandler} />) : null}
                        </UserAction>
                    </LinkBox>
                </Info>
            </InfoBox >
            <ViewBox>
                <ViveTitle>
                    <Title><i className="fa-solid fa-eye"></i> 페이지뷰</Title>
                </ViveTitle>
                <ViewCount>920</ViewCount>
            </ViewBox>
        </ProfileContainer >
    );
}

export default Profile;