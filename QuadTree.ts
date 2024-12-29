import {
  instanceOfPoint,
  instanceOfQuadTree,
  instanceOfRectangle,
  isMappable,
  isNumber,
  isUndefined,
} from './assert';
import { Point } from './Point';
import { Rectangle } from './Rectange';

export class QuadTree {
  private region: Rectangle;
  private density: number;
  private points: Point[];
  private leaves: QuadTree[] | null;
  private subdivided: boolean;
  constructor({ region, density }: { region: Rectangle; density: number }) {
    this.region = instanceOfRectangle(region);
    this.density = isNumber(density);
    this.points = [];
    this.leaves = null;
    this.subdivided = false;
  }
  public insert(point: Point) {
    if (
      this.region.contains(instanceOfPoint(point)) &&
      this.points.length < this.density
    ) {
      this.points.push(instanceOfPoint(point));
      return instanceOfQuadTree(this);
    }
    if (this.region.contains(instanceOfPoint(point)) && !this.subdivided) {
      this.subdivided = true;
      this.leaves = isMappable(this.region.subdivide()).map(
        (region) =>
          new QuadTree({
            region,
            density: this.density,
          })
      );
    }
    if (this.subdivided) {
      isMappable(this.leaves).forEach((leaf) => leaf.insert(point));
    }
    return instanceOfQuadTree(this);
  }
  public log(_?) {
    isUndefined(_);
    const { points, leaves } = instanceOfQuadTree(this);
    const mapLeaves = (leaves) =>
      leaves && leaves?.map
        ? isMappable(leaves).map((leaf) => {
            const { points, leaves } = leaf;
            return { points, leaves: mapLeaves(leaves) };
          })
        : null;
    const tree = {
      points,
      leaves: mapLeaves(leaves),
    };
    console.log(JSON.stringify({ ...tree }, null, '  '));
    return instanceOfQuadTree(this);
  }
}
