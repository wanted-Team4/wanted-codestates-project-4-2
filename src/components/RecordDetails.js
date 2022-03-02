import styled from 'styled-components';
import RecordRank from './RecordRank';

const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 177px;
    margin-top: -5px;
    margin-bottom: 5px;
    border-width: 1px 1px 1px 1px;
    border-color: #f2f2f2;
    border-style: solid;
    color: #1f334a;
    margin-left: 10px;
`
const DetailsUl = styled.ul`
    width: 100%;
    list-style: none;
    color: #1f334a;
    font-size: 12px;
    font-weight: 400;
`
const DetailsLi = styled.li`
    float: left;
    width: 73.11111px;
    text-align: center;
`
const Rank = styled.p`
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
`
const Kart = styled.p`
    height: 78px;
    line-height: 78px;
`
const User = styled.p`
    height: 17px;
    line-height: 17px;
`
const Time = styled.p`
    height: 42px;
    line-height: 42px;
`
const dummy = [
    {
        rank: 1,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    },
    {
        rank: 0,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    },
    {
        rank: 3,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    },
    {
        rank: 4,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    },
    {
        rank: 5,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    },
    {
        rank: 6,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    },
    {
        rank: 7,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    },
    {
        rank: 8,
        kart: 'metadata/kart/0000cd7b578ef4817ccf9655e16291eacb7ca9b6a1f6ede97adddd58e3d10c9c.png',
        user: '너무대단해',
        time: "2'12'23"
    }
]

const RecordDetails = () => {
    return (
        <Container>
            <DetailsUl>
                <DetailsLi>
                    <Rank>#</Rank>
                    <Kart>카트</Kart>
                    <User>유저</User>
                    <Time>기록</Time>
                </DetailsLi>
                {
                    dummy.map((data, idx) => (
                        <RecordRank
                            key={idx}
                            data={data}
                        />
                    ))
                }
            </DetailsUl>
        </Container>
    );
}

export default RecordDetails;