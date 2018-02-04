export declare type TypedArrayLike = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
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
export declare abstract class VectorBase<T extends TypedArrayLike> implements Vector<T> {
    /**
     * Values that the vector contains.
     */
    protected _values: T;
    readonly values: T;
    readonly magnitude: number;
    toString(): string;
}
/**
 * A base abstract class for 2-dimensional vectors.
 */
export declare abstract class Vector2Base<T extends TypedArrayLike> extends VectorBase<T> {
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
}
/**
 * A base abstract class for 3-dimensional vectors.
 */
export declare abstract class Vector3Base<T extends TypedArrayLike> extends VectorBase<T> {
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
}
/**
 * A base abstract class for 4-dimensional vectors.
 */
export declare abstract class Vector4Base<T extends TypedArrayLike> extends VectorBase<T> {
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
}
