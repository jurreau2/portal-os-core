import { resolveMode } from '../engines/mode-engine.js';

export async function handleMode(request, env, ctx) {
  const body = await request.json();
  const mode = await resolveMode(body.identity, body.context);
  return Response.json({ mode });
}