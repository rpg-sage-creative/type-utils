type Args = {
    argKey: string;
    max: number;
    min: number;
    value: unknown;
} | {
    argKey: string;
    max: number;
    min?: never;
    value: unknown;
} | {
    argKey: string;
    max?: never;
    min: number;
    value: unknown;
};
/**
 * Creates either a RangeError or TypeError based on the min, max, and value args given.
 */
export declare function safeIntegerError(args: Args): TypeError | RangeError;
export {};
