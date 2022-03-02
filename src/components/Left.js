import { useEffect, useState } from "react";
import styled from "styled-components";
import Kart from "./Kart";
import KartTable from "./KartTable";
import LeftGraph from "./LeftGraph";
import LeftTable from "./LeftTable";
import kartName from "../kart.json";
import trackName from "../track.json";

const Warraper = styled.div`
  margin-right: 10px;
  color: #1f334a;
`;

const TabButtons = styled.div``;

const Tabs = styled.ul`
  list-style: none;
  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const Tab = styled.li`
  float: left;
`;

const TabContent = styled.div`
  display: inline-block;
  width: 116px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 14px;

  background-color: ${(props) => (props.active ? "#fff" : "#ebebeb;")};
  border-bottom: 2px solid ${(props) => (props.active ? "#07f" : "#ebebeb")};
  color: ${(props) => (props.active ? "#07f;" : "")};
`;

const TabLink = styled.span`
  text-decoration: none;
  cursor: pointer;
`;

const Table = styled.div`
  position: relative;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  width: 330px;
  height: 500px;
`;

const H5 = styled.h5`
  position: relative;
  padding: 0 8px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #1f334a;
  vertical-align: middle;
`;

const Span = styled.span`
  margin-right: 5px;
  font-size: 14px;
  color: #07f;
`;

const P = styled.p`
  position: absolute;
  top: 26px;
  right: 28px;
  font-size: 12px;
  font-weight: 500;
`;

const TopTable = styled.div`
  border-top: 1px solid #ccc;
  margin: 0 25px 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Badge = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #1f334a;
  border-radius: 15px;
  color: #1f334a;
