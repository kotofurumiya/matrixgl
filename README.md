# MatrixGL

MatrixGL is yet another matrix library for WebGL.

## Install without Node.js

Just download **build/matrixgl.min.js**, and you can ignore all other files(These files are for Node.js).

And put the file(matrixgl.min.js) into your directory.
 
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
const { Vector3, Vector4, Matrix4 } = require('matrixgl');
```

## Basic Usage

MatrixGL has Vector classes and Matrix classes.

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
const vecSub = vec1.sub(vec2);
const vecProd = vec1.mulByScalar(scalar);
const vecMag = vec1.magnitude;
``` 

**Note: MatrixGL's API does not modify the original vector/matrix unlike ordinary OpenGL matrix libraries. So you should assign the result to variables**

There are also Matrix classes.

```javascript
const mat = new Matrix2(1, 2, 3, 4);
console.log(mat.values);
```

Matrices' values are stored in column major order which is WebGL's default order.

In addition to basic methods, `Matrix4` class has special methods. You can generate a transform matrix easily with these methods.

```javascript
const transform = Matrix4.identity()
                         .translate(1, 2, 3)
                         .rotateX(Math.PI)
                         .scale(5, 5, 5);
```

Or you can build the transform matrix manually.

```javascript
const identity = Matrix4.identity();
const scaling = Matrix4.scaling(5, 5, 5);
const rotation = Matrix4.rotationX(Math.PI);
const translation = Matrix4.translation(1, 2, 3);

const transform = identity.mulByMatrix4(translation)
                          .mulByMatrix4(rotation)
                          .mulByMatrix4(scaling);
```

To build a "look at" matrix, use `lookAt` method.

```javascript
const camera = new Vector3(1, 2, 3);
const looAt = new Vector3(4, 5, 6);
const cameraUpDirection = new Vector3(7, 8, 9);

const view = Matrix4.lookAt(camera, lookAt, cameraUpDirection);
```

If you need a projection matrix, use `orthographic` or `perspective` method.

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
  top: 1,
  bottom: -1,
  left: -1,
  right: 1,
  near: 1,
  far: 2
});
```

And combine all above matrices to build a ModelViewProjection matrix.

```javascript
const mvp = perspective.mulByMatrix4(view)
                       .mulByMatrix4(transform);
```

## Usage with WebGL

You can get `Float32Array` from `values` property of vectors or matrices.

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