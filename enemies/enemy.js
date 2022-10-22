export function create({
  appearance, health
}) {
  return {
    appearance,
    health,
    maxHealth: health
  }
}
