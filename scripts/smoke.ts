import { FEError, isFEError } from "../dist/index.js"

const e = new FEError("X", "y", "z")
if (!isFEError(e)) throw new Error("FEError type guard failed")
console.log("ok", e.code, e.message, e.source)
