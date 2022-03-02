import React, { useState } from 'react';
import styled from 'styled-components';

const MatchBanner = () => {
    //modal창 상태제어
    const [toggle, setToggle] = useState(false);

    //매칭상태 검색 인풋 상태관리
    const matchList = [{}, {}];
    let newMatchList = [...matchList];
    const [matchPlayerValue, setMatchPlayerValue] = useState('');
    const onChangeMatchPlayer = (e) => {
        setMatchPlayerValue(e.target.value);
    };
    //매칭상대 검색버튼 누르면 생기는 이벤트
    const searchMatchPlayer = () => {
        newMatchList.push(matchPlayerValue);
        setMatchPlayerValue('');
    };

    //매칭상대 태그버튼 누르면 생기는 이벤트
    const matchPlayerTag = () => {
        //업데이트값을 전역상태관리로 해줘야할듯. 상위매치 하는사람 5명 뿌려주기
        setMatchPlayerValue();
    };

    return (
        <>
            {toggle ? (
                <ModalContainer>
                    <button
                        onClick={() => {
                            setToggle(false);
                        }}
                    >
                        닫기
                    </button>
                    <div>
                        <input
                            className='matchPlayer'
                            placeholder='매칭상대를 입력하세요.'
                            onChange={onChangeMatchPlayer}
                            value={matchPlayerValue}
                        />
                        <button onClick={() => searchMatchPlayer()}>
                            검색
                        </button>
                    </div>
                    <div>
                        {/* map으로 player예시뿌려주기 */}
                        <div
                            className='matchPlayerTag'
                            onClick={() => matchPlayerTag()}
                        >
                            #{'player예시1'}
                        </div>
                    </div>
                </ModalContainer>
            ) : (
                <Container>
                    <p>
                        1대1 매칭 시뮬레이터 - 'BBEESSTT' 와 가상 대결을
                        펼쳐보세요.
                    </p>
                    <button onClick={() => setToggle(true)}>매칭하기</button>
                </Container>
            )}
        </>
    );
};

export default MatchBanner;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;

    .modal {
        z-index:5
        color: black;
        background:pink
    }
`;

const Container = styled.div`
    display: flex;
    width: 1080px;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    animation-name: rainbowBg;
    animation-duration: 5s;
    animation-iteration-count: infinite;

    @keyframes rainbowBg {
        0% {
            background: #6b2aff;
        }
        35% {
            background: #2a89ff;
        }
        70% {
            background: #202082;
        }
        100% {
            background: #6b2aff;
        }
    }

    p {
        color: #fff;
        font-weight: 600;
    }
    button {
        color: #fff;
        background: none;
        font-weight: 400;
        border: solid 1px #fff;
        padding: 6px 15px;
        border-radius: 15px;
        font-size: 0.85em;
        cursor: pointer;
    }
`;
