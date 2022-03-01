import React from 'react';
import styled from 'styled-components';
import TotalRecord from './DashBoard/TotalRecord';
import RankChangeTrend from './DashBoard/RankChangeTrend';

const DashBoard = () => {
    return (
        <Container>
            <TotalRecord />
            <RankChangeTrend />
        </Container>
    );
};

export default DashBoard;

const Container = styled.div`
    display: flex;
    justify-contents: space-between;
`;
