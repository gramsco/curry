const curry = require("./curry");

describe("This works", () => {
  it("does the same if all arguments are provided", () => {
    const fn = (a, b, c) => a + b + c;
    const currified = curry(fn);
    const args = [5, 10, 20];
    expect(fn(...args)).toEqual(currified(...args));
  });

  it("returns a currified version if one or more arguments are not present", () => {
    const fn = (a, b, c) => a + b + c;
    const currified = curry(fn);
    const partialA = currified(1);
    const partialAB = currified(1, 2);
    const all = currified(1, 2, 3);
    expect(partialA(2, 3)).toEqual(partialAB(3));
    expect(all).toEqual(partialA(2, 3));

    function check(a, b) {
      return a === b;
    }

    const _check = curry(check);

    const isA = _check(5);
    expect(isA(10)).toBe(false);
    expect(isA(5)).toBe(true);
    expect(_check(5, 5)).toBe(true);
    expect(_check(5, 10)).toBe(false);
  });
});
