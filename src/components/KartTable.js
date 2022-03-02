import { useEffect, useState } from "react";
import styled from "styled-components";
import kartName from "../data/kart.json";

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
const KartTable = ({ kartData, selectCartId, setSelectCartId }) => {
  const onChange = (kartId) => {
    setSelectCartId(kartId);
  };

  return (
    <Warraper>
      <TrackTable>
        <TableThead>
          <TableTh>선택</TableTh>
          <TableTh>카트</TableTh>
          <TableTh>횟수</TableTh>
          <TableTh>승률</TableTh>
          <TableTh>리타율</TableTh>
        </TableThead>
        {kartData ? (
          <TableBody>
            {kartData.map((kart) => (
              <TableTr key={kart[0]} active={kart[0] === selectCartId}>
                <TableTd>
                  <input
                    onChange={() => onChange(kart[0])}
                    type="radio"
                    checked={kart[0] === selectCartId}
                  ></input>
                </TableTd>
                <TableTd style={{ textAlign: "left", paddingLeft: "10px" }}>
                  <img
                    style={{
                      height: "27px",
                      marginRight: "10px",
                      verticalAlign: "middle",
                    }}
                    src={`${process.env.PUBLIC_URL}/metadata/kart/${kart[0]}.png`}
                  ></img>
                  {kartName.map((name) => {
                    if (name.id === kart[0]) return name.name;
                  })}
                </TableTd>
                <TableTd>{kart[1].count - kart[1].retired}</TableTd>
                <TableTd>
                  {kart[1].win
                    ? Math.floor(
                        (kart[1].win / (kart[1].count - kart[1].retired)) * 100
                      ) + "%"
                    : "-"}
                </TableTd>
                <TableTd>
                  {kart[1].win
                    ? Math.floor((kart[1].retired / kart[1].count) * 100) + "%"
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

export default KartTable;
