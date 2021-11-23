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
    get values(): T;
    get magnitude(): number;
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
    get x(): number;
    /**
     * Returns y value of the vector.
     * @returns {number}
     */
    get y(): number;
    /**
     * Set the `value` as new x.
     * @param {number} value
     */
    set x(value: number);
    /**
     * Set the `value` as new y.
     * @param {number} value
     */
    set y(value: number);
}
/**
 * A base abstract class for 3-dimensional vectors.
 */
export declare abstract class Vector3Base<T extends TypedArrayLike> extends VectorBase<T> {
    /**
     * Returns x value of the vector.
     * @returns {number}
     */
    get x(): number;
    /**
     * Returns y value of the vector.
     * @returns {number}
     */
    get y(): number;
    /**
     * Returns z value of the vector.
     * @returns {number}
     */
    get z(): number;
    /**
     * Set the `value` as new x.
     * @param {number} value
     */
    set x(value: number);
    /**
     * Set the `value` as new y.
     * @param {number} value
     */
    set y(value: number);
    /**
     * Set the `value` as new z.
     * @param {number} value
     */
    set z(value: number);
}
/**
 * A base abstract class for 4-dimensional vectors.
 */
export declare abstract class Vector4Base<T extends TypedArrayLike> extends VectorBase<T> {
    /**
     * Returns x value of the vector.
     * @returns {number}
     */
    get x(): number;
    /**
     * Returns y value of the vector.
     * @returns {number}
     */
    get y(): number;
    /**
     * Returns z value of the vector.
     * @returns {number}
     */
    get z(): number;
    /**
     * Returns w value of the vector.
     * @returns {number}
     */
    get w(): number;
    /**
     * Set the `value` as new x.
     * @param {number} value
     */
    set x(value: number);
    /**
     * Set the `value` as new y.
     * @param {number} value
     */
    set y(value: number);
    /**
     * Set the `value` as new z.
     * @param {number} value
     */
    set z(value: number);
    /**
     * Set the `value` as new w.
     * @param {number} value
     */
    set w(value: number);
}
