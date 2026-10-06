export function createForce({
  drive = 0.5,
  restraint = 0.5,
  curiosity = 0.5,
  risk = 0.5
} = {}) {
  return { drive, restraint, curiosity, risk };
}