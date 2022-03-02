import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Warraper = styled.div`
  padding: 10px 0;
  text-align: center;
  white: 278px;
`;

const ChartCanvas = styled.canvas`
  display: block;
  width: 278px;
  height: 150px;
`;

const LeftGraph = ({ trackData, selectTrackId }) => {
  const [graphData, setGraphData] = useState();
  const [points, setPoints] = useState();
  const chartRef = useRef();

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
    if (trackData) {
      setGraphData(
        trackData.filter((track) => track[0] === selectTrackId)[0][1]
          .trackRecord
      );
    }
  }, [selectTrackId]);

  useEffect(() => {
    if (graphData) {
      const min = Math.min(...graphData);
      const max = Math.max(...graphData);
      console.log(max);
      const len = Math.floor(285 / graphData.length + 1);
      let point = [];

      graphData.map((data, index) => {
        point = [
          ...point,
          {
            x: index !== graphData.length - 1 ? index * len + 22 : 285,
            y:
              data === min ? 0 : Math.floor(((data - min) / (max - min)) * 139),
          },
        ];
      });
      setPoints(point);
    }
  }, [graphData]);

  const drawChart = (ctx, points) => {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    const min = Math.min(...graphData);
    const max = Math.max(...graphData);

    ctx.fillText(matchTimeTimeExtractor(min).slice(0, 4), 0, 140);
    ctx.fillText(
      matchTimeTimeExtractor(min + (max - min) * 0.25).slice(0, 4),
      0,
      110
    );
    ctx.fillText(
      matchTimeTimeExtractor(min + (max - min) * 0.5).slice(0, 4),
      0,
      75
    );
    ctx.fillText(
      matchTimeTimeExtractor(min + (max - min) * 0.75).slice(0, 4),
      0,
      40
    );
    ctx.fillText(matchTimeTimeExtractor(max).slice(0, 4), 0, 9);

    const len = Math.floor(278 / graphData.length);
    for (var i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
      ctx.fillText(i, points[i - 1].x, 152);
    }
    ctx.fillText(points.length, 280, 152);
    ctx.stroke();
  };

  const drawBackgrond = (ctx) => {
    var GRAPH_TOP = 0;
    var GRAPH_BOTTOM = 139;
    var GRAPH_LEFT = 22;
    var GRAPH_RIGHT = 285;

    var GRAPH_HEIGHT = 139;

    ctx.clearRect(0, 0, 300, 200);

    // 전체 박스 그리기
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_TOP);
    ctx.moveTo(GRAPH_LEFT, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_LEFT, GRAPH_TOP);
    ctx.stroke();

    ctx.beginPath();
    // 시작 선
    ctx.strokeStyle = "#BBB";
    ctx.moveTo(GRAPH_LEFT, GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_TOP);
    ctx.stroke();

    // 3/4 선
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, (GRAPH_HEIGHT / 4) * 3 + GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, (GRAPH_HEIGHT / 4) * 3 + GRAPH_TOP);
    ctx.stroke();

    // 중앙선
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, GRAPH_HEIGHT / 2 + GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_HEIGHT / 2 + GRAPH_TOP);
    ctx.stroke();

    // 1/4 선
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, GRAPH_HEIGHT / 4 + GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_HEIGHT / 4 + GRAPH_TOP);
    ctx.stroke();
  };

  const ctx = chartRef.current?.getContext("2d");
  ctx && drawBackgrond(ctx);
  ctx && points && drawChart(ctx, points);
  return (
    <Warraper>
      <ChartCanvas
        width="300px"
        height="160px"
        id="canvas"
        ref={chartRef}
      ></ChartCanvas>
    </Warraper>
  );
};
export default LeftGraph;
