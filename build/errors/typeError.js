export function typeError(args) {
    const { argKey, mustBe, value } = args;
    let received;
    if (value === null) {
        received = "null";
    }
    else if (value === undefined) {
        received = "undefined";
    }
    else {
        const type = typeof (value);
        received = type === "string"
            ? `type string ('${value}')`
            : `type ${type} (${value})`;
    }
    const message = `The "${argKey}" argument must be ${mustBe?.trim()}. Received ${received}`;
    return new TypeError(message);
}
