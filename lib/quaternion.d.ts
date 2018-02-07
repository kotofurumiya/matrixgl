import { Float32Vector3 } from './float32vector';
import { Matrix4x4 } from './matrix';
/**
 * Quaternion which is 4-dimensional complex number.
 * See [Wikipedia](https://en.wikipedia.org/wiki/Quaternion).
 */
export declare class Quaternion {
    protected _values: Float32Array;
    constructor(x: number, y: number, z: number, w: number);
    /**
     * Create a rotation quaternion around `normalizedAxis`.
     * `normalizedAxis` must be normalized.
     * @param {Float32Vector3} normalizedAxis
     * @param {number} radian
     * @returns {Quaternion}
     */
    static rotationAround(normalizedAxis: Float32Vector3, radian: number): Quaternion;
    /**
     * Returns a normalized quaternion.
     * @returns {Quaternion}
     */
    normalize(): Quaternion;
    /**
     * Adds the `other` to the quaternion and returns the sum.
     *
     * This method does not mutate the quaternion.
     * @param {Quaternion} other
     * @returns {Quaternion}
     */
    add(other: Quaternion): Quaternion;
    /**
     * Multiplies the quaternion by `scalar` and returns the product.
     *
     * This method does not mutate the quaternion.
     * @param {number} scalar
     * @returns {Quaternion}
     */
    mulByScalar(scalar: number): Quaternion;
    /**
     * Calculates dot product.
     * @param {Quaternion} other
     * @returns {number}
     */
    dot(other: Quaternion): number;
    /**
     * Calculates spherical linear interpolation(also known as Slerp) and returns new `Quaternion` between the quaternion and the other.
     * @param {Quaternion} other
     * @param {number} t 0.0 <= t <= 1.0
     * @param {{chooseShorterAngle: boolean}} options Does not work currently. slerp chooses shorter angle regardless of this value.
     * @returns {Quaternion}
     */
    slerp(other: Quaternion, t: number, options?: {
        chooseShorterAngle: boolean;
    }): Quaternion;
    /**
     * Calc magnitude of the quaternion.
     * @returns {number}
     */
    readonly magnitude: number;
    /**
     * Calc norm of the quaternion.
     * An alias for `magnitude`.
     * @returns {number}
     */
    readonly norm: number;
    /**
     * Returns x value of the vector.
     * @returns {number}
     */
    /**
     * Set the `value` as new x.
     * @param {number} value
     */
    x: number;
    /**
     * Returns y value of the vector.
     * @returns {number}
     */
    /**
     * Set the `value` as new y.
     * @param {number} value
     */
    y: number;
    /**
     * Returns z value of the vector.
     * @returns {number}
     */
    /**
     * Set the `value` as new z.
     * @param {number} value
     */
    z: number;
    /**
     * Returns w value of the vector.
     * @returns {number}
     */
    /**
     * Set the `value` as new w.
     * @param {number} value
     */
    w: number;
    /**
     * Returns values of the quaternion.
     * @returns {Float32Array}
     */
    readonly values: Float32Array;
    /**
     * Convert the quaternion to a rotation matrix.
     * @returns {Matrix4x4}
     */
    toRotationMatrix4(): Matrix4x4;
    /**
     * Returns values as `String`.
     * @returns {string}
     */
    toString(): string;
}
