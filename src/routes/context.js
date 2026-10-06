import { evaluateContext } from '../engines/context-engine.js';

export async function handleContext(request, env, ctx) {
  const body = await request.json();
  const context = await evaluateContext(body);
  return Response.json({ context });
}