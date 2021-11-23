// src/vector_base.ts
var VectorBase = class {
  get values() {
    return this._values;
  }
  get magnitude() {
    let sumSq = 0;
    for (const val of this._values) {
      sumSq += val ** 2;
    }
    return Math.sqrt(sumSq);
  }
  toString() {
    const dimension = this._values.length;
    return `Vector${dimension}(${this._values.join(", ")})`;
  }
};
var Vector2Base = class extends VectorBase {
  get x() {
    return this._values[0];
  }
  get y() {
    return this._values[1];
  }
  set x(value) {
    this._values[0] = value;
  }
  set y(value) {
    this._values[1] = value;
  }
};
var Vector3Base = class extends VectorBase {
  get x() {
    return this._values[0];
  }
  get y() {
    return this._values[1];
  }
  get z() {
    return this._values[2];
  }
  set x(value) {
    this._values[0] = value;
  }
  set y(value) {
    this._values[1] = value;
  }
  set z(value) {
    this._values[2] = value;
  }
};
var Vector4Base = class extends VectorBase {
  get x() {
    return this._values[0];
  }
  get y() {
    return this._values[1];
  }
  get z() {
    return this._values[2];
  }
  get w() {
    return this._values[3];
  }
  set x(value) {
    this._values[0] = value;
  }
  set y(value) {
    this._values[1] = value;
  }
  set z(value) {
    this._values[2] = value;
  }
  set w(value) {
    this._values[3] = value;
  }
};
export {
  Vector2Base,
  Vector3Base,
  Vector4Base,
  VectorBase
};
