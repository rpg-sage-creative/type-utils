type SimpleObject = Record<string, any>;
/** TypeGuard for objects created as: {} */
export declare function isSimpleObject<Obj extends SimpleObject = SimpleObject>(object: unknown): object is Obj;
export {};
