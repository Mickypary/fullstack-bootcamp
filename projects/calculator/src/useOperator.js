import { calculatorDisplay } from "./selectors.js";
import {
  getAwaitingNextValue,
  setAwaitingNextValue,
  getFirstValue,
  setFirstValue,
  getOperatorValue,
  setOperatorValue,
} from "./values.js";

import calculate from "./calculate.js";

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent); // parseInt can also work
  if (getOperatorValue() && getAwaitingNextValue()) {
    setOperatorValue(operator);
    return;
  }

  if (!getFirstValue()) {
    setFirstValue(currentValue);
  } else {
    const calculation = calculate[getOperatorValue()](
      getFirstValue(),
      currentValue
    );
    console.log(calculation);
    calculatorDisplay.textContent = calculation;
    setFirstValue(calculation);
  }

  setAwaitingNextValue(true);
  setOperatorValue(operator);
}

export default useOperator;
