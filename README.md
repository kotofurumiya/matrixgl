# MatrixGL

MatrixGL is yet another matrix library for WebGL.

## Install without Node.js

Download the zip file from [Releases page on GitHub](https://github.com/kotofurumiya/matrixgl/releases), and unzip the file.

You will see **matrixgl.min.js** file in the **build** directory. Copy the file(matrixgl.min.js) into your directory. You can ignore all other files(These files are for Node.js).

Then add below code to your HTML file.

```html
<script src="matrixgl.min.js"></script>
<script>
    // Write your code here.
</script>
```

## Install with Node.js

Run the install command.

```
$ npm install matrixgl --save
```

Then, import MatrixGL in JavaScript.

```javascript
const { Vector3, Vector4, Matrix4, Quaternion } = require('matrixgl');
```

## Basic Usage

MatrixGL has Vector, Matrix and Quaternion class.

You can use it simply. For example:

```javascript
// create 4-dimensional vector.
const vec = new Vector4(1, 2, 3, 4);

// display elements.
console.log(vec.x); // 1
console.log(vec.y); // 2
console.log(vec.z); // 3
console.log(vec.w); // 4

// all values
console.log(vec.values);
```

Vector classes also have some operation.

```javascript
const vec1 = new Vector4(1, 2, 3, 4);
const vec2 = new Vector4(5, 6, 7, 8);
const scalar = 5;

// calculate
const vecSum = vec1.add(vec2);
const vecDiff = vec1.sub(vec2);
const vecProd = vec1.mulByScalar(scalar);
const vecMag = vec1.magnitude;
``` 

**Note: MatrixGL's API does not modify the original vector/matrix unlike ordinary OpenGL matrix libraries. So you should assign the result to variables**

There are also Matrix classes.

```javascript
const mat = new Matrix2(1, 2, 3, 4);
console.log(mat.values);
```

Matrices' values are stored in "column major order" which is the default order of WebGL. This means `new Matrix(1, 2, 3, 4);` represents the first row is `[1, 3]` and second row is `[2, 4]`.

If you are bored with enumerating numbers 16 times to create a Matrix4, please use a spread operator. 

```javascript
const values = new Array(16);
values.fill(0);

const matrix = new Matrix4(...values);
```

In addition to basic methods, `Matrix4` class has special methods. You can generate a model matrix easily with these methods.

```javascript
const model = Matrix4.identity()
                      .translate(1, 2, 3)
                      .rotateX(Math.PI)
                      .scale(5, 5, 5);
```

Or you can build a model matrix manually.

```javascript
const identity = Matrix4.identity();
const scaling = Matrix4.scaling(5, 5, 5);
const rotation = Matrix4.rotationX(Math.PI);
const translation = Matrix4.translation(1, 2, 3);

const model = identity.mulByMatrix4(translation)
                       .mulByMatrix4(rotation)
                       .mulByMatrix4(scaling);
```

If you want a rotation matrix about an arbitrary axis, use `rotateAround(axis, radian)` .
```javascript
// An axis vector must be normalized.
const axis = new Vector3(1, 2, 3).normalize();
const rotation = Matrix4.identity()
                         .rotateAround(axis, Math.PI);
```

or use `Matrix4.rotationAround(axis, radian)`.

```javascript
const rotation = Matrix4.rotationAround(axis, Math.PI);
```

To build a "look at" matrix, use `lookAt` method.

```javascript
const camera = new Vector3(1, 2, 3);
const lookAt = new Vector3(4, 5, 6);
const cameraUpDirection = new Vector3(7, 8, 9);

const view = Matrix4.lookAt(camera, lookAt, cameraUpDirection);
```

If you need a projection matrix, use `Matrix4.orthographic` or `Matrix4.perspective` method.

```javascript
const orthographic = Matrix4.orthographic({
  top: 1,
  bottom: -1,
  left: -1,
  right: 1,
  near: 1,
  far: 2
});

const perspective = Matrix4.perspective({
  fovYRadian: 60 * Math.PI / 180,
  aspectRatio: 1,
  near: 1,
  far: 2
});
```

And combine all above matrices to build a ModelViewProjection matrix.

```javascript
const mvp = perspective.mulByMatrix4(view)
                       .mulByMatrix4(model);
```

## Quaternion

MatrixGL supports quaternions for rotation.

```javascript
// Create a quaternion.
const q = new Quaternion(1, 2, 3, 4);
```

To create a rotation matrix from a quaternion, use `Quaternion.rotationAround(axis, rad)` and `toRotationMatrix4()`.

```javascript
// An axis must be normalized.
const axis = new Vector3(1, 2, 3).normalize();
const radian = 45 * Math.PI / 180;

// Create a quaternion from the axis and radian.
const q = Quaternion.rotationAround(axis, radian);

//　Convert the rotation quaternion to a rotation matrix.
const rotation = q.toRotationMatrix4();
```

To interpolate between two quaternions, use `slerp(other, t)`.

```javascript
// To interpolate quaternions, they must be normalized.
const q1 = new Quaternion(1, 2, 3, 4).normalize();
const q2 = new Quaternion(5, 6, 7, 8).normalize();

// interpolate with t = 0.5.
// t is from 0.0 to 1.0. 
const interpolated = q1.slerp(q2, 0.5);
```

## Usage with WebGL

You can get `Float32Array` from `values` property of vectors, matrices or quaternions.

So if you use MatrixGL with WebGL, just pass the vector's(or matrix's) `values`. 

```javascript
// Buffer
gl.bufferData(gl.ARRAY_BUFFER, vec1.values, gl.STATIC_DRAW);

// Uniform Variable
gl.uniformMatrix4fv(mvpLocation, false, mvp.values);
```

## API Document

For more information, see also [API Document](https://kotofurumiya.github.io/matrixgl).

## How to Build from Source

Install dependencies.

```
$ npm install
```

Build.

```
$ npm run build
```

## License

MIT License. See [LICENSE.md](https://github.com/kotofurumiya/matrixgl/blob/master/LICENSE.md).