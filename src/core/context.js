export function createContext({
  task = '',
  environment = '',
  urgency = 'medium',
  emotionalTone = 'neutral'
} = {}) {
  return { task, environment, urgency, emotionalTone };
}