import { Matrix4 } from '../src/index';
import { Vector3 } from "../src/float32vector";
import './lib/array_close_to';

const delta = 0.001;

//
// Matrix4
//
describe('Matrix4', () => {
  test('Model Matrix', () => {
    const model = Matrix4.identity()
                         .translate(40, 0, -20)
                         .rotateZ(Math.PI / 8)
                         .scale(1, 2,3)

    expect(model.values).arrayToBeCloseTo([
      0.9238795042037964,0.3826834261417389,0,0,
      -0.7653668522834778,1.8477590084075928,0,0,
      0,0,3,0,
      40,0,-20,1
    ], delta);
  });

  test('View Matrix', () => {
    const cameraPosition = new Vector3(0, 60, 90);
    const lookAtPosition = new Vector3(0, 0, 0);
    const upDirection    = new Vector3(0, 1, 0);
    const view = Matrix4.lookAt(cameraPosition, lookAtPosition, upDirection);

    expect(view.values).arrayToBeCloseTo([
      1,0,0,0,
      0,0.8320503234863281,0.5547001957893372,0,
      0,-0.5547001957893372,0.8320503234863281,0,
      0,0,-108.16654205322266,1
    ], delta);
  });

  test('Projection Matrix Orthographic', () => {
    const left   = -40;
    const right  = 40;
    const top    = 40;
    const bottom = -40;
    const near   = 30;
    const far    = 150;
    const projection = Matrix4.orthographic({ top, right, left, bottom, near, far });

    expect(projection.values).arrayToBeCloseTo([
      0.02500000037252903,0,0,0,
      0,0.02500000037252903,0,
      0,0,0,-0.01666666753590107,
      0,0,0,-1.5,1
    ], delta);
  });

  test('Projection Matrix Perspective', () => {
    const left   = -40;
    const right  = 40;
    const top    = 40;
    const bottom = -40;
    const near   = 30;
    const far    = 150;
    const projection = Matrix4.perspective({ top, right, left, bottom, near, far });

    expect(projection.values).arrayToBeCloseTo([
      0.75,0,0,0,
      0,0.75,0,0,
      0,0,-1.5,-1,
      0,0,-75,0
    ], delta);
  });
});