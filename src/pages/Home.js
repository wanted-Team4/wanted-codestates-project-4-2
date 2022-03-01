import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../components/Profile";
import DashBoard from '../components/DashBoard';

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

    return (
        <>
            <Profile accessData={accessData} />
            <h1>전적조회페이지</h1>
            <DashBoard />
        </>
    );
};

export default Home;
