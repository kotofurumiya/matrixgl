# Changelog

## 1.0.1

* Fix v1.0.0 did not apply changes to `matrixgl.min.js` and documents.

## 1.0.0

* **\[Breaking Change\]** Rename `perspective` to `frustum`.
* Add new `Matrix4.perspective()`.

## 0.2.0

* Add `xy` to `Vector3` and `xyz` to `Vector4`, that return the part of the vector.
* Add `rotateAround(axis, radian)` to `Matrix4` and static `Matrix4.rotationAround(axis, radian)`.
* Improve `toString()` of vectors.

## 0.1.0

* Add a Quaternion class.

## 0.0.3

* Fix Vector3.normalize() returns NaN if its magnitude is zero.

## 0.0.2

* orthogonal -> orthographic

## 0.0.1

* Initial release with minimal implementation.