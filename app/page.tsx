"use client";
import { MouseEvent, MouseEventHandler, useEffect, useRef } from "react";
import { FC } from "react";
import { UseDraw } from "../hooks/useDraw";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const { canvasRef } = UseDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = "#000";
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
  }

  return (
    <div className="canv-bg">
      <canvas ref={canvasRef} />
    </div>
  );
};
export default page;
