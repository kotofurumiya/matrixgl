export type TypedArrayLike = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

/**
 * An interface for vectors.
 */
export interface Vector<T extends TypedArrayLike> {
  /**
   * Returns values of the vector.
   * @returns {T}
   */
  readonly values: T;

  /**
   * Returns magnitude of the vector.
   */
  readonly magnitude: number;

  /**
   * Returns `values` as a string.
   * @returns {string}
   */
  toString(): string;
}

/**
 * An abstract class for vectors.
 */
export abstract class VectorBase<T extends TypedArrayLike> implements Vector<T> {
  /**
   * Values that the vector contains.
   */
  protected _values: T;

  get values(): T {
    return this._values;
  }

  get magnitude(): number {
    const sumSq: number = this._values.reduce((prev: number, current: number) => prev + (current ** 2), 0);
    return Math.sqrt(sumSq);
  }

  toString(): string {
    return this._values.toString();
  }
}

/**
 * A base abstract class for 2-dimensional vectors.
 */
export abstract class Vector2Base<T extends TypedArrayLike> extends VectorBase<T> {
  /**
   * Returns x value of the vector.
   * @returns {number}
   */
  get x(): number {
    return this._values[0];
  }

  /**
   * Returns y value of the vector.
   * @returns {number}
   */
  get y(): number {
    return this._values[1];
  }

  /**
   * Set the `value` as new x.
   * @param {number} value
   */
  set x(value: number) {
    this._values[0] = value;
  }

  /**
   * Set the `value` as new y.
   * @param {number} value
   */
  set y(value: number) {
    this._values[1] = value;
  }

}

/**
 * A base abstract class for 3-dimensional vectors.
 */
export abstract class Vector3Base<T extends TypedArrayLike> extends VectorBase<T> {
  /**
   * Returns x value of the vector.
   * @returns {number}
   */
  get x(): number {
    return this._values[0];
  }

  /**
   * Returns y value of the vector.
   * @returns {number}
   */
  get y(): number {
    return this._values[1];
  }

  /**
   * Returns z value of the vector.
   * @returns {number}
   */
  get z(): number {
    return this._values[2];
  }

  /**
   * Set the `value` as new x.
   * @param {number} value
   */
  set x(value: number) {
    this._values[0] = value;
  }

  /**
   * Set the `value` as new y.
   * @param {number} value
   */
  set y(value: number) {
    this._values[1] = value;
  }

  /**
   * Set the `value` as new z.
   * @param {number} value
   */
  set z(value: number) {
    this._values[2] = value;
  }
}

/**
 * A base abstract class for 4-dimensional vectors.
 */
export abstract class Vector4Base<T extends TypedArrayLike> extends VectorBase<T> {
  /**
   * Returns x value of the vector.
   * @returns {number}
   */
  get x(): number {
    return this._values[0];
  }

  /**
   * Returns y value of the vector.
   * @returns {number}
   */
  get y(): number {
    return this._values[1];
  }

  /**
   * Returns z value of the vector.
   * @returns {number}
   */
  get z(): number {
    return this._values[2];
  }

  /**
   * Returns w value of the vector.
   * @returns {number}
   */
  get w(): number {
    return this._values[3];
  }

  /**
   * Set the `value` as new x.
   * @param {number} value
   */
  set x(value: number) {
    this._values[0] = value;
  }

  /**
   * Set the `value` as new y.
   * @param {number} value
   */
  set y(value: number) {
    this._values[1] = value;
  }

  /**
   * Set the `value` as new z.
   * @param {number} value
   */
  set z(value: number) {
    this._values[2] = value;
  }

  /**
   * Set the `value` as new w.
   * @param {number} value
   */
  set w(value: number) {
    this._values[3] = value;
  }
}
