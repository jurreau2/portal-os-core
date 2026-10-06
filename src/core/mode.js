export const MODES = ['Creative', 'Executive', 'Analyst', 'Builder'];

export function createMode(name, stability = 1.0, triggers = [], constraints = []) {
  return { name, stability, triggers, constraints };
}