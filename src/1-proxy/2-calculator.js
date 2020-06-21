/**
 * Returns a new object that behaves like a calculator.
 *
 * It can compute simple mathematical expressions in the form of
 * `<float> <operator> <float>`. Available operators are `+`, `-`, `*`, `/`.
 *
 * ```
 * const calculator = createCalculator()
 * calculator['1 + 2'] // 3
 * calculator['50 - 15'] // 35
 * calculator['2.5 * 5'] // 12.5
 * ```
 *
 * @returns a calculator
 */
export function createCalculator() {
  return new Proxy(
    {},
    {
      get(target, prop, receiver) {
        let [firstValue, operator, secondValue] = prop.split(" ");

        switch (operator) {
          case "+":
            return firstValue + secondValue;
          case "-":
            return firstValue - secondValue;
          case "*":
            return firstValue * secondValue;
          case "/":
            return firstValue / secondValue;
        }
      },
    }
  );
}
