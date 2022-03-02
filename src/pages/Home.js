import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Profile from "../components/Profile";
import DashBoard from '../components/DashBoard';
import RecordCard from "../components/RecordCard";

const MainContainer = styled.div`
    width: 1000px;
    margin: 0 auto;
    padding-top: 10px;
`
const DataInfo = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #1f334a;
`
const Text = styled.p`
    margin-top: 3px;
    font-size: 12px;
    margin-left: 5px;
    font-weight: 400;
`
const Info = styled.div`
    display: flex;
`
const Dummy = styled.div`
    height: 500px;
    border: 1px solid black;
    flex: 1;
`
const RecordBox = styled.div`
    flex: 2;
`

const Home = () => {
    const [accessData, setAccessData] = useState('');
    let nickname = 'BBEESSTT';

    // 닉네임 검색을 이용한 accessId 가져오기
    const getUserId = (nickname) => {
        axios.get(`https://api.nexon.co.kr/kart/v1.0/users/nickname/${nickname}`,
            {
                headers: {
                    Authorization: process.env.REACT_APP_NEXON_KEY
                }
            })
            .then((res) => {
                setAccessData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getUserId(nickname)
    }, [])

    console.log(accessData)

    return (
        <MainContainer>
            <DataInfo>
                <i className="fa-solid fa-circle-info"></i>
                <Text> 카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다</Text>
            </DataInfo>
            <Profile accessData={accessData} />
            <h1>전적조회페이지</h1>
            <DashBoard />
            <Info>
                <Dummy />
                <RecordBox >
                    <RecordCard />
                </RecordBox>
            </Info>
        </MainContainer>
    );
};

export default Home;
