# ci-doctor-demo

A minimal Node.js repository with a GitHub Actions workflow, used as a test target for tools that diagnose failing CI runs, such as [copilot-ci-doctor](https://github.com/manojmallick/copilot-ci-doctor).

## What is in it

| File | Purpose |
|---|---|
| `index.js` | Exports `add(a, b)` |
| `test.js` | A placeholder "test": it prints a success message and does not assert anything |
| `package.json` | `npm test` runs `node test.js` |
| `.github/workflows/ci.yml` | On every push: checkout, set up Node 20, `npm ci`, `npm test` |

## Current CI behaviour

The workflow runs `npm ci`, which requires a `package-lock.json`. This repository does not have one, so **the workflow fails at the install step** as committed. To make it pass, either commit a lockfile (`npm install` creates one) or change the step to `npm install`.

Note that even when it passes, `npm test` verifies nothing, because `test.js` has no assertions.

## Run locally

```bash
npm test      # prints "Running tests..." and "All tests passed"
```
