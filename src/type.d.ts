export interface FEErrorObject {
  code: string
  message: string
  source: string
  name: string
  details?: Record<string, string | number>
}

export interface BEErrorRespone {
  error: BEErrorObject | BEErrorObject[]
}

export interface BEErrorObject {
  code: string
  message: string
  status: number
  source: string
  name: string
  details?: Record<string, string | number>
}

export interface BEMultiErrorObject {
  errors: BEErrorObject[]
  code?: string
  message: string
  status?: number
  source?: string
  name: string
  details?: Record<string, string | number>
}
