import { useState, useEffect } from 'react';
import styled from 'styled-components';
import RecordDetails from './RecordDetails';
import trackData from "../data/track.json";
import kartData from "../data/kart.json";

const Container = styled.div`
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: table;
    margin-bottom: 5px;
    width: 100%;
    height: 88px;
    font-size: 16px;
    background-color: #fff;
    border-width: 1px 1px 1px 4px;
    border-color: #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;
    border-style: solid;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.blue{
        background-color: rgba(0,119,255,.05);
        border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
    }
    &.red{
        background-color: rgba(246,36,89,.05);
        border-color: #f2f2f2 #f2f2f2 #f2f2f2 #f62459;
    }
`
const DayTime = styled.p`
    color: #1f334a;
    font-size: 12px;
    font-weight: 500;
    padding: 0 15px;
`
const Result = styled.div`
    display: flex;
    align-items: end;
    width: 140px;
    font-style: italic;
`
const UserRate = styled.p`
    font-size: 30px;
    font-weight: 500;
    color: #1f334a;
    opacity: .5;
    &.blue{
        color: #07f;
        opacity: 1;
    }
    &.red{
        color: #f62459;
        opacity: 1;
    }
`
const Total = styled.p`
    font-size: 16px;
    margin-left: 5px;
    font-weight: 500;
    margin-bottom: 4px;
    opacity: .5;
    &.blue{
        color: #07f;
        opacity: 1;
    }
`
const Track = styled.p`
    width: 160px;
    color: #1f334a;
    font-weight: 400;
    text-align: center;
`
const Kart = styled.div`
    color: #1f334a;
    font-weight: 400;
    text-align: center;
    width: 140px;
`
const Time = styled.p`
    color: #1f334a;
    font-weight: 800;
    text-align: center;
    width: 100px;
`
const ToggleBtn = styled.button`
    height: 100%;
    padding: 0 11px;
    line-height: 87px;
    font-weight: 400;
    text-align: center;
    border: none;
    border-left: 1px solid #ebebeb;
    background-color: #fff;
    color: #a1a1a1;
    font-size: 16px;
    &.blue{
        opacity: .3;
        background-color: rgba(0,119,255,.05);
        border-left: 1px solid #B2B1B9;
        color: #444444;
    }
    &.blue:hover{
        background-color: rgba(0,119,255,.05);
        opacity: 1;
        border-left: 1px solid #ebebeb;
    }
    &.red{
        opacity: .3;
        background-color: rgba(246,36,89,.05);
        border-left: 1px solid #B2B1B9;
        color: #444444;
    }
    &.red:hover{
        background-color: rgba(246,36,89,.07);
        opacity: 1;
        border-left: 1px solid #ebebeb;
    }
    :hover {
        background: #ebebeb;
    }
`

const RecordCard = ({ data }) => {
    console.log(data)
    const { endTime, playerCount, player, trackId, matchId } = data
    const [openList, setOpenList] = useState(false);

    const recordListHandler = () => {
        setOpenList(!openList)
    }

    const matchKart = kartData.filter((el) => el.id === player.kart && el.name)
    const matchTrack = trackData.filter((el) => el.id === trackId && el.name)

    const timeForToday = (time) => {
        const today = new Date();
        const timeValue = new Date(time);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 60) {
            return `${betweenTime}분 전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간 전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일 전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년 전`;
    }

    const addComma = (countTime) => {
        return countTime.replace(/\B(?<!\.\d*)(?=(\d{2})+(?!\d))/g, "'")
    }

    useEffect(() => {
        timeForToday(endTime)
        addComma(player.matchTime)
    }, [])

    return (
        <>
            {player.matchTime === '' ? (
                <>
                    <Container className="red">
                        <DayTime>{timeForToday(endTime)}</DayTime>
                        <Result>
                            <UserRate className="red">#리타이어</UserRate>
                        </Result>
                        <Track>{matchTrack[0].name}</Track>
                        <Kart>{matchKart[0].name}</Kart>
                        <Time>{player.matchTime ? addComma(player.matchTime) : '-'}</Time>
                        <ToggleBtn
                            className="red"
                            onClick={recordListHandler}><i className="fa-solid fa-caret-down"></i></ToggleBtn>
                    </Container>
                </>) :
                (<Container className={`${player.matchRank}` === '1' ? "blue" : null}>
                    <DayTime>{timeForToday(endTime)}</DayTime>
                    <Result>
                        <UserRate className={`${player.matchRank}` === '1' ? "blue" : null}>#{player.matchRank}</UserRate>
                        <Total className={`${player.matchRank}` === '1' ? "blue" : null}>/{playerCount}</Total>
                    </Result>
                    <Track>{matchTrack[0].name}</Track>
                    <Kart>{matchKart[0].name}</Kart>
                    <Time>{player.matchTime ? addComma(player.matchTime) : '-'}</Time>
                    <ToggleBtn
                        className={`${player.matchRank}` === '1' ? "blue" : null}
                        onClick={recordListHandler}><i className="fa-solid fa-caret-down"></i></ToggleBtn>
                </Container>
                )}
            {openList ? (
                <RecordDetails matchId={matchId} />) : null}
        </>
    );
}

export default RecordCard;