export async function handleIdentity(request, env, ctx) {
  const url = new URL(request.url);

  if (url.pathname.endsWith('/get')) {
    return env.IDENTITY_DO.fetch(new Request(env.IDENTITY_DO_URL + '/get', request));
  }

  if (url.pathname.endsWith('/set')) {
    return env.IDENTITY_DO.fetch(new Request(env.IDENTITY_DO_URL + '/set', request));
  }

  return new Response('Identity route online');
}