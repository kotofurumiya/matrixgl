"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vector_base_1 = require("./vector_base");
/**
 * A 2-dimensional vector of single-precision float numbers.
 */
var Float32Vector2 = /** @class */ (function (_super) {
    __extends(Float32Vector2, _super);
    function Float32Vector2(x, y) {
        var _this = _super.call(this) || this;
        _this._values = new Float32Array([x, y]);
        return _this;
    }
    /**
     * Add `other` to the vector and returns new `Float32Vector2`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector2} other
     * @returns {Float32Vector2}
     */
    Float32Vector2.prototype.add = function (other) {
        return new Float32Vector2(this.x + other.x, this.y + other.y);
    };
    /**
     * Subtract `other` from the vector and returns new `Float32Vector2`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector2} other
     * @returns {Float32Vector2}
     */
    Float32Vector2.prototype.sub = function (other) {
        return new Float32Vector2(this.x - other.x, this.y - other.y);
    };
    /**
     * Multiply the vector by `scalar` and returns new `Float32Vector2`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Float32Vector2}
     */
    Float32Vector2.prototype.mulByScalar = function (scalar) {
        return new Float32Vector2(this.x * scalar, this.y * scalar);
    };
    return Float32Vector2;
}(vector_base_1.Vector2Base));
exports.Float32Vector2 = Float32Vector2;
/**
 * A 3-dimensional vector of single-precision float numbers.
 */
var Float32Vector3 = /** @class */ (function (_super) {
    __extends(Float32Vector3, _super);
    function Float32Vector3(x, y, z) {
        var _this = _super.call(this) || this;
        _this._values = new Float32Array([x, y, z]);
        return _this;
    }
    /**
     * Add `other` to the vector and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector3} other
     * @returns {Float32Vector3}
     */
    Float32Vector3.prototype.add = function (other) {
        return new Float32Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    };
    /**
     * Subtract `other` from the vector and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector3} other
     * @returns {Float32Vector3}
     */
    Float32Vector3.prototype.sub = function (other) {
        return new Float32Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
    };
    /**
     * Multiply the vector by `scalar` and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Float32Vector3}
     */
    Float32Vector3.prototype.mulByScalar = function (scalar) {
        return new Float32Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    };
    /**
     * Calculate dot product.
     * @param {Float32Vector3} other
     * @returns {number}
     */
    Float32Vector3.prototype.dot = function (other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    };
    /**
     * Calculate cross product.
     * @param {Float32Vector3} other
     * @returns {Float32Vector3}
     */
    Float32Vector3.prototype.cross = function (other) {
        var cx = this.y * other.z - this.z * other.y;
        var cy = this.z * other.x - this.x * other.z;
        var cz = this.x * other.y - this.y * other.x;
        return new Float32Vector3(cx, cy, cz);
    };
    /**
     * Normalize the vector and returns new `Float32Vector3`.
     *
     * This method does not mutate the vector.
     * @returns {Float32Vector3}
     */
    Float32Vector3.prototype.normalize = function () {
        var mag = this.magnitude;
        if (mag === 0) {
            return this;
        }
        return new Float32Vector3(this.x / mag, this.y / mag, this.z / mag);
    };
    Object.defineProperty(Float32Vector3.prototype, "xy", {
        /**
         * Returns xy values of the vector as `Float32Vector2`.
         * @returns {Float32Vector2}
         */
        get: function () {
            return new Float32Vector2(this.x, this.y);
        },
        enumerable: true,
        configurable: true
    });
    return Float32Vector3;
}(vector_base_1.Vector3Base));
exports.Float32Vector3 = Float32Vector3;
/**
 * A 4-dimensional vector of single-precision float numbers.
 */
var Float32Vector4 = /** @class */ (function (_super) {
    __extends(Float32Vector4, _super);
    function Float32Vector4(x, y, z, w) {
        var _this = _super.call(this) || this;
        _this._values = new Float32Array([x, y, z, w]);
        return _this;
    }
    /**
     * Add `other` to the vector and returns new `Float32Vector4`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector4} other
     * @returns {Float32Vector4}
     */
    Float32Vector4.prototype.add = function (other) {
        return new Float32Vector4(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
    };
    /**
     * Subtract `other` from the vector and returns new `Float32Vector4`.
     *
     * This method does not mutate the vector.
     * @param {Float32Vector4} other
     * @returns {Float32Vector4}
     */
    Float32Vector4.prototype.sub = function (other) {
        return new Float32Vector4(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
    };
    /**
     * Multiply the vector by `scalar` and returns new `Float32Vector4`.
     *
     * This method does not mutate the vector.
     * @param {number} scalar
     * @returns {Float32Vector4}
     */
    Float32Vector4.prototype.mulByScalar = function (scalar) {
        return new Float32Vector4(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
    };
    Object.defineProperty(Float32Vector4.prototype, "xyz", {
        /**
         * Returns xyz values of the vector as `Float32Vector3`.
         * @returns {Float32Vector3}
         */
        get: function () {
            return new Float32Vector3(this.x, this.y, this.z);
        },
        enumerable: true,
        configurable: true
    });
    return Float32Vector4;
}(vector_base_1.Vector4Base));
exports.Float32Vector4 = Float32Vector4;
/**
 * An alias for `Float32Vector2`.
 * @type {Float32Vector2}
 */
exports.Vector2 = Float32Vector2;
/**
 * An alias for `Float32Vector3`.
 * @type {Float32Vector3}
 */
exports.Vector3 = Float32Vector3;
/**
 * An alias for `Float32Vector4`.
 * @type {Float32Vector4}
 */
exports.Vector4 = Float32Vector4;
