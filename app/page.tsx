"use client";
import { useState } from "react";
import { FC } from "react";
import { UseDraw } from "../hooks/useDraw";
import { ChromePicker } from "react-color";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [color, setColor] = useState<string>("#000");
  const { canvasRef, onMouseDown, clear } = UseDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
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
    ctx.fill();
  }

  return (
    <div className="canv-bg">
      <div>
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button type="button" onClick={clear}>
          Clear Canvas
        </button>
        <canvas
          width={"500px"}
          height={"500px"}
          onMouseDown={onMouseDown}
          ref={canvasRef}
        />
      </div>
    </div>
  );
};
export default page;
