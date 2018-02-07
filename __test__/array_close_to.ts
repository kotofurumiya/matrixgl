declare namespace jest {
  interface Matchers<R> {
    arrayToBeCloseTo(expected: ArrayLike<number>, delta: number): { message: () => string, pass: boolean};
  }
}

function arrayToBeCloseTo(actual: ArrayLike<number>, expected: ArrayLike<number>, delta: number): { message: () => string, pass: boolean} {
  let pass = true;
  pass = actual.length === expected.length;

  if(!pass) {
    return {
      message: () =>
        `actual length ${actual.length} is different from ${expected.length}`,
      pass: false,
    };
  }

  const differentIndexList: number[] = [];
  for(let i=0; i<actual.length; i++) {
    const diff = Math.abs(actual[i] - expected[i]);
    const elementPass = diff < delta;
    pass = pass && elementPass;

    if(!elementPass) {
      differentIndexList.push(i);
    }
  }

  if(pass) {
    return {
      message: () =>
        `${actual.toString()} is different from ${expected.toString()} at ${differentIndexList}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `${actual.toString()} is different from ${expected.toString()} at ${differentIndexList}`,
      pass: false,
    };
  }
}

expect.extend({
  arrayToBeCloseTo
});