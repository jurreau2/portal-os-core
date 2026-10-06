import { resolveMode } from '../engines/mode-engine.js';
import { applyForce } from '../engines/force-engine.js';
import { evaluateContext } from '../engines/context-engine.js';

export async function handlePortal(request, env, ctx) {
  const body = await request.json();
  const context = await evaluateContext(body.context || {});
  const mode = await resolveMode(body.identity, context);
  const force = await applyForce(body.identity, mode, context);

  return Response.json({
    identity: body.identity,
    mode,
    force
  });
}