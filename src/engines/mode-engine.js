import { MODES, createMode } from '../core/mode.js';

export async function resolveMode(identity, context) {
  const baseline = identity.modeBaseline || 'Creative';
  let modeName = baseline;

  if (context.urgency === 'high') modeName = 'Executive';
  if (context.task?.toLowerCase().includes('analysis')) modeName = 'Analyst';
  if (context.task?.toLowerCase().includes('build')) modeName = 'Builder';

  const stability = 0.8;
  const triggers = [context.urgency, context.task];
  const constraints = modeName === 'Executive' ? ['low-creativity'] : [];

  return createMode(modeName, stability, triggers, constraints);
}