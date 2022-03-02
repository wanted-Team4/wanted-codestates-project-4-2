import { useEffect, useState } from "react";
import styled from "styled-components";
import trackName from "../data/track.json";

const Warraper = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Thumnail = styled.div`
  position: relative;
  flex: 4;
  text-align: center;
  line-height: 135px;
  border-right: 1px solid #ccc;
`;

const Record = styled.div`
  flex: 6;
`;

const RecordLi = styled.li`
  position: relative;
  height: 33px;
  line-height: 33px;
  text-align: left;
  padding-left: 10px;
`;

const Kart = ({ selectCartId, kartData }) => {
  const [data, setData] = useState();

  const matchTimeTimeExtractor = (matchTime) => {
    const min = String(parseInt(matchTime / 1000 / 60)); // 분을 구한다.

    const secondDot = String(
      Math.round(((matchTime / 1000) % 60) * 100) / 100 // 초와 소숫점 뒤 두자리까지 구한다.
    ).split(".");
    if (secondDot[0].length === 1) {
      // 한자리숫자일경우 앞에 0을 추가해준다.
      secondDot[0] = "0".concat(secondDot[0]);
    }
    if (secondDot[1] && secondDot[1].length === 1) {
      secondDot[1] = secondDot[1].concat("0"); // 한자리 숫자일경우 뒤에 0을 추가한다.
    }
    if (!secondDot[1] && secondDot[0]) {
      secondDot[1] = "00"; // 0일 경우
    }
    secondDot.unshift(min); // 배열에 분을 추가하고,
    return secondDot.join("'"); // 조인을 통해 기록시간 형태로 만들어준다.
  };

  useEffect(() => {
    setData();
    if (kartData) {
      setData(
        makeData(
          kartData
            .filter((kart) => kart[0] === selectCartId)[0][1]
            .trackRecord.sort(function (a, b) {
              return a.trackId < b.trackId ? -1 : a.trackId > b.trackId ? 1 : 0;
            })
            .filter((record) => record.record !== 0)
        )
      );
    }
  }, [selectCartId]);

  const makeData = (Record) => {
    let count = 0;
    let prevId = Record[0].trackId;
    let Data = [
      {
        trackId: Record[0].trackId,
        record: Record[0].record,
      },
    ];

    Record.map((record) => {
      if (record.trackId !== prevId) {
        prevId = record.trackId;
        count += 1;
        Data = [...Data, { trackId: record.trackId, record: record.record }];
      }
    });

    return Data;
  };

  return (
    <Warraper>
      <Thumnail>
        <img
          style={{
            height: "70px",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
          src={`${process.env.PUBLIC_URL}/metadata/kart/${selectCartId}.png`}
        ></img>
      </Thumnail>
      <Record>
        <ul>
          {kartData ? (
            <>
              {makeData(
                kartData
                  .filter((kart) => kart[0] === selectCartId)[0][1]
                  .trackRecord.sort(function (a, b) {
                    return a.trackId < b.trackId
                      ? -1
                      : a.trackId > b.trackId
                      ? 1
                      : 0;
                  })
                  .filter((record) => record.record !== 0)
              )
                .sort(function (a, b) {
                  return a.record < b.record ? -1 : a.record > b.record ? 1 : 0;
                })
                .splice(0, 4)
                .map((track) => {
                  return (
                    <RecordLi key={track.trackId}>
                      <img
                        style={{
                          height: "27px",
                          verticalAlign: "middle",
                        }}
                        src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/unknown_1.png"
                      />
                      <span
                        style={{
                          verticalAlign: "middle",
                          marginLeft: "5px",
                          fontSize: "9px",
                        }}
                      >
                        {trackName.map((name) => {
                          if (name.id === track.trackId)
                            return name.name.slice(0, 10);
                        })}
                      </span>
                      <span
                        style={{
                          verticalAlign: "middle",
                          marginLeft: "5px",
                          fontSize: "9px",
                        }}
                      >
                        {matchTimeTimeExtractor(track.record)}
                      </span>
                    </RecordLi>
                  );
                })}
            </>
          ) : null}
        </ul>
      </Record>
    </Warraper>
  );
};
export default Kart;
