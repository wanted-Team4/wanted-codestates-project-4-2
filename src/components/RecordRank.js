import { useEffect } from 'react';
import styled from 'styled-components';

const DetailsLi = styled.li`
    float: left;
    width: 73.77px;
    text-align: center;
`
const Rank = styled.p`
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
`
const Kart = styled.div`
    height: 78px;
    line-height: 78px;
`
const KartImg = styled.img`
    height: 35px;
    vertical-align: middle;
`
const User = styled.p`
    height: 17px;
    line-height: 17px;
`
const Time = styled.p`
    height: 42px;
    line-height: 42px;
`

const RecordRank = ({ data, idx }) => {
    const { matchRank, characterName, matchTime } = data

    const addComma = (matchTime) => {
        return matchTime.replace(/\B(?<!\.\d*)(?=(\d{2})+(?!\d))/g, "'")
    }

    useEffect(() => {
        addComma(matchTime)
    }, [])

    return (
        <DetailsLi>
            <Rank>{!matchTime ? '리타이어' : matchRank}</Rank>
            <Kart>
                {/* <KartImg src={data.kart} /> */}
            </Kart>
            <User>{characterName}</User>
            <Time>{matchTime ? addComma(matchTime) : '-'}</Time>
        </DetailsLi>
    );
}

export default RecordRank;