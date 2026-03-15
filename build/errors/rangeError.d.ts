type Args = {
    argKey: string;
    mustBe: string;
    value: unknown;
};
/**
 * A reusable RangeError creator.
 * Ex: throw rangeError({ argKey:"count", mustBe:"a safe integer greater than 0", value });
 */
export declare function rangeError(args: Args): RangeError;
export {};
