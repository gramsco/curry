function curry(fn) {
  return (...args) => {
    const fnLength = fn.length;
    const argsLength = args.length;
    if (fnLength === argsLength) {
      return fn(...args);
    }
    return (...newArgs) => fn(...args, ...newArgs);
  };
}
module.exports = curry;

// function fallback(fn, config) {
//   return (...args) => {
//     let result = null;
//     try {
//       const fnLength = fn.length;
//       const argsLength = args.length;
//       const notEnoughArgs = fnLength !== argsLength;
//       if (Math.random() > 0.5) throw new Error("boom");
//       if (notEnoughArgs) {
//         const newArgs = config.notEnoughArgs(args, fnLength);
//         result = fn(...newArgs);
//       }
//       result = fn(...args);
//     } catch (err) {
//       if (config.error) {
//         result = config.error();
//       }
//     }
//     if (typeof result !== config.returnType) {
//       return config.onTypeError(result, args);
//     }
//     return result;
//   };
// }

// function fill(withWhat) {
//   return (args, fnLength) => {
//     while (args.length < fnLength) {
//       args.push(withWhat);
//     }
//     return args;
//   };
// }

// function _return(x, cbk) {
//   return () => {
//     if (cbk) cbk();
//     return x;
//   };
// }

// const Patterns = {
//   number: "number",
// };

// const addThreeNumbers = fallback(
//   (...args) => args.reduce((acc, val) => acc + val, 0),
//   {
//     returnPattern: Patterns.number,
//     onTypeError: (result, args) => 2,
//     notEnoughArgs: fill(0),
//     error: _return(0, () => console.log("aie")),
//   }
// );

// const r = addThreeNumbers("a", "b", "c");
// console.log(r);
