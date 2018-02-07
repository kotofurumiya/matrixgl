"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matrix_1 = require("./matrix");
/**
 * Quaternion which is 4-dimensional complex number.
 * See [Wikipedia](https://en.wikipedia.org/wiki/Quaternion).
 */
var Quaternion = /** @class */ (function () {
    function Quaternion(x, y, z, w) {
        this._values = new Float32Array([x, y, z, w]);
    }
    /**
     * Create a rotation quaternion around `normalizedAxis`.
     * `normalizedAxis` must be normalized.
     * @param {Float32Vector3} normalizedAxis
     * @param {number} radian
     * @returns {Quaternion}
     */
    Quaternion.rotationAround = function (normalizedAxis, radian) {
        var sin = Math.sin(radian / 2.0);
        var cos = Math.cos(radian / 2.0);
        return new Quaternion(normalizedAxis.x * sin, normalizedAxis.y * sin, normalizedAxis.z * sin, cos);
    };
    /**
     * Returns a normalized quaternion.
     * @returns {Quaternion}
     */
    Quaternion.prototype.normalize = function () {
        var mag = this.magnitude;
        if (mag === 0) {
            return this;
        }
        var r = 1 / mag;
        return new Quaternion(this.x * r, this.y * r, this.z * r, this.w * r);
    };
    /**
     * Adds the `other` to the quaternion and returns the sum.
     *
     * This method does not mutate the quaternion.
     * @param {Quaternion} other
     * @returns {Quaternion}
     */
    Quaternion.prototype.add = function (other) {
        return new Quaternion(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
    };
    /**
     * Multiplies the quaternion by `scalar` and returns the product.
     *
     * This method does not mutate the quaternion.
     * @param {number} scalar
     * @returns {Quaternion}
     */
    Quaternion.prototype.mulByScalar = function (scalar) {
        return new Quaternion(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
    };
    /**
     * Calculates dot product.
     * @param {Quaternion} other
     * @returns {number}
     */
    Quaternion.prototype.dot = function (other) {
        return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
    };
    /**
     * Calculates spherical linear interpolation(also known as Slerp) and returns new `Quaternion` between the quaternion and the other.
     * @param {Quaternion} other
     * @param {number} t 0.0 <= t <= 1.0
     * @param {{chooseShorterAngle: boolean}} options Does not work currently. slerp chooses shorter angle regardless of this value.
     * @returns {Quaternion}
     */
    Quaternion.prototype.slerp = function (other, t, options) {
        if (options === void 0) { options = { chooseShorterAngle: true }; }
        var dotProd = this.dot(other);
        var otherQuaternion = other;
        // When the dot product is negative, slerp chooses the longer way.
        // So we should negate the `other` quaternion.
        if (dotProd < 0) {
            dotProd = -dotProd;
            otherQuaternion = other.mulByScalar(-1);
        }
        var omega = Math.acos(dotProd);
        var sinOmega = Math.sin(omega);
        var q1 = this.mulByScalar(Math.sin((1 - t) * omega) / sinOmega);
        var q2 = otherQuaternion.mulByScalar(Math.sin(t * omega) / sinOmega);
        return q1.add(q2);
    };
    Object.defineProperty(Quaternion.prototype, "magnitude", {
        /**
         * Calc magnitude of the quaternion.
         * @returns {number}
         */
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "norm", {
        /**
         * Calc norm of the quaternion.
         * An alias for `magnitude`.
         * @returns {number}
         */
        get: function () {
            return this.magnitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "x", {
        /**
         * Returns x value of the vector.
         * @returns {number}
         */
        get: function () {
            return this._values[0];
        },
        /**
         * Set the `value` as new x.
         * @param {number} value
         */
        set: function (value) {
            this._values[0] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "y", {
        /**
         * Returns y value of the vector.
         * @returns {number}
         */
        get: function () {
            return this._values[1];
        },
        /**
         * Set the `value` as new y.
         * @param {number} value
         */
        set: function (value) {
            this._values[1] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "z", {
        /**
         * Returns z value of the vector.
         * @returns {number}
         */
        get: function () {
            return this._values[2];
        },
        /**
         * Set the `value` as new z.
         * @param {number} value
         */
        set: function (value) {
            this._values[2] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "w", {
        /**
         * Returns w value of the vector.
         * @returns {number}
         */
        get: function () {
            return this._values[3];
        },
        /**
         * Set the `value` as new w.
         * @param {number} value
         */
        set: function (value) {
            this._values[3] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quaternion.prototype, "values", {
        /**
         * Returns values of the quaternion.
         * @returns {Float32Array}
         */
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convert the quaternion to a rotation matrix.
     * @returns {Matrix4x4}
     */
    Quaternion.prototype.toRotationMatrix4 = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        var m11 = 1 - 2 * y * y - 2 * z * z;
        var m12 = 2 * x * y - 2 * w * z;
        var m13 = 2 * x * z + 2 * w * y;
        var m14 = 0;
        var m21 = 2 * x * y + 2 * w * z;
        var m22 = 1 - 2 * x * x - 2 * z * z;
        var m23 = 2 * y * z - 2 * w * x;
        var m24 = 0;
        var m31 = 2 * x * z - 2 * w * y;
        var m32 = 2 * y * z + 2 * w * x;
        var m33 = 1 - 2 * x * x - 2 * y * y;
        var m34 = 0;
        var m41 = 0;
        var m42 = 0;
        var m43 = 0;
        var m44 = 1;
        return new matrix_1.Matrix4x4(m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44);
    };
    /**
     * Returns values as `String`.
     * @returns {string}
     */
    Quaternion.prototype.toString = function () {
        return "Quaternion(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
    };
    return Quaternion;
}());
exports.Quaternion = Quaternion;
