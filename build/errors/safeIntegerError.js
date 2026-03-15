import { rangeError } from "./rangeError.js";
import { typeError } from "./typeError.js";
export function safeIntegerError(args) {
    const { argKey, max, min, value } = args;
    const hasMax = typeof (max) === "number";
    const hasMin = typeof (min) === "number";
    let mustBe;
    if (hasMax && hasMin) {
        mustBe = `a safe integer between ${min} and ${max} (inclusive)`;
    }
    else if (hasMax) {
        mustBe = `a safe integer less than or equal to ${max}`;
    }
    else if (hasMin) {
        mustBe = `a safe integer greater than or equal to ${min}`;
    }
    else {
        mustBe = "a safe integer";
    }
    return typeof (value) === "number"
        ? rangeError({ argKey, mustBe, value })
        : typeError({ argKey, mustBe, value });
}
