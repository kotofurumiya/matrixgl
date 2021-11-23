import { suite } from 'uvu';
import { Matrix4, Vector3 } from '../';
import { arrayToBeCloseTo } from './lib/close_to';

const Matrix4Suite = suite('Matrix4');
const delta = 0.001;

//
// Matrix4
//
Matrix4Suite('Model Matrix', () => {
  const model = Matrix4.identity()
                       .translate(40, 0, -20)
                       .rotateZ(Math.PI / 8)
                       .scale(1, 2,3)

  arrayToBeCloseTo(model.values, [
    0.9238795042037964,0.3826834261417389,0,0,
    -0.7653668522834778,1.8477590084075928,0,0,
    0,0,3,0,
    40,0,-20,1
  ], delta);
});

Matrix4Suite('View Matrix', () => {
  const cameraPosition = new Vector3(0, 60, 90);
  const lookAtPosition = new Vector3(0, 0, 0);
  const upDirection    = new Vector3(0, 1, 0);
  const view = Matrix4.lookAt(cameraPosition, lookAtPosition, upDirection);

  arrayToBeCloseTo(view.values, [
    1,0,0,0,
    0,0.8320503234863281,0.5547001957893372,0,
    0,-0.5547001957893372,0.8320503234863281,0,
    0,0,-108.16654205322266,1
  ], delta);
});

Matrix4Suite('Projection Matrix Orthographic', () => {
  const left   = -40;
  const right  = 40;
  const top    = 40;
  const bottom = -40;
  const near   = 30;
  const far    = 150;
  const projection = Matrix4.orthographic({ top, right, left, bottom, near, far });

  arrayToBeCloseTo(projection.values, [
    0.02500000037252903,0,0,0,
    0,0.02500000037252903,0,
    0,0,0,-0.01666666753590107,
    0,0,0,-1.5,1
  ], delta);
});

Matrix4Suite('Projection Matrix Frustum', () => {
  const left   = -40;
  const right  = 40;
  const top    = 40;
  const bottom = -40;
  const near   = 30;
  const far    = 150;
  const frustum = Matrix4.frustum({ top, right, left, bottom, near, far });

  arrayToBeCloseTo(frustum.values, [
    0.75,0,0,0,
    0,0.75,0,0,
    0,0,-1.5,-1,
    0,0,-75,0
  ], delta);
});

Matrix4Suite('Projection Matrix Perspective', () => {
  const fovY = 60 * Math.PI / 180;
  const aspectRatio = 500 / 500;
  const near = 30;
  const far  = 300;
  const projection = Matrix4.perspective({ fovYRadian: fovY, aspectRatio, near, far });

  arrayToBeCloseTo(projection.values, [
    1.7320507764816284,0,0,0,
    0,1.7320507764816284,0,0,
    0,0,-1.2222222089767456,-1,
    0,0,-66.66666412353516,0
  ], delta);
});

Matrix4Suite.run();