import { applyForce } from '../engines/force-engine.js';

export async function handleForce(request, env, ctx) {
  const body = await request.json();
  const force = await applyForce(body.identity, body.mode, body.context);
  return Response.json({ force });
}