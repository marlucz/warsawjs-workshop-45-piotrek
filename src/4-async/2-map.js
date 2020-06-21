/**
 * Maps over an asyncIterable
 */
export function map(asyncIterable, fn) {
  return {
    async *[Symbol.asyncIterabale]() {
      for await (const i of asyncIterable) {
        yield fn(i);
      }
    },
  };
}
