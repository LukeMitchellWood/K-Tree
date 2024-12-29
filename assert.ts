import { Point } from './Point';
import { QuadTree } from './QuadTree';
import { Rectangle } from './Rectange';

export const assertEq = (val, assertion) => {
  if (assertion(val)) {
    return val;
  }
  throw new Error(`Assertion Failed: ${val} does not meet assertion criteria`);
};

export const assertNotEq = (val, assertion) => {
  if (assertion(val)) {
    throw new Error(`Assertion Failed: ${val} meets failure criteria`);
  }
  return val;
};

export const isUndefined = (undef) => assertEq(undef, (_) => _ === undefined);

export const isNumber = (num) =>
  assertEq(num, (_: any) => typeof _ === 'number');

export const isBoolean = (num) =>
  assertEq(num, (_: any) => typeof _ === 'boolean');

export const isString = (str) =>
  assertEq(str, (_: any) => typeof _ === 'string');

export const isMappable = (arr) =>
  assertEq(arr, (_: any) => typeof arr.map === 'function');

export const isInstance = (instanceVal, classValue) => {
  if (instanceVal instanceof classValue) {
    return instanceVal;
  }
  throw new Error(
    `Assertion Failed: ${instanceVal} is not an instance of ${classValue.name}`
  );
};

export const instanceOfPoint = (instanceVal) => isInstance(instanceVal, Point);

export const instanceOfRectangle = (instanceVal) =>
  isInstance(instanceVal, Rectangle);

export const instanceOfQuadTree = (instanceVal) =>
  isInstance(instanceVal, QuadTree);
