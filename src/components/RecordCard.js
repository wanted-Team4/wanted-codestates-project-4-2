import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil'
import { Data } from "../atoms";
import RecordDetails from './RecordDetails';

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
    opacity: .5;
`
const UserRate = styled.p`
    font-size: 30px;
    font-weight: 500;
    color: #1f334a;
`
const Total = styled.p`
    font-size: 16px;
    margin-left: 5px;
    font-weight: 500;
    margin-bottom: 4px;
`
const Track = styled.p`
    width: 160px;
    color: #1f334a;
    font-weight: 400;
    text-align: center;
`
const Kart = styled.p`
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
    :hover {
        background: #ebebeb;
    }
`

const RecordCard = () => {
    const [openList, setOpenList] = useState(false);
    const data = useRecoilValue(Data);

    const recordListHandler = () => {
        setOpenList(!openList)
    }

    console.log(data)

    return (
        <>
            <Container>
                <DayTime>14시간 전</DayTime>
                <Result>
                    <UserRate>#2</UserRate>
                    <Total>/8</Total>
                </Result>
                <Track>월드 이탈리아 피사의 사탑</Track>
                <Kart>몬스터XLE</Kart>
                <Time>2'13'63</Time>
                <ToggleBtn onClick={recordListHandler}><i className="fa-solid fa-caret-down"></i></ToggleBtn>
            </Container>
            {openList ? (
                <RecordDetails />) : null}
        </>
    );
}

export default RecordCard;