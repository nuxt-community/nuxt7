import { resolve } from 'upath'

export function resolveRuntimePath (...args) {
  return resolve(__dirname, 'runtime', ...args)
}

