import { Vector2, Vector3, Vector4 } from '../src/index';
import './lib/array_close_to';

const delta = 0.001;

//
// Vector2
//
describe('Vector2', () => {
  test('Add Vector2', () => {
    const vec1 = new Vector2(1, 2);
    const vec2 = new Vector2(3, 4);

    expect(vec1.add(vec2).values).arrayToBeCloseTo([4, 6], delta);
  });

  test('Sub Vector2', () => {
    const vec1 = new Vector2(1, 2);
    const vec2 = new Vector2(3, 4);

    expect(vec1.sub(vec2).values).arrayToBeCloseTo([-2, -2], delta);
  });

  test('Mul Vector2', () => {
    const vec1 = new Vector2(1, 2);

    expect(vec1.mulByScalar(5).values).arrayToBeCloseTo([5, 10], delta);
  });
});

//
// Vector3
//
describe('Vector3', () => {
  test('Add Vector3', () => {
    const vec1 = new Vector3(1, 2, 3);
    const vec2 = new Vector3(4, 5, 6);

    expect(vec1.add(vec2).values).arrayToBeCloseTo([5, 7, 9], delta);
  });

  test('Sub Vector3', () => {
    const vec1 = new Vector3(1, 2, 3);
    const vec2 = new Vector3(4, 5, 6);

    expect(vec1.sub(vec2).values).arrayToBeCloseTo([-3, -3, -3], delta);
  });

  test('Mul Vector3', () => {
    const vec1 = new Vector3(1, 2, 3);

    expect(vec1.mulByScalar(5).values).arrayToBeCloseTo([5, 10, 15], delta);
  });

  test('Dot Vector3', () => {
    const vec1 = new Vector3(1, 2, 3);
    const vec2 = new Vector3(4, 5, 6);

    expect(vec1.dot(vec2)).toBeCloseTo(32);
  });

  test('Cross Vector3', () => {
    const vec1 = new Vector3(1, 2, 3);
    const vec2 = new Vector3(4, 5, 6);

    expect(vec1.cross(vec2).values).arrayToBeCloseTo([-3, 6, -3], delta);
  });

  test('Magnitude of Vector3', () => {
    const vec = new Vector3(1.23 , 4.56, 7.89);

    expect(vec.magnitude).toBeCloseTo(9.19558);
  });

  test('Normal Vector3', () => {
    const vec = new Vector3(1.05, 3.47, 7.43);
    expect(vec.normalize().values).arrayToBeCloseTo([0.127006, 0.419726, 0.898721], delta);
  });

  test('Normal Zero Vector3', () => {
    const vec = new Vector3(0.0, 0.0, 0.0);
    expect(vec.normalize().values).arrayToBeCloseTo([0.0, 0.0, 0.0], delta);
  });
});

//
// Vector4
//
describe('Vector4', () => {
  test('Add Vector4', () => {
    const vec1 = new Vector4(1, 2, 3, 4);
    const vec2 = new Vector4(5, 6, 7, 8);

    expect(vec1.add(vec2).values).arrayToBeCloseTo([6, 8, 10, 12], delta);
  });

  test('Sub Vector4', () => {
    const vec1 = new Vector4(1, 2, 3, 4);
    const vec2 = new Vector4(5, 6, 7, 8);

    expect(vec1.sub(vec2).values).arrayToBeCloseTo([-4, -4, -4, -4], delta);
  });

  test('Mul Vector4', () => {
    const vec1 = new Vector4(1, 2, 3, 4);

    expect(vec1.mulByScalar(5).values).arrayToBeCloseTo([5, 10, 15, 20], delta);
  });
});