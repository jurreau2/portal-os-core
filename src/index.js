import { handleIdentity } from './routes/identity.js';
import { handleMode } from './routes/mode.js';
import { handleForce } from './routes/force.js';
import { handleContext } from './routes/context.js';
import { handlePortal } from './routes/portal.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/identity')) return handleIdentity(request, env, ctx);
    if (url.pathname.startsWith('/mode')) return handleMode(request, env, ctx);
    if (url.pathname.startsWith('/force')) return handleForce(request, env, ctx);
    if (url.pathname.startsWith('/context')) return handleContext(request, env, ctx);
    if (url.pathname.startsWith('/portal')) return handlePortal(request, env, ctx);

    return new Response('Portal-OS-Core online');
  }
};