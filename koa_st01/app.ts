let strA: string = "str";
let strB: string | null = "str";

// NG error TS2322: Type 'null' is not assignable to type 'string'.
// let strC: string = null;
strB = null;

let objA: Object;

let objB: Object | null | undefined;

// objA = null;


