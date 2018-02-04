import {Float32Vector3, Float32Vector4} from "./float32vector";

/**
 * An interface for matrices;
 */
export interface Matrix {
  /**
   * Values of the matrix, that is stored in column major order.
   */
  readonly values: Float32Array;

  /**
   * Returns `values` as string.
   * @returns {string}
   */
  toString(): string;
}

/**
 * 2x2 Matrix of single-precision float numbers.
 *
 * Values are stored in column major order.
 */
export class Matrix2x2 implements Matrix {
  protected _values: Float32Array;

  constructor(m11: number, m21: number, m12: number, m22: number) {
    this._values = new Float32Array([
      m11, m21,
      m12, m22
    ]);
  }

  /**
   * Returns an identity matrix.
   * @returns {Matrix2x2}
   */
  static identity(): Matrix2x2 {
    return new Matrix2x2(1.0, 0.0, 0.0, 1.0);
  }

  get values(): Float32Array {
    return this._values;
  }

  toString(): string {
    return this._values.toString();
  }
}

/**
 * 3x3 Matrix of single-precision float numbers.
 *
 * Values are stored in column major order.
 */
export class Matrix3x3 implements Matrix {
  protected _values: Float32Array;

  constructor(
    m11: number, m21: number, m31: number,
    m12: number, m22: number, m32: number,
    m13: number, m23: number, m33: number
  ) {
    this._values = new Float32Array([
      m11, m21, m31,
      m12, m22, m32,
      m13, m23, m33
    ]);
  }

  /**
   * Returns an identity matrix.
   * @returns {Matrix3x3}
   */
  static identity(): Matrix3x3 {
    return new Matrix3x3(
      1.0, 0.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 0.0, 1.0
    );
  }

  get values(): Float32Array {
    return this._values;
  }

  toString(): string {
    return this._values.toString();
  }
}

/**
 * 4x4 Matrix of single-precision float numbers.
 *
 * Values are stored in column major order.
 */
export class Matrix4x4 implements Matrix {
  protected _values: Float32Array;

  constructor(
    m11: number, m21: number, m31: number, m41: number,
    m12: number, m22: number, m32: number, m42: number,
    m13: number, m23: number, m33: number, m43: number,
    m14: number, m24: number, m34: number, m44: number
  ) {
    this._values = new Float32Array([
      m11, m21, m31, m41,
      m12, m22, m32, m42,
      m13, m23, m33, m43,
      m14, m24, m34, m44
    ]);
  }

