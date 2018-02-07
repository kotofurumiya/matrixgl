import { Vector2Base, Vector3Base,  Vector4Base } from './vector_base';

/**
 * A 2-dimensional vector of single-precision float numbers.
 */
export class Float32Vector2 extends Vector2Base<Float32Array> {
  constructor(x: number, y: number) {
    super();
    this._values = new Float32Array([x, y]);
  }

  /**
   * Add `other` to the vector and returns new `Float32Vector2`.
   *
   * This method does not mutate the vector.
   * @param {Float32Vector2} other
   * @returns {Float32Vector2}
   */
  add(other: Float32Vector2): Float32Vector2 {
    return new Float32Vector2(this.x + other.x, this.y + other.y);
  }

  /**
   * Subtract `other` from the vector and returns new `Float32Vector2`.
   *
   * This method does not mutate the vector.
   * @param {Float32Vector2} other
   * @returns {Float32Vector2}
   */
  sub(other: Float32Vector2): Float32Vector2 {
    return new Float32Vector2(this.x - other.x, this.y - other.y);
  }

  /**
   * Multiply the vector by `scalar` and returns new `Float32Vector2`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Float32Vector2}
   */
  mulByScalar(scalar: number): Float32Vector2 {
    return new Float32Vector2(this.x * scalar, this.y * scalar);
  }
}

/**
 * A 3-dimensional vector of single-precision float numbers.
 */
export class Float32Vector3 extends Vector3Base<Float32Array> {
  constructor(x: number, y: number, z: number) {
    super();
    this._values = new Float32Array([x, y, z]);
  }

  /**
   * Add `other` to the vector and returns new `Float32Vector3`.
   *
   * This method does not mutate the vector.
   * @param {Float32Vector3} other
   * @returns {Float32Vector3}
   */
  add(other: Float32Vector3): Float32Vector3 {
    return new Float32Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  /**
   * Subtract `other` from the vector and returns new `Float32Vector3`.
   *
   * This method does not mutate the vector.
   * @param {Float32Vector3} other
   * @returns {Float32Vector3}
   */
  sub(other: Float32Vector3): Float32Vector3 {
    return new Float32Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  /**
   * Multiply the vector by `scalar` and returns new `Float32Vector3`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Float32Vector3}
   */
  mulByScalar(scalar: number): Float32Vector3 {
    return new Float32Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  /**
   * Calculate dot product.
   * @param {Float32Vector3} other
   * @returns {number}
   */
  dot(other: Float32Vector3): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  /**
   * Calculate cross product.
   * @param {Float32Vector3} other
   * @returns {Float32Vector3}
   */
  cross(other: Float32Vector3): Float32Vector3 {
    const cx: number = this.y * other.z - this.z * other.y;
    const cy: number = this.z * other.x - this.x * other.z;
    const cz: number = this.x * other.y - this.y * other.x;

    return new Float32Vector3(cx, cy, cz);
  }

  /**
   * Normalize the vector and returns new `Float32Vector3`.
   *
   * This method does not mutate the vector.
   * @returns {Float32Vector3}
   */
  normalize(): Float32Vector3 {
    const mag: number = this.magnitude;
    if(mag === 0) { return this; }
    return new Float32Vector3(this.x / mag, this.y / mag, this.z / mag);
  }
}

/**
 * A 4-dimensional vector of single-precision float numbers.
 */
export class Float32Vector4 extends Vector4Base<Float32Array> {
  constructor(x: number, y: number, z: number, w: number) {
    super();
    this._values = new Float32Array([x, y, z, w]);
  }

  /**
   * Add `other` to the vector and returns new `Float32Vector4`.
   *
   * This method does not mutate the vector.
   * @param {Float32Vector4} other
   * @returns {Float32Vector4}
   */
  add(other: Float32Vector4): Float32Vector4 {
    return new Float32Vector4(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
  }

  /**
   * Subtract `other` from the vector and returns new `Float32Vector4`.
   *
   * This method does not mutate the vector.
   * @param {Float32Vector4} other
   * @returns {Float32Vector4}
   */
  sub(other: Float32Vector4): Float32Vector4 {
    return new Float32Vector4(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
  }

  /**
   * Multiply the vector by `scalar` and returns new `Float32Vector4`.
   *
   * This method does not mutate the vector.
   * @param {number} scalar
   * @returns {Float32Vector4}
   */
  mulByScalar(scalar: number): Float32Vector4 {
    return new Float32Vector4(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
  }
}

/**
 * An alias for `Float32Vector2`.
 * @type {Float32Vector2}
 */
export const Vector2 = Float32Vector2;

/**
 * An alias for `Float32Vector3`.
 * @type {Float32Vector3}
 */
export const Vector3 = Float32Vector3;

/**
 * An alias for `Float32Vector4`.
 * @type {Float32Vector4}
 */
export const Vector4 = Float32Vector4;