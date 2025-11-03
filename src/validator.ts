import type { BEErrorObject, BEMultiErrorObject, FEErrorObject } from "./types"

export function isFEError(error: unknown): error is FEErrorObject {
  return (
    typeof error === "object" &&
    error !== null &&
    (error as FEErrorObject).name === "FEError"
  )
}

export function isBEError(error: unknown): error is BEErrorObject {
  return (
    typeof error === "object" &&
    error !== null &&
    (error as BEErrorObject).name === "BEError"
  )
}

export function isBEMultiError(error: unknown): error is BEMultiErrorObject {
  return (
    typeof error === "object" &&
    error !== null &&
    (error as BEMultiErrorObject).name === "BEMultiError"
  )
}
