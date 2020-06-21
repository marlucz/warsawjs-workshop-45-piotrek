const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Yields integers from 10 to 0 with waiting a period of time before each yield.
 * @param {number} waitTimeMs time to wait between yields in milliseconds
 */

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

export function countdown(waitTimeMs) {
  return {
    async *[Symbol.asyncIterator]() {
      for (let i = 10; i >= 0; i--) {
        yield i;
        await sleep(waitTimeMs);
      }
    },
  };
}
