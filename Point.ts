import { isNumber, isUndefined } from './assert';

export class Point {
  private x: number;
  private y: number;
  constructor({ x, y }: { x: number; y: number }) {
    this.x = isNumber(x);
    this.y = isNumber(y);
  }
  public components(_?) {
    isUndefined(_);
    return [isNumber(this.x), isNumber(this.y)];
  }
}
