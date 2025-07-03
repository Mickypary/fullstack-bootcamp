import { calculatorDisplay } from "./selectors.js";

import { getAwaitingNextValue } from "./values.js";

function addDecimal() {
  if (getAwaitingNextValue()) {
    return;
  }

  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

export default addDecimal;
