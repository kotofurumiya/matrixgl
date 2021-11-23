import { Assertion } from "uvu/assert";
import { compare } from 'uvu/diff';

export const toBeCloseTo = (actual: number, expected: number, delta: number) => {
  const diff = Math.abs(actual - expected);
  if(diff > delta) {
    throw new Assertion({
      message: `unacceptable diff with delta=${delta}`,
      operator: 'toBeCloseTo',
      details: compare(actual, expected),
      expects: expected,
      actual
    });
  }
}

export const arrayToBeCloseTo = (actual: ArrayLike<number>, expected: ArrayLike<number>, delta: number) => {
  if(actual.length !== expected.length) {
    throw new Assertion({
      message: 'incompatible length',
      operator: 'arrayToBeCloseTo',
      details: compare(actual.length, expected.length),
      expects: expected,
      actual
    });
  }

  type Difference = {
    index: number,
    diff: number
  };
  const differenceList: Difference[] = [];
  for(let i=0; i<actual.length; i++) {
    const diff = Math.abs(actual[i] - expected[i]);
    if(diff > delta) {
      differenceList.push({
        index: i,
        diff
      });
    }
  }

  if(differenceList.length > 0) {
    throw new Assertion({
      message: `unacceptable diffs with delta=${delta}`,
      operator: 'arrayCloseTo',
      details: compare(differenceList, []),
      expects: expected,
      actual
    });
  }
};
