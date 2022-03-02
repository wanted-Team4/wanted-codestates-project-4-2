import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Data } from "../atoms";
import axios from "axios";
import Profile from "../components/Profile";
import RecordCard from "../components/RecordCard";
import TotalRecord from "../components/TotalRecord";
import RankChangeTrend from "../components/RankChangeTrend";
import CheerComment from "../components/CheerComment";
import MatchBanner from "../components/MatchBanner";
import Left from "../components/Left";

const MainContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding-top: 10px;
`;
const DataInfo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #1f334a;
`;
const Text = styled.p`
  margin-top: 3px;
  font-size: 12px;
  margin-left: 5px;
  font-weight: 400;
`;
const Info = styled.div`
  display: flex;
`;
const LeftBox = styled.div`
  height: 550px;
  flex: 1;
`;
const RecordBox = styled.div`
  flex: 2;
`;
const Flex = styled.div`
  display: flex;
`;

const Home = () => {
    const [accessData, setAccessData] = useState();
    const [data, setIsData] = useState();
    let nickname = "BBEESSTT";

    // 닉네임 검색을 이용한 accessId 가져오기
    const getUserId = (nickname) => {
        axios
            .get(`https://api.nexon.co.kr/kart/v1.0/users/nickname/${nickname}`, {
                headers: {
                    Authorization: process.env.REACT_APP_NEXON_KEY,
                },
            })
            .then((res) => {
                setAccessData(res.data);
                getMatchData(res.data.accessId);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getMatchData = (accessId) => {
        axios
            .get(
                `https://api.nexon.co.kr/kart/v1.0/users/${accessId}/matches?start_date=&end_date=&offset=0&limit=200&match_types=`,
                {
                    headers: {
                        Authorization: process.env.REACT_APP_NEXON_KEY,
                    },
                }
            )
            .then((res) => {
                setIsData(res.data.matches[0].matches);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUserId(nickname);
    }, []);

    return (
        <MainContainer>
            <DataInfo>
                <i className="fa-solid fa-circle-info"></i>
                <Text>
                    {" "}
                    카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
                </Text>
            </DataInfo>

            {data && accessData ? (
                <>
                    <Profile accessData={accessData} data={data} />
                    <MatchBanner />
                    <Flex>
                        <TotalRecord data={data} />
                        <RankChangeTrend data={data} />
                        <CheerComment />
                    </Flex>
                    <Info>
                        <LeftBox>
                            <Left matchData={data}></Left>
                        </LeftBox>
                        <RecordBox>
                            {data.map((data, idx) => (
                                <RecordCard key={idx} data={data} />
                            ))}
                        </RecordBox>
                    </Info>
                </>
            ) : null}
        </MainContainer>
    );
};

export default Home;
