import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';
import DashBoard from '../components/DashBoard';
import CheerComment from '../components/CheerComment';
import MatchBanner from '../components/MatchBanner';

const Home = () => {
    const [accessData, setAccessData] = useState('');
    let nickname = 'BBEESSTT';

    // 닉네임 검색을 이용한 accessId 가져오기
    const getUserId = (nickname) => {
        axios
            .get(
                `https://api.nexon.co.kr/kart/v1.0/users/nickname/${nickname}`,
                {
                    headers: {
                        Authorization: process.env.REACT_APP_NEXON_KEY,
                    },
                }
            )
            .then((res) => {
                setAccessData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUserId(nickname);
    }, []);

    return (
        <Container>
            <Profile accessData={accessData} />
            <h1>전적조회페이지</h1>
            <Flex>
                <DashBoard />
                <CheerComment />
            </Flex>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    width: 1080px;
    margin: 0 auto;
`;

const Flex = styled.div`
    display: flex;
`;
