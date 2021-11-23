var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/vector_base.ts
__export(exports, {
  Vector2Base: () => Vector2Base,
  Vector3Base: () => Vector3Base,
  Vector4Base: () => Vector4Base,
  VectorBase: () => VectorBase
});
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Vector2Base,
  Vector3Base,
  Vector4Base,
  VectorBase
});
