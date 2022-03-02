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
  height: 139px;
`;

const LeftGraph = ({ trackData, selectTrackId }) => {
  const [graphData, setGraphData] = useState();
  const [points, setPoints] = useState();
  const chartRef = useRef();

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
      const len = graphData.length;
      graphData.map((data) => data);
      setPoints();
    }
  }, [graphData]);

  const drawChart = (ctx, points) => {
    ctx.beginPath();
    ctx.stroke();
  };

  const drawBackgrond = (ctx) => {
    // declare graph start and end
    var GRAPH_TOP = 0;
    var GRAPH_BOTTOM = 139;
    var GRAPH_LEFT = 0;
    var GRAPH_RIGHT = 278;

    var GRAPH_HEIGHT = 139;

    // clear canvas (if another graph was previously drawn)
    ctx.clearRect(0, 0, 300, 200);

    // draw X and Y axis
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_TOP);
    ctx.moveTo(GRAPH_LEFT, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_LEFT, GRAPH_TOP);
    ctx.stroke();

    // draw reference line at the top of the graph
    ctx.beginPath();
    // set light grey color for reference lines
    ctx.strokeStyle = "#BBB";
    ctx.moveTo(GRAPH_LEFT, GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_TOP);
    ctx.stroke();

    // draw reference line 3/4 up from the bottom of the graph
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, (GRAPH_HEIGHT / 4) * 3 + GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, (GRAPH_HEIGHT / 4) * 3 + GRAPH_TOP);
    ctx.stroke();

    // draw reference line 1/2 way up the graph
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, GRAPH_HEIGHT / 2 + GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_HEIGHT / 2 + GRAPH_TOP);
    ctx.stroke();

    // draw reference line 1/4 up from the bottom of the graph
    ctx.beginPath();
    ctx.moveTo(GRAPH_LEFT, GRAPH_HEIGHT / 4 + GRAPH_TOP);
    ctx.lineTo(GRAPH_RIGHT, GRAPH_HEIGHT / 4 + GRAPH_TOP);
    ctx.stroke();
  };

  const ctx = chartRef.current?.getContext("2d");
  ctx && drawBackgrond(ctx);
  ctx && drawChart(ctx, points);
  return (
    <Warraper>
      <ChartCanvas
        width="278px"
        height="139px"
        id="canvas"
        ref={chartRef}
      ></ChartCanvas>
    </Warraper>
  );
};
export default LeftGraph;
