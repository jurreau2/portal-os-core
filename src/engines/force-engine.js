import { createForce } from '../core/force.js';

export async function applyForce(identity, mode, context) {
  const base = identity.forceBaseline || {};
  const drive = base.drive ?? 0.6;
  const restraint = base.restraint ?? 0.4;
  const curiosity = base.curiosity ?? 0.7;
  const risk = base.risk ?? 0.5;

  const tone =
    mode.name === 'Executive' ? 'assertive' :
    mode.name === 'Analyst' ? 'precise' :
    mode.name === 'Builder' ? 'structured' :
    'exploratory';

  const behaviorParams = {
    tone,
    creativity: mode.name === 'Creative' ? 0.9 : 0.6,
    structure: mode.name === 'Builder' ? 0.9 : 0.5
  };

  return {
    ...createForce({ drive, restraint, curiosity, risk }),
    behaviorParams
  };
}