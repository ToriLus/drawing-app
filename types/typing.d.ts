type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevpoint: Point | null;
};

type Point = { x: number; y: number };
