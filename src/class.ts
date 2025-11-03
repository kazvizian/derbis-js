import type { FieldKey } from "./types"

export type ErrorMapper = Record<string, FieldKey>

export class FEError extends Error {
  code: string
  source: string
  details?: Record<string, string | number>

  constructor(
    code: string,
    message: string,
    source: string,
    details?: Record<string, string | number>
  ) {
    super(message)
    this.name = "FEError"
    this.code = code
    this.source = source
    if (details) this.details = details
  }
}

export class BEError extends Error {
  code: string
  status: number
  source: string

  declare details?: Record<string, string | number>
  constructor(
    code: string,
    message: string,
    status: number,
    source: string,
    details?: Record<string, string | number>
  ) {
    super(message)
    this.name = "BEError"
    this.code = code
    this.status = status
    this.source = source
    if (details) this.details = details
  }
}

export class BEMultiError extends Error {
  errors: {
    code: string
    message: string
    status: number
    details?: Record<string, string | number>
  }[]
  code?: string
  status?: number
  source?: string

  declare details?: Record<string, string | number>
  constructor(
    errors: {
      code: string
      message: string
      status: number
      details?: Record<string, string | number>
    }[],

    // optional data for the multi-error object itself
    code?: string,
    status?: number,
    source?: string,
    details?: Record<string, string | number>
  ) {
    super(errors.map((e) => `${e.code}: ${e.message}`).join("; "))
    this.name = "BEMultiError"
    this.errors = errors
    if (code) this.code = code
    if (status) this.status = status
    if (source) this.source = source
    if (details) this.details = details
  }
}
