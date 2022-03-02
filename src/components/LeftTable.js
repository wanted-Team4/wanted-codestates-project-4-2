import { useEffect } from "react";
import styled from "styled-components";
import trackName from "../track.json";

const Warraper = styled.div`
  overflow-y: auto;
  height: 235px;
  text-align: center;
  border-top: 1px solid #f2f2f2;
  font-weight: 400;
`;

const TrackTable = styled.table`
  box-sizing: border-box;
  width: calc(100% - 1px);
  font-size: 13px;
  line-height: 35px;
`;

const TableThead = styled.thead``;
const TableTr = styled.tr`
  box-sizing: border-box;
  border: ${(props) => (props.active ? "1px solid #07f" : "none")};
`;
const TableTd = styled.td`
  box-sizing: border-box;
`;
const TableTh = styled.th``;
const TableBody = styled.tbody``;
const LeftTable = ({ trackData, setSelectTrackId, selectTrackId }) => {
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

  const onChange = (trackId) => {
    setSelectTrackId(trackId);
  };

  return (
    <Warraper>
      <TrackTable>
        <TableThead>
          <TableTh>선택</TableTh>
          <TableTh>트랙</TableTh>
          <TableTh>횟수</TableTh>
          <TableTh>승률</TableTh>
          <TableTh>기록</TableTh>
        </TableThead>
        {trackData ? (
          <TableBody>
            {trackData.map((track) => (
              <TableTr key={track[0]} active={track[0] === selectTrackId}>
                <TableTd>
                  <input
                    onChange={() => onChange(track[0])}
                    type="radio"
                    checked={track[0] === selectTrackId}
                  ></input>
                </TableTd>
                <TableTd style={{ textAlign: "left", paddingLeft: "10px" }}>
                  <img
                    style={{
                      height: "27px",
                      paddingRight: "10px",
                      verticalAlign: "middle",
                    }}
                    src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/unknown_1.png"
                  />
                  {trackName.map((name) => {
                    if (name.id === track[0]) return name.name.slice(0, 10);
                  })}
                </TableTd>
                <TableTd>{track[1].count}</TableTd>
                <TableTd>
                  {track[1].win
                    ? Math.floor((track[1].win / track[1].count) * 100) + "%"
                    : "-"}
                </TableTd>
                <TableTd>
                  {track[1].bestRecord && track[1].bestRecord !== 999999
                    ? matchTimeTimeExtractor(track[1].bestRecord)
                    : "-"}
                </TableTd>
              </TableTr>
            ))}
          </TableBody>
        ) : null}
      </TrackTable>
    </Warraper>
  );
};
export default LeftTable;

/*


*/
