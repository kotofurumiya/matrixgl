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

// src/float32vector.ts
var Float32Vector2 = class extends Vector2Base {
  constructor(x, y) {
    super();
    this._values = new Float32Array([x, y]);
  }
  add(other) {
    return new Float32Vector2(this.x + other.x, this.y + other.y);
  }
  sub(other) {
    return new Float32Vector2(this.x - other.x, this.y - other.y);
  }
  mulByScalar(scalar) {
    return new Float32Vector2(this.x * scalar, this.y * scalar);
  }
};
var Float32Vector3 = class extends Vector3Base {
  constructor(x, y, z) {
    super();
    this._values = new Float32Array([x, y, z]);
  }
  add(other) {
    return new Float32Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }
  sub(other) {
    return new Float32Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
  }
  mulByScalar(scalar) {
    return new Float32Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }
  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
  cross(other) {
    const cx = this.y * other.z - this.z * other.y;
    const cy = this.z * other.x - this.x * other.z;
    const cz = this.x * other.y - this.y * other.x;
    return new Float32Vector3(cx, cy, cz);
  }
  normalize() {
    const mag = this.magnitude;
    if (mag === 0) {
      return this;
    }
    return new Float32Vector3(this.x / mag, this.y / mag, this.z / mag);
  }
  get xy() {
    return new Float32Vector2(this.x, this.y);
  }
};
var Float32Vector4 = class extends Vector4Base {
  constructor(x, y, z, w) {
    super();
    this._values = new Float32Array([x, y, z, w]);
  }
  add(other) {
    return new Float32Vector4(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
  }
  sub(other) {
    return new Float32Vector4(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
  }
  mulByScalar(scalar) {
    return new Float32Vector4(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
  }
  get xyz() {
    return new Float32Vector3(this.x, this.y, this.z);
  }
};
var Vector2 = Float32Vector2;
var Vector3 = Float32Vector3;
var Vector4 = Float32Vector4;
export {
  Float32Vector2,
  Float32Vector3,
  Float32Vector4,
  Vector2,
  Vector3,
  Vector4
};
