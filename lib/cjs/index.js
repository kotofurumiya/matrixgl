var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  Float32Vector2: () => Float32Vector2,
  Float32Vector3: () => Float32Vector3,
  Float32Vector4: () => Float32Vector4,
  Matrix2: () => Matrix2,
  Matrix2x2: () => Matrix2x2,
  Matrix3: () => Matrix3,
  Matrix3x3: () => Matrix3x3,
  Matrix4: () => Matrix4,
  Matrix4x4: () => Matrix4x4,
  Quaternion: () => Quaternion,
  Vector2: () => Vector2,
  Vector3: () => Vector3,
  Vector4: () => Vector4
});

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

// src/quaternion.ts
var Quaternion = class {
  constructor(x, y, z, w) {
    this._values = new Float32Array([x, y, z, w]);
  }
  static rotationAround(normalizedAxis, radian) {
    const sin = Math.sin(radian / 2);
    const cos = Math.cos(radian / 2);
    return new Quaternion(normalizedAxis.x * sin, normalizedAxis.y * sin, normalizedAxis.z * sin, cos);
  }
  normalize() {
    const mag = this.magnitude;
    if (mag === 0) {
      return this;
    }
    const r = 1 / mag;
    return new Quaternion(this.x * r, this.y * r, this.z * r, this.w * r);
  }
  add(other) {
    return new Quaternion(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
  }
  mulByScalar(scalar) {
    return new Quaternion(this.x * scalar, this.y * scalar, this.z * scalar, this.w * scalar);
  }
  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
  }
  slerp(other, t, options = { chooseShorterAngle: true }) {
    let dotProd = this.dot(other);
    let otherQuaternion = other;
    if (dotProd < 0) {
      dotProd = -dotProd;
      otherQuaternion = other.mulByScalar(-1);
    }
    const omega = Math.acos(dotProd);
    const sinOmega = Math.sin(omega);
    const q1 = this.mulByScalar(Math.sin((1 - t) * omega) / sinOmega);
    const q2 = otherQuaternion.mulByScalar(Math.sin(t * omega) / sinOmega);
    return q1.add(q2);
  }
  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  get norm() {
    return this.magnitude;
  }
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
  get values() {
    return this._values;
  }
  toRotationMatrix4() {
    const x = this.x;
    const y = this.y;
    const z = this.z;
    const w = this.w;
    const m11 = 1 - 2 * y * y - 2 * z * z;
    const m12 = 2 * x * y - 2 * w * z;
    const m13 = 2 * x * z + 2 * w * y;
    const m14 = 0;
    const m21 = 2 * x * y + 2 * w * z;
    const m22 = 1 - 2 * x * x - 2 * z * z;
    const m23 = 2 * y * z - 2 * w * x;
    const m24 = 0;
    const m31 = 2 * x * z - 2 * w * y;
    const m32 = 2 * y * z + 2 * w * x;
    const m33 = 1 - 2 * x * x - 2 * y * y;
    const m34 = 0;
    const m41 = 0;
    const m42 = 0;
    const m43 = 0;
    const m44 = 1;
    return new Matrix4x4(m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44);
  }
  toString() {
    return `Quaternion(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
  }
};

// src/matrix.ts
var Matrix2x2 = class {
  constructor(m11, m21, m12, m22) {
    this._values = new Float32Array([
      m11,
      m21,
      m12,
      m22
    ]);
  }
  static identity() {
    return new Matrix2x2(1, 0, 0, 1);
  }
  get values() {
    return this._values;
  }
  toString() {
    return this._values.toString();
  }
};
var Matrix3x3 = class {
  constructor(m11, m21, m31, m12, m22, m32, m13, m23, m33) {
    this._values = new Float32Array([
      m11,
      m21,
      m31,
      m12,
      m22,
      m32,
      m13,
      m23,
      m33
    ]);
  }
  static identity() {
    return new Matrix3x3(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }
  get values() {
    return this._values;
  }
  toString() {
    return this._values.toString();
  }
};
var Matrix4x4 = class {
  constructor(m11, m21, m31, m41, m12, m22, m32, m42, m13, m23, m33, m43, m14, m24, m34, m44) {
    this._values = new Float32Array([
      m11,
      m21,
      m31,
      m41,
      m12,
      m22,
      m32,
      m42,
      m13,
      m23,
      m33,
      m43,
      m14,
      m24,
      m34,
      m44
    ]);
  }
  static identity() {
    return new Matrix4x4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  static translation(tx, ty, tz) {
    return new Matrix4x4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
  }
  static scaling(sx, sy, sz) {
    return new Matrix4x4(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
  }
  static rotationX(radian) {
    const sin = Math.sin(radian);
    const cos = Math.cos(radian);
    return new Matrix4x4(1, 0, 0, 0, 0, cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1);
  }
  static rotationY(radian) {
    const sin = Math.sin(radian);
    const cos = Math.cos(radian);
    return new Matrix4x4(cos, 0, -sin, 0, 0, 1, 0, 0, sin, 0, cos, 0, 0, 0, 0, 1);
  }
  static rotationZ(radian) {
    const sin = Math.sin(radian);
    const cos = Math.cos(radian);
    return new Matrix4x4(cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  static rotationAround(normalizedAxis, radian) {
    const q = Quaternion.rotationAround(normalizedAxis, radian);
    return q.toRotationMatrix4();
  }
  static lookAt(cameraPosition, lookAtPosition, cameraUp) {
    const zAxis = cameraPosition.sub(lookAtPosition).normalize();
    const xAxis = cameraUp.cross(zAxis).normalize();
    const yAxis = zAxis.cross(xAxis).normalize();
    return new Matrix4x4(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, -cameraPosition.dot(xAxis), -cameraPosition.dot(yAxis), -cameraPosition.dot(zAxis), 1);
  }
  static orthographic(argsObject) {
    const top = argsObject.top;
    const bottom = argsObject.bottom;
    const left = argsObject.left;
    const right = argsObject.right;
    const near = argsObject.near;
    const far = argsObject.far;
    return new Matrix4x4(2 / (right - left), 0, 0, 0, 0, 2 / (top - bottom), 0, 0, 0, 0, -2 / (far - near), 0, -(right + left) / (right - left), -(top + bottom) / (top - bottom), -(far + near) / (far - near), 1);
  }
  static frustum(argsObject) {
    const top = argsObject.top;
    const bottom = argsObject.bottom;
    const left = argsObject.left;
    const right = argsObject.right;
    const near = argsObject.near;
    const far = argsObject.far;
    return new Matrix4x4(2 * near / (right - left), 0, 0, 0, 0, 2 * near / (top - bottom), 0, 0, (right + left) / (right - left), (top + bottom) / (top - bottom), -(far + near) / (far - near), -1, 0, 0, -2 * far * near / (far - near), 0);
  }
  static perspective(argsObject) {
    const top = argsObject.near * Math.tan(argsObject.fovYRadian * 0.5);
    const height = top * 2;
    const width = argsObject.aspectRatio * height;
    const left = -0.5 * width;
    const right = left + width;
    const bottom = top - height;
    return Matrix4x4.frustum({
      top,
      bottom,
      left,
      right,
      near: argsObject.near,
      far: argsObject.far
    });
  }
  mulByMatrix4x4(other) {
    const m11 = this._values[0];
    const m12 = this._values[4];
    const m13 = this._values[8];
    const m14 = this._values[12];
    const m21 = this._values[1];
    const m22 = this._values[5];
    const m23 = this._values[9];
    const m24 = this._values[13];
    const m31 = this._values[2];
    const m32 = this._values[6];
    const m33 = this._values[10];
    const m34 = this._values[14];
    const m41 = this._values[3];
    const m42 = this._values[7];
    const m43 = this._values[11];
    const m44 = this._values[15];
    const o11 = other.values[0];
    const o12 = other.values[4];
    const o13 = other.values[8];
    const o14 = other.values[12];
    const o21 = other.values[1];
    const o22 = other.values[5];
    const o23 = other.values[9];
    const o24 = other.values[13];
    const o31 = other.values[2];
    const o32 = other.values[6];
    const o33 = other.values[10];
    const o34 = other.values[14];
    const o41 = other.values[3];
    const o42 = other.values[7];
    const o43 = other.values[11];
    const o44 = other.values[15];
    const p11 = m11 * o11 + m12 * o21 + m13 * o31 + m14 * o41;
    const p12 = m11 * o12 + m12 * o22 + m13 * o32 + m14 * o42;
    const p13 = m11 * o13 + m12 * o23 + m13 * o33 + m14 * o43;
    const p14 = m11 * o14 + m12 * o24 + m13 * o34 + m14 * o44;
    const p21 = m21 * o11 + m22 * o21 + m23 * o31 + m24 * o41;
    const p22 = m21 * o12 + m22 * o22 + m23 * o32 + m24 * o42;
    const p23 = m21 * o13 + m22 * o23 + m23 * o33 + m24 * o43;
    const p24 = m21 * o14 + m22 * o24 + m23 * o34 + m24 * o44;
    const p31 = m31 * o11 + m32 * o21 + m33 * o31 + m34 * o41;
    const p32 = m31 * o12 + m32 * o22 + m33 * o32 + m34 * o42;
    const p33 = m31 * o13 + m32 * o23 + m33 * o33 + m34 * o43;
    const p34 = m31 * o14 + m32 * o24 + m33 * o34 + m34 * o44;
    const p41 = m41 * o11 + m42 * o21 + m43 * o31 + m44 * o41;
    const p42 = m41 * o12 + m42 * o22 + m43 * o32 + m44 * o42;
    const p43 = m41 * o13 + m42 * o23 + m43 * o33 + m44 * o43;
    const p44 = m41 * o14 + m42 * o24 + m43 * o34 + m44 * o44;
    return new Matrix4x4(p11, p21, p31, p41, p12, p22, p32, p42, p13, p23, p33, p43, p14, p24, p34, p44);
  }
  mulByMatrix4(other) {
    return this.mulByMatrix4x4(other);
  }
  translate(tx, ty, tz) {
    const t = Matrix4x4.translation(tx, ty, tz);
    return this.mulByMatrix4x4(t);
  }
  scale(sx, sy, sz) {
    const s = Matrix4x4.scaling(sx, sy, sz);
    return this.mulByMatrix4x4(s);
  }
  rotateX(radian) {
    const rx = Matrix4x4.rotationX(radian);
    return this.mulByMatrix4x4(rx);
  }
  rotateY(radian) {
    const ry = Matrix4x4.rotationY(radian);
    return this.mulByMatrix4x4(ry);
  }
  rotateZ(radian) {
    const rz = Matrix4x4.rotationZ(radian);
    return this.mulByMatrix4x4(rz);
  }
  rotateAround(normalizedAxis, radian) {
    const r = Matrix4x4.rotationAround(normalizedAxis, radian);
    return this.mulByMatrix4x4(r);
  }
  get values() {
    return this._values;
  }
  toString() {
    return this._values.toString();
  }
};
var Matrix2 = Matrix2x2;
var Matrix3 = Matrix3x3;
var Matrix4 = Matrix4x4;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Float32Vector2,
  Float32Vector3,
  Float32Vector4,
  Matrix2,
  Matrix2x2,
  Matrix3,
  Matrix3x3,
  Matrix4,
  Matrix4x4,
  Quaternion,
  Vector2,
  Vector3,
  Vector4
});
