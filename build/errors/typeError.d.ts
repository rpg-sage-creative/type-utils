type Args = {
    argKey: string;
    mustBe: string;
    value: unknown;
};
/**
 * A reusable TypeError creator.
 * Ex: throw typeError({ argKey:"count", mustBe:"a number", value });
 */
export declare function typeError(args: Args): TypeError;
export {};
