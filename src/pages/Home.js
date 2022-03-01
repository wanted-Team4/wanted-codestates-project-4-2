import React from 'react';
import styled from 'styled-components';
import DashBoard from '../components/DashBoard';
import CheerComment from '../components/CheerComment';

const Home = () => {
    return (
        <Container>
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
