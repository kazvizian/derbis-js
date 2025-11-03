<div align="center">

# 🜔 Derbis

[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)<br />
![Conventional Commits](https://img.shields.io/badge/commit-conventional-blue.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

</div>

Fragments of failure — structured, typed, and calm.

**Derbis** is a small TypeScript library for modeling, validating, and handling web-app **frontend and backend error objects** in a consistent, type-safe way.

It turns unstructured failures into well-defined data models — so your web app can fall gracefully, not chaotically.


## ✨ Features

- **Consistent error models** across frontend and backend (`FEError`, `BEError`, `BEMultiError`).
- **Typed safety** — every error carries shape, status, and metadata.
- **Runtime validation** with `isFEError`, `isBEError`, and `isBEMultiError`.
- **Tiny footprint**, no dependencies, and perfect pairing with `conjura`.


## 📦 Install

```sh
# Bun
bun add derbis

# npm
npm i derbis

# pnpm
pnpm add derbis
```


## 🧩 Usage

```ts
import {
  FEError,
  BEError,
  BEMultiError,
  isFEError,
  isBEError,
  isBEMultiError
} from "derbis"

// Frontend-originated error (e.g. validation, UI logic)
throw new FEError(
  "INVALID_INPUT",
  "Form has an invalid field",
  "signup-form",
  { field: "email" }
)

// Backend-originated single error
const beErr = new BEError(
  "USER_NOT_FOUND",
  "No user with that ID",
  404,
  "GET /api/users/:id"
)

// Backend-originated multiple errors
const multi = new BEMultiError(
  [
    { code: "INVALID_EMAIL", message: "Email invalid", status: 400 },
    { code: "PASSWORD_WEAK", message: "Password too weak", status: 400 }
  ],
  "VALIDATION_ERRORS",
  400,
  "POST /api/register"
)

function handle(e: unknown) {
  if (isFEError(e)) {
    // FEErrorObject — client-side failure
  } else if (isBEError(e)) {
    // BEErrorObject — single backend error
  } else if (isBEMultiError(e)) {
    // BEMultiErrorObject — multiple backend errors
  }
}
```


## API Overview

| Name                                                   | Type      | Description                                |
| ------------------------------------------------------ | --------- | ------------------------------------------ |
| `FEError`                                              | class     | Error for frontend logic or validation.    |
| `BEError`                                              | class     | Error for single backend response.         |
| `BEMultiError`                                         | class     | Error wrapping multiple backend issues.    |
| `isFEError`, `isBEError`, `isBEMultiError`             | functions | Runtime type guards.                       |
| `FEErrorObject`, `BEErrorObject`, `BEMultiErrorObject` | types     | Serializable representations of the above. |
| `BEErrorResponse`, `FieldKey`                          | types     | Utilities for backend error envelopes.     |

## License

MIT © KazViz
