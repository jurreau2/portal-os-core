import { createContext } from '../core/context.js';

export async function evaluateContext(raw) {
  return createContext(raw);
}