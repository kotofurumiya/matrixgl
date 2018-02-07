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
/**
 * An abstract class for vectors.
 */
var VectorBase = /** @class */ (function () {
    function VectorBase() {
    }
    Object.defineProperty(VectorBase.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VectorBase.prototype, "magnitude", {
        get: function () {
            var sumSq = this._values.reduce(function (prev, current) { return prev + (Math.pow(current, 2)); }, 0);
            return Math.sqrt(sumSq);
        },
        enumerable: true,
        configurable: true
    });
    VectorBase.prototype.toString = function () {
        var dimension = this._values.length;
        return "Vector" + dimension + "(" + this._values.join(', ') + ")";
    };
    return VectorBase;
}());
exports.VectorBase = VectorBase;
/**
 * A base abstract class for 2-dimensional vectors.
 */
var Vector2Base = /** @class */ (function (_super) {
    __extends(Vector2Base, _super);
    function Vector2Base() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Vector2Base.prototype, "x", {
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
    Object.defineProperty(Vector2Base.prototype, "y", {
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
    return Vector2Base;
}(VectorBase));
exports.Vector2Base = Vector2Base;
/**
 * A base abstract class for 3-dimensional vectors.
 */
var Vector3Base = /** @class */ (function (_super) {
    __extends(Vector3Base, _super);
    function Vector3Base() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Vector3Base.prototype, "x", {
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
    Object.defineProperty(Vector3Base.prototype, "y", {
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
    Object.defineProperty(Vector3Base.prototype, "z", {
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
    return Vector3Base;
}(VectorBase));
exports.Vector3Base = Vector3Base;
/**
 * A base abstract class for 4-dimensional vectors.
 */
var Vector4Base = /** @class */ (function (_super) {
    __extends(Vector4Base, _super);
    function Vector4Base() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Vector4Base.prototype, "x", {
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
    Object.defineProperty(Vector4Base.prototype, "y", {
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
    Object.defineProperty(Vector4Base.prototype, "z", {
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
    Object.defineProperty(Vector4Base.prototype, "w", {
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
    return Vector4Base;
}(VectorBase));
exports.Vector4Base = Vector4Base;
