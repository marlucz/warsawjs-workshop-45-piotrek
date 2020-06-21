/**
 * Returns a new function that checks the arguments it receives.
 * Preserves all the other properties that the function has.
 *
 * @param {Function} fn function to wrap
 * @param {string[]} argumentTypes array of types (results of typeof calls)
 */
export function makeTypeSafe(fn, argumentTypes) {
  return new Proxy(fn, {
    apply(target, thisArg, argumentsList) {
      if (argumentsList.length !== argumentTypes.length) {
        throw new TypeError("Incorrect number of arguments");
      }

      for (let i = 0; i < argumentsList.length; i++) {
        if (typeof argumentsList[i] !== argumentTypes[i]) {
          throw new TypeError("Incorrect argument type");
        }
      }

      return Reflect.apply(target, thisArg, argumentsList);
    },
  });
}