  /**
   * Returns an identity matrix.
   * @returns {Matrix4x4}
   */
  static identity(): Matrix4x4 {
    return new Matrix4x4(
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }

  /**
   * Returns translation matrix.
   * @param {number} tx
   * @param {number} ty
   * @param {number} tz
   * @returns {Matrix4x4}
   */
  static translation(tx: number, ty: number, tz: number): Matrix4x4 {
    return new Matrix4x4(
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      tx,  ty,  tz,  1.0
    );
  }

  /**
   * Returns scaling matrix.
   * @param {number} sx
   * @param {number} sy
   * @param {number} sz
   * @returns {Matrix4x4}
   */
  static scaling(sx: number, sy: number, sz: number): Matrix4x4 {
    return new Matrix4x4(
      sx,  0.0, 0.0, 0.0,
      0.0, sy,  0.0, 0.0,
      0.0, 0.0, sz,  0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }

  /**
   * Returns rotation matrix around x-axis.
   * @param {number} radian
   * @returns {Matrix4x4}
   */
  static rotationX(radian: number): Matrix4x4 {
    const sin: number = Math.sin(radian);
    const cos: number = Math.cos(radian);

    return new Matrix4x4(
      1.0, 0.0,  0.0, 0.0,
      0.0, cos,  sin, 0.0,
      0.0, -sin, cos, 0.0,
      0.0, 0.0,  0.0, 1.0
    );
  }

  /**
   * Returns rotation matrix around y-axis.
   * @param {number} radian
   * @returns {Matrix4x4}
   */
  static rotationY(radian: number): Matrix4x4 {
    const sin: number = Math.sin(radian);
    const cos: number = Math.cos(radian);

    return new Matrix4x4(
      cos, 0.0, -sin, 0.0,
      0.0, 1.0, 0.0,  0.0,
      sin, 0.0, cos,  0.0,
      0.0, 0.0, 0.0,  1.0
    );
  }

  /**
   * Returns rotation matrix around z-axis.
   * @param {number} radian
   * @returns {Matrix4x4}
   */
  static rotationZ(radian: number): Matrix4x4 {
    const sin: number = Math.sin(radian);
    const cos: number = Math.cos(radian);

    return new Matrix4x4(
      cos,  sin, 0.0, 0.0,
      -sin, cos, 0.0, 0.0,
      0.0,  0.0, 1.0, 0.0,
      0.0,  0.0, 0.0, 1.0
    );
  }

  /**
   * Returns "look at" matrix.
   * @param {Float32Vector3} cameraPosition
   * @param {Float32Vector3} lookAtPosition
   * @param {Float32Vector3} cameraUp
   * @returns {Matrix4x4}
   */
  static lookAt(cameraPosition: Float32Vector3, lookAtPosition: Float32Vector3, cameraUp: Float32Vector3): Matrix4x4 {
    const zAxis: Float32Vector3 = cameraPosition.sub(lookAtPosition).normalize();
    const xAxis: Float32Vector3 = cameraUp.cross(zAxis).normalize();
    const yAxis: Float32Vector3 = zAxis.cross(xAxis).normalize();

    return new Matrix4x4(
      xAxis.x, yAxis.x, zAxis.x, 0.0,
      xAxis.y, yAxis.y, zAxis.y, 0.0,
      xAxis.z, yAxis.z, zAxis.z, 0.0,
      -cameraPosition.dot(xAxis), -cameraPosition.dot(yAxis), -cameraPosition.dot(zAxis), 1.0
    );
  }

  /**
   * Returns an orthographic projection matrix.
   * @param {{top: number; bottom: number; left: number; right: number; near: number; far: number}} argsObject
   * @returns {Matrix4x4}
   */
  static orthographic(argsObject: {top: number, bottom: number, left: number, right: number, near: number, far: number}): Matrix4x4 {
    const top: number = argsObject.top;
    const bottom: number = argsObject.bottom;
    const left: number = argsObject.left;
    const right: number = argsObject.right;
    const near: number = argsObject.near;
    const far: number = argsObject.far;

    return new Matrix4x4(
      2/(right-left),             0.0,                        0.0,                    0.0,
      0.0,                        2/(top-bottom),             0.0,                    0.0,
      0.0,                        0.0,                        -2/(far-near),          0.0,
      -(right+left)/(right-left), -(top+bottom)/(top-bottom), -(far+near)/(far-near), 1.0
    );
  }

  /**
   * Returns a perspective projection matrix.
   * @param {{top: number; bottom: number; left: number; right: number; near: number; far: number}} argsObject
   * @returns {Matrix4x4}
   */
  static perspective(argsObject: {top: number, bottom: number, left: number, right: number, near: number, far: number}): Matrix4x4 {
    const top: number = argsObject.top;
    const bottom: number = argsObject.bottom;
    const left: number = argsObject.left;
    const right: number = argsObject.right;
    const near: number = argsObject.near;
    const far: number = argsObject.far;

    return new Matrix4x4(
      2*near/(right-left),       0.0,                       0.0,                    0.0,
      0.0,                       2*near/(top-bottom),       0.0,                    0.0,
      (right+left)/(right-left), (top+bottom)/(top-bottom), -(far+near)/(far-near), -1.0,
      0.0,                       0.0,                       -2*far*near/(far-near),  0.0
    );
  }

  /**
   * Multiply by `other` matrix and returns a product.
   *
   * This method does not mutate the matrix.
   * @param {Matrix4x4} other
   * @returns {Matrix4x4}
   */
  mulByMatrix4x4(other: Matrix4x4): Matrix4x4 {
    const m11: number = this._values[0];
    const m12: number = this._values[4];
    const m13: number = this._values[8];
    const m14: number = this._values[12];
    const m21: number = this._values[1];
    const m22: number = this._values[5];
    const m23: number = this._values[9];
    const m24: number = this._values[13];
    const m31: number = this._values[2];
    const m32: number = this._values[6];
    const m33: number = this._values[10];
    const m34: number = this._values[14];
    const m41: number = this._values[3];
    const m42: number = this._values[7];
    const m43: number = this._values[11];
    const m44: number = this._values[15];

    const o11: number = other.values[0];
    const o12: number = other.values[4];
    const o13: number = other.values[8];
    const o14: number = other.values[12];
    const o21: number = other.values[1];
    const o22: number = other.values[5];
    const o23: number = other.values[9];
    const o24: number = other.values[13];
    const o31: number = other.values[2];
    const o32: number = other.values[6];
    const o33: number = other.values[10];
    const o34: number = other.values[14];
    const o41: number = other.values[3];
    const o42: number = other.values[7];
    const o43: number = other.values[11];
    const o44: number = other.values[15];

    const p11: number = (m11 * o11) + (m12 * o21) + (m13 * o31) + (m14 * o41);
    const p12: number = (m11 * o12) + (m12 * o22) + (m13 * o32) + (m14 * o42);
    const p13: number = (m11 * o13) + (m12 * o23) + (m13 * o33) + (m14 * o43);
    const p14: number = (m11 * o14) + (m12 * o24) + (m13 * o34) + (m14 * o44);

    const p21: number = (m21 * o11) + (m22 * o21) + (m23 * o31) + (m24 * o41);
    const p22: number = (m21 * o12) + (m22 * o22) + (m23 * o32) + (m24 * o42);
    const p23: number = (m21 * o13) + (m22 * o23) + (m23 * o33) + (m24 * o43);
    const p24: number = (m21 * o14) + (m22 * o24) + (m23 * o34) + (m24 * o44);

    const p31: number = (m31 * o11) + (m32 * o21) + (m33 * o31) + (m34 * o41);
    const p32: number = (m31 * o12) + (m32 * o22) + (m33 * o32) + (m34 * o42);
    const p33: number = (m31 * o13) + (m32 * o23) + (m33 * o33) + (m34 * o43);
    const p34: number = (m31 * o14) + (m32 * o24) + (m33 * o34) + (m34 * o44);

    const p41: number = (m41 * o11) + (m42 * o21) + (m43 * o31) + (m44 * o41);
    const p42: number = (m41 * o12) + (m42 * o22) + (m43 * o32) + (m44 * o42);
    const p43: number = (m41 * o13) + (m42 * o23) + (m43 * o33) + (m44 * o43);
    const p44: number = (m41 * o14) + (m42 * o24) + (m43 * o34) + (m44 * o44);

    return new Matrix4x4(
      p11, p21, p31, p41,
      p12, p22, p32, p42,
      p13, p23, p33, p43,
      p14, p24, p34, p44
    );
  }

  /**
   * An alias for `mulByMatrix4x4`.
   * @param {Matrix4x4} other
   * @returns {Matrix4x4}
   */
  mulByMatrix4(other: Matrix4x4): Matrix4x4 {
    return this.mulByMatrix4x4(other);
  }

  /**
   * Translate the matrix and returns new `Matrix4x4`.
   *
   * This method does not mutate the matrix.
   * @param {number} tx
   * @param {number} ty
   * @param {number} tz
   * @returns {Matrix4x4}
   */
  translate(tx: number, ty: number, tz: number): Matrix4x4 {
    const t: Matrix4x4 = Matrix4x4.translation(tx, ty, tz);
    return this.mulByMatrix4x4(t);
  }

  /**
   * Scale the matrix and returns new `Matrix4x4`.
   * @param {number} sx
   * @param {number} sy
   * @param {number} sz
   * @returns {Matrix4x4}
   */
  scale(sx: number, sy: number, sz: number): Matrix4x4 {
    const s: Matrix4x4 = Matrix4x4.scaling(sx, sy, sz);
    return this.mulByMatrix4x4(s);
  }

  /**
   * Rotate the matrix around x-axis and returns new `Matrix4x4`.
   *
   * This method does not mutate the matrix.
   * @param {number} radian
   * @returns {Matrix4x4}
   */
  rotateX(radian: number): Matrix4x4 {
    const rx: Matrix4x4 = Matrix4x4.rotationX(radian);
    return this.mulByMatrix4x4(rx);
  }

  /**
   * Rotate the matrix around y-axis and returns new `Matrix4x4`.
   *
   * This method does not mutate the matrix.
   * @param {number} radian
   * @returns {Matrix4x4}
   */
  rotateY(radian: number): Matrix4x4 {
    const ry: Matrix4x4 = Matrix4x4.rotationY(radian);
    return this.mulByMatrix4x4(ry);
  }

  /**
   * Rotate the matrix around z-axis and returns new `Matrix4x4`.
   *
   * This method does not mutate the matrix.
   * @param {number} radian
   * @returns {Matrix4x4}
   */
  rotateZ(radian: number): Matrix4x4 {
    const rz: Matrix4x4 = Matrix4x4.rotationZ(radian);
    return this.mulByMatrix4x4(rz);
  }

  get values(): Float32Array {
    return this._values;
  }

  toString(): string {
    return this._values.toString();
  }
}

/**
 * An alias for `Matrix2x2`.
 * @type {Matrix2x2}
 */
export const Matrix2 = Matrix2x2;

/**
 * An alias for `Matrix3x3`.
 * @type {Matrix3x3}
 */
export const Matrix3 = Matrix3x3;

/**
 * An alias for `Matrix4x4`.
 * @type {Matrix4x4}
 */
export const Matrix4 = Matrix4x4;