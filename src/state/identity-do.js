import { createIdentity } from '../core/identity.js';

export class IdentityDO {
  constructor(state, env) {
    this.state = state;
    this.env = env;
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.endsWith('/get')) {
      const { id } = await request.json();
      const identity = await this.state.storage.get(id);
      return Response.json(identity || null);
    }

    if (url.pathname.endsWith('/set')) {
      const body = await request.json();
      const identity = createIdentity(body);
      await this.state.storage.put(identity.id, identity);
      return Response.json({ ok: true, identity });
    }

    return new Response('IdentityDO online');
  }
}