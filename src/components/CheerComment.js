import React, { useState } from "react";
import styled from "styled-components";

//더미데이터
const commentList = [
  { nickname: "test", contents: "길게길게길게", date: "22-03.02" },
  { nickname: "test", contents: "123", date: "22-03-01" },
];
let newCommentList = [...commentList];

//오늘날짜
let today = new Date();
today = today.toISOString().slice(0, 10);

//응원코멘트 스크롤 최신부분으로 자동이동
// let scrollComment = document.querySelector(".commentBoard");
// scrollComment.scrollTop = scrollComment.scrollHeight;

const CheerComment = () => {
  //응원코멘트 상태
  //onChange 이벤트와 e.target.value를 통해 댓글과 닉네임을 input창에 입력할떄 상태값을 변경시켜주기
  const [nickname, setNickname] = useState("");
  const [contents, setContents] = useState("");
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClick = () => {
    newCommentList.push({ nickname, contents, date: today });
    console.log(newCommentList);
    setNickname("");
    setContents("");
  };

  return (
    <Container>
      <TextContent>
        <div>
          <span className="blue">응원</span>
          <span>한마디</span>
        </div>
        <div>
          <span>오늘</span>
          {newCommentList.filter((comment) => comment.date === today).length}명
          &nbsp;
          <span>전체</span>
          {newCommentList.length}개
        </div>
      </TextContent>

      <CommentBox>
        <div className="commentBoardBox">
          {newCommentList.map((el, i) => (
            <div className="commentBoard" key={i}>
              <div className="blue">{el.nickname}</div>
              <div className="bubble">{el.contents}</div>
              {/* 코멘트를 보여줍니다. 닉네임 : 내용 */}
            </div>
          ))}
        </div>
        <div className="commentWrite">
          <input
            className="nick"
            type="text"
            placeholder="닉네임"
            onChange={onChangeNickname}
            value={nickname}
          />
          <input
            className="contents"
            type="text"
            placeholder="최대 30자"
            maxLength={30}
            onChange={onChangeContents}
            value={contents}
          />
          <button onClick={() => onClick()}>남기기</button>
          {/* 닉네임 입력 인풋 */}
          {/* 최대 30자 입력 인풋 */}
          {/* 남기기 버튼 */}
        </div>
      </CommentBox>
    </Container>
  );
};

export default CheerComment;

const Container = styled.div`
  width: 360px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const TextContent = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: boarder-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 15px;
  font-weight: 500;

  .blue {
    color: #0088fe;
    font-size: 15px;
    font-weight: 500;
  }
  .small {
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .big {
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

const CommentBox = styled.div`
    width: 100%;
    border-top: 1px solid #999;
    box-sizing: board-box;
    
    .commentBoardBox{
        height:130px;
        overflow:auto;
    

    .commentBoard {
        display: flex;
        padding: 10px;
        box-sizing: board-box;
    

        .blue {
            width:25%;
            color: #0088fe;
            font-weight: 500;
            margin-right:10px;
            text-align:center;

        }
        .bubble {
            width:75%
            flex-grow: 3;
        }
    }
  }

    .commentWrite {
        display: flex;
        padding: 10px;
        box-sizing: board-box;

        input {
            padding: 5px;
            border: none;
            border-bottom: 1px solid #999;
            margin-right: 10px;
        }
        .nick {
            width: 25%;
        }
        .contents {
            width: 50%;
        }
        button {
            width: 25%;
            border:none;
            background:#bbb;
            color:#fff;
            border-radius:5px;
        }
    }
`;
