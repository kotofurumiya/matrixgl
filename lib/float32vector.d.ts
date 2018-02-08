import { Vector2Base, Vector3Base, Vector4Base } from './vector_base';
/**
 * A 2-dimensional vector of single-precision float numbers.
 */
export declare class Float32Vector2 extends Vector2Base<Float32Array> {
    constructor(x: number, y: number);
    /**
     * Add `other` to the vector and returns new `Float32Vector2`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector2} other
     * @returns {Float32Vector2}
     */
    add(other: Float32Vector2): Float32Vector2;
    /**
     * Subtract `other` from the vector and returns new `Float32Vector2`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector2} other
     * @returns {Float32Vector2}
     */
    sub(other: Float32Vector2): Float32Vector2;
    /**
     * Multiply the vector by `scalar` and returns new `Float32Vector2`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Float32Vector2}
     */
    mulByScalar(scalar: number): Float32Vector2;
}
/**
 * A 3-dimensional vector of single-precision float numbers.
 */
export declare class Float32Vector3 extends Vector3Base<Float32Array> {
    constructor(x: number, y: number, z: number);
    /**
     * Add `other` to the vector and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector3} other
     * @returns {Float32Vector3}
     */
    add(other: Float32Vector3): Float32Vector3;
    /**
     * Subtract `other` from the vector and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector3} other
     * @returns {Float32Vector3}
     */
    sub(other: Float32Vector3): Float32Vector3;
    /**
     * Multiply the vector by `scalar` and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Float32Vector3}
     */
    mulByScalar(scalar: number): Float32Vector3;
    /**
     * Calculate dot product.
     * @param {Float32Vector3} other
     * @returns {number}
     */
    dot(other: Float32Vector3): number;
    /**
     * Calculate cross product.
     * @param {Float32Vector3} other
     * @returns {Float32Vector3}
     */
    cross(other: Float32Vector3): Float32Vector3;
    /**
     * Normalize the vector and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @returns {Float32Vector3}
     */
    normalize(): Float32Vector3;
    /**
     * Returns xy values of the vector as `Float32Vector2`.
     * @returns {Float32Vector2}
     */
    readonly xy: Float32Vector2;
}
/**
 * A 4-dimensional vector of single-precision float numbers.
 */
export declare class Float32Vector4 extends Vector4Base<Float32Array> {
    constructor(x: number, y: number, z: number, w: number);
    /**
     * Add `other` to the vector and returns new `Float32Vector4`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector4} other
     * @returns {Float32Vector4}
     */
    add(other: Float32Vector4): Float32Vector4;
    /**
     * Subtract `other` from the vector and returns new `Float32Vector4`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector4} other
     * @returns {Float32Vector4}
     */
    sub(other: Float32Vector4): Float32Vector4;
    /**
     * Multiply the vector by `scalar` and returns new `Float32Vector4`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Float32Vector4}
     */
    mulByScalar(scalar: number): Float32Vector4;
    /**
     * Returns xyz values of the vector as `Float32Vector3`.
     * @returns {Float32Vector3}
     */
    readonly xyz: Float32Vector3;
}
/**
 * An alias for `Float32Vector2`.
 * @type {Float32Vector2}
 */
export declare const Vector2: typeof Float32Vector2;
/**
 * An alias for `Float32Vector3`.
 * @type {Float32Vector3}
 */
export declare const Vector3: typeof Float32Vector3;
/**
 * An alias for `Float32Vector4`.
 * @type {Float32Vector4}
 */
export declare const Vector4: typeof Float32Vector4;
