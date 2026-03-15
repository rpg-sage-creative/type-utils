export function rangeError(args) {
    const { argKey, mustBe, value } = args;
    const type = typeof (value);
    const received = type === "string"
        ? `'${value}'`
        : value;
    const message = `The "${argKey}" argument must be ${mustBe.trim()}. Received ${received}`;
    return new RangeError(message);
}
