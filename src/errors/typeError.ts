type Args = {
	argKey: string;
	mustBe: string;
	value: unknown;
};

/**
 * A reusable TypeError creator.
 * Ex: throw typeError({ argKey:"count", mustBe:"a number", value });
 */
export function typeError(args: Args): TypeError {
	const { argKey, mustBe, value } = args;

	let received: string;

	if (value === null) {
		received = "null";

	}else if (value === undefined) {
		received = "undefined";

	}else {
		const type = typeof(value);

		received = type === "string"
			? `type string ('${value}')`
			: `type ${type} (${value})`;

	}

	const message = `The "${argKey}" argument must be ${mustBe?.trim()}. Received ${received}`;

	return new TypeError(message);
}