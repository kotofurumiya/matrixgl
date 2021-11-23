import { suite } from 'uvu';
import { Vector2, Vector3, Vector4 } from '../';
import { toBeCloseTo, arrayToBeCloseTo } from './lib/close_to';

const Vector2Suite = suite('Vector2');
const Vector3Suite = suite('Vector3');
const Vector4Suite = suite('Vector4');
const delta = 0.001;

//
// Vector2
//
Vector2Suite('Add Vector2', () => {
  const vec1 = new Vector2(1, 2);
  const vec2 = new Vector2(3, 4);

  arrayToBeCloseTo(vec1.add(vec2).values, [4, 6], delta);
});

Vector2Suite('Sub Vector2', () => {
  const vec1 = new Vector2(1, 2);
  const vec2 = new Vector2(3, 4);

  arrayToBeCloseTo(vec1.sub(vec2).values, [-2, -2], delta);
});

Vector2Suite('Mul Vector2', () => {
  const vec1 = new Vector2(1, 2);

  arrayToBeCloseTo(vec1.mulByScalar(5).values, [5, 10], delta);
});

//
// Vector3
//
Vector3Suite('Add Vector3', () => {
  const vec1 = new Vector3(1, 2, 3);
  const vec2 = new Vector3(4, 5, 6);

  arrayToBeCloseTo(vec1.add(vec2).values, [5, 7, 9], delta);
});

Vector3Suite('Sub Vector3', () => {
  const vec1 = new Vector3(1, 2, 3);
  const vec2 = new Vector3(4, 5, 6);

  arrayToBeCloseTo(vec1.sub(vec2).values, [-3, -3, -3], delta);
});

Vector3Suite('Mul Vector3', () => {
  const vec1 = new Vector3(1, 2, 3);

  arrayToBeCloseTo(vec1.mulByScalar(5).values, [5, 10, 15], delta);
});

Vector3Suite('Dot Vector3', () => {
  const vec1 = new Vector3(1, 2, 3);
  const vec2 = new Vector3(4, 5, 6);

  toBeCloseTo(vec1.dot(vec2), 32, delta);
});

Vector3Suite('Cross Vector3', () => {
  const vec1 = new Vector3(1, 2, 3);
  const vec2 = new Vector3(4, 5, 6);

  arrayToBeCloseTo(vec1.cross(vec2).values, [-3, 6, -3], delta);
});

Vector3Suite('Magnitude of Vector3', () => {
  const vec = new Vector3(1.23 , 4.56, 7.89);

  toBeCloseTo(vec.magnitude, 9.19558, delta);
});

Vector3Suite('Normal Vector3', () => {
  const vec = new Vector3(1.05, 3.47, 7.43);
  arrayToBeCloseTo(vec.normalize().values, [0.127006, 0.419726, 0.898721], delta);
});

Vector3Suite('Normal Zero Vector3', () => {
  const vec = new Vector3(0.0, 0.0, 0.0);
  arrayToBeCloseTo(vec.normalize().values, [0.0, 0.0, 0.0], delta);
});

Vector3Suite('Get xy', () => {
  const vec = new Vector3(1, 2, 3);
  arrayToBeCloseTo(vec.xy.values, [1, 2], delta);
});

//
// Vector4
//
Vector4Suite('Add Vector4', () => {
  const vec1 = new Vector4(1, 2, 3, 4);
  const vec2 = new Vector4(5, 6, 7, 8);

  arrayToBeCloseTo(vec1.add(vec2).values, [6, 8, 10, 12], delta);
});

Vector4Suite('Sub Vector4', () => {
  const vec1 = new Vector4(1, 2, 3, 4);
  const vec2 = new Vector4(5, 6, 7, 8);

  arrayToBeCloseTo(vec1.sub(vec2).values, [-4, -4, -4, -4], delta);
});

Vector4Suite('Mul Vector4', () => {
  const vec1 = new Vector4(1, 2, 3, 4);

  arrayToBeCloseTo(vec1.mulByScalar(5).values, [5, 10, 15, 20], delta);
});

Vector4Suite('Get xyz', () => {
  const vec = new Vector4(1, 2, 3, 4);
  arrayToBeCloseTo(vec.xyz.values, [1, 2, 3], delta);
});

Vector2Suite.run();
Vector3Suite.run();
Vector4Suite.run();