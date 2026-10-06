# Portal-OS-Core

Portal-OS-Core is the identity-physics substrate powering Identity, Mode, Force, and Context primitives.
It runs on Cloudflare Workers with Durable Objects for global identity-state.

## Structure

```
src/
  core/           Identity, Mode, Force, Context primitives
  engines/        Mode, Force, Context resolution engines
  routes/         HTTP handlers for each subsystem
  state/          Durable Objects and stores
  index.js        Worker entry point

config/
  wrangler.toml   Cloudflare Worker configuration
```

## Deployment

```bash
# Install dependencies
npm install

# Deploy to Cloudflare Workers
npx wrangler deploy --config config/wrangler.toml
```

## API Endpoints

- `POST /identity/get` — Retrieve identity by ID
- `POST /identity/set` — Store identity state
- `POST /mode` — Resolve mode based on identity and context
- `POST /force` — Apply force parameters
- `POST /context` — Evaluate context
- `POST /portal` — Orchestrated identity-physics computation (all four)

## Example Request

```bash
curl -X POST https://portal-os-core.workers.dev/portal \
  -H "Content-Type: application/json" \
  -d '{
    "identity": {
      "id": "user-123",
      "modeBaseline": "Creative",
      "forceBaseline": { "drive": 0.7, "curiosity": 0.8 }
    },
    "context": {
      "task": "build a feature",
      "urgency": "medium"
    }
  }'
```
