export function createIdentity({
  id,
  traits = {},
  preferences = {},
  history = [],
  forceBaseline = {},
  modeBaseline = 'Creative'
}) {
  return {
    id,
    traits,
    preferences,
    history,
    forceBaseline,
    modeBaseline
  };
}