`;
const Left = ({ matchData }) => {
  const [trackData, setTrackData] = useState();
  const [kartData, setKartData] = useState();
  const [tapIndex, setTapIndex] = useState(0);
  const [selectCartId, setSelectCartId] = useState();
  const [selectTrackId, setSelectTrackId] = useState();
  const [winRate, setWinRate] = useState();

  useEffect(() => {}, [selectCartId, selectTrackId]);
  const calcWinRate = () => {
    let count = 0;
    let win = 0;
    trackData.map((track) => {
      count += track[1].count;
      win += Number(track[1].win);
    });
    setWinRate(Math.floor((win / count) * 100));
  };

  const makeTrackData = (matchData) => {
    const trackList = {};

    matchData.forEach((match) => {
      let exist = false;
      if (Object.keys(trackList).length > 0) {
        if (trackList[match.trackId]) {
          exist = true;
        }
      }
      if (exist) {
        trackList[match.trackId] = {
          count: trackList[match.trackId].count + 1,
          retired:
            trackList[match.trackId].retired +
            Number(match.player.matchRetired),
          win: trackList[match.trackId].win + Number(match.player.matchWin),
          rank: Number(match.player.matchRetired)
            ? trackList[match.trackId].rank
            : trackList[match.trackId].rank + Number(match.player.matchRank),
          bestRecord: Number(match.player.matchRetired)
            ? trackList[match.trackId].bestRecord
            : trackList[match.trackId].bestRecord <
              Number(match.player.matchTime)
            ? trackList[match.trackId].bestRecord
            : Number(match.player.matchTime),
          trackRecord: Number(match.player.matchRetired)
            ? [...trackList[match.trackId].trackRecord]
            : [
                ...trackList[match.trackId].trackRecord,
                Number(match.player.matchTime),
              ],
        };
      } else {
        trackList[match.trackId] = {
          count: 1,
          retired: Number(match.player.matchRetired),
          win: Number(match.player.matchWin),
          rank: Number(match.player.matchRetired)
            ? 0
            : Number(match.player.matchRank),
          bestRecord: Number(match.player.matchRetired)
            ? 999999
            : Number(match.player.matchTime),
          trackRecord: Number(match.player.matchRetired)
            ? []
            : [Number(match.player.matchTime)],
        };
      }
    });
    setSelectTrackId(
      Object.entries(trackList).sort((a, b) => b[1].count - a[1].count)[0][0]
    );
    return Object.entries(trackList).sort((a, b) => b[1].count - a[1].count);
  };

  const makeKartData = (matchData) => {
    const kartList = {};
    matchData.forEach((match) => {
      let exist = false;
      if (Object.keys(kartList).length > 0) {
        if (kartList[match.player.kart]) {
          exist = true;
        }
      }
      if (exist) {
        kartList[match.player.kart] = {
          count: kartList[match.player.kart].count + 1,
          retired:
            kartList[match.player.kart].retired +
            Number(match.player.matchRetired),
          win: kartList[match.player.kart].win + Number(match.player.matchWin),
          trackRecord: Number(match.player.matchRetired)
            ? [...kartList[match.player.kart].trackRecord]
            : [
                ...kartList[match.player.kart].trackRecord,
                {
                  trackId: match.trackId,
                  record: Number(match.player.matchTime),
                },
              ],
        };
      } else {
        kartList[match.player.kart] = {
          count: 1,
          retired: Number(match.player.matchRetired),
          win: Number(match.player.matchWin),
          trackRecord: Number(match.player.matchRetired)
            ? {}
            : [
                {
                  trackId: match.trackId,
                  record: Number(match.player.matchTime),
                },
              ],
        };
      }
    });
    setSelectCartId(
      Object.entries(kartList).sort((a, b) => b[1].count - a[1].count)[0][0]
    );
    return Object.entries(kartList).sort((a, b) => b[1].count - a[1].count);
  };

  useEffect(() => {
    if (matchData) {
      setTrackData(makeTrackData(matchData));
      setKartData(makeKartData(matchData));
    }
  }, [matchData]);

  useEffect(() => {
    if (trackData) calcWinRate();
  }, [trackData, kartData]);

  return (
    <Warraper>
      <TabButtons>
        <Tabs>
          <Tab>
            <TabContent active={tapIndex === 0 ? 1 : 0}>
              <TabLink onClick={() => setTapIndex(0)}>트랙</TabLink>
            </TabContent>
          </Tab>
          <Tab>
            <TabContent active={tapIndex === 1 ? 1 : 0}>
              <TabLink onClick={() => setTapIndex(1)}>카트</TabLink>
            </TabContent>
          </Tab>
        </Tabs>
      </TabButtons>
      {!tapIndex ? (
        <Table>
          <H5>
            <Span>트랙</Span>전적
          </H5>
          <P>
            평균 승률
            <span style={{ color: "#07f", marginLeft: "5px" }}>
              {winRate ? winRate : "-"}
            </span>
            &nbsp;%
          </P>
          <TopTable>
            <p style={{ color: "#1f334a", fontSize: "14px" }}>
              {trackName.map((name) => {
                if (name.id === selectTrackId) return name.name;
              })}
              <span style={{ color: "#a1a1a1" }}>&nbsp;&nbsp;기록분포</span>
            </p>
            <LeftGraph
              selectTrackId={selectTrackId}
              trackData={trackData}
            ></LeftGraph>
          </TopTable>
          <LeftTable
            selectTrackId={selectTrackId}
            setSelectTrackId={setSelectTrackId}
            trackData={trackData}
          ></LeftTable>
        </Table>
      ) : (
        <Table>
          <H5>
            <Span>카트</Span>전적
          </H5>
          <TopTable>
            <p style={{ color: "#1f334a", fontSize: "14px" }}>
              <Badge>일반</Badge>
              {kartName.map((name) => {
                if (name.id === selectCartId) return name.name;
              })}
            </p>
            <Kart selectCartId={selectCartId} kartData={kartData}></Kart>
          </TopTable>
          <KartTable
            selectCartId={selectCartId}
            setSelectCartId={setSelectCartId}
            kartData={kartData}
          ></KartTable>
        </Table>
      )}
    </Warraper>
  );
};

export default Left;
