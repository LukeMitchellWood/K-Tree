import { Point } from './Point';
import { instanceOfPoint, isBoolean, isNumber, isUndefined } from './assert';
export class Rectangle {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  constructor({
    x,
    y,
    width,
    height,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) {
    this.x = isNumber(x);
    this.y = isNumber(y);
    this.width = isNumber(width);
    this.height = isNumber(height);
  }
  public contains(point: Point) {
    const { x: x0, y: y0, width: w, height: h } = this;
    const [x1, y1] = instanceOfPoint(point).components();

    const el = isBoolean(x1 > x0 - w);
    const er = isBoolean(x1 < x0 + w);
    const et = isBoolean(y1 > y0 - h);
    const eb = isBoolean(y1 < y0 + h);

    return isBoolean(el && er && et && eb);
  }
  public subdivide(_?) {
    isUndefined(_);
    const { x, y, width: w, height: h } = this;
    return [
      new Rectangle({
        x: x - w / 2,
        y: y - h / 2,
        width: w / 2,
        height: h / 2,
      }),
      new Rectangle({
        x: x + w / 2,
        y: y - h / 2,
        width: w / 2,
        height: h / 2,
      }),
      new Rectangle({
        x: x - w / 2,
        y: y + h / 2,
        width: w / 2,
        height: h / 2,
      }),
      new Rectangle({
        x: x + w / 2,
        y: y + h / 2,
        width: w / 2,
        height: h / 2,
      }),
    ];
  }
}
