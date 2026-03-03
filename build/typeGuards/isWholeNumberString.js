const WholeNumberRegExp = /^\d+$/;
export function isWholeNumberString(value) {
    return typeof (value) === "string" && WholeNumberRegExp.test(value);
}
