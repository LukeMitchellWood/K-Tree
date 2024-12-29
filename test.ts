import { Point } from './Point';
import { QuadTree } from './QuadTree';
import { Rectangle } from './Rectange';

const random = () => 2 * Math.random() - 1;
const randomPoints = (number: number) => (fn) => {
  return new Array(number)
    .fill(({ x, y }) => new Point({ x, y }))
    .map((p: ({ x, y }: { x: number; y: number }) => Point) =>
      p({ x: random() * 100, y: random() * 100 })
    )
    .map((p) => fn(p));
};

const region = new Rectangle({ x: 0, y: 0, width: 100, height: 100 });
const density = 5;
const qt = new QuadTree({ region, density });

randomPoints(10)((point: Point) => qt.insert(point));
qt.log();
