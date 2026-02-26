export const getCircularPosition = (
  index: number,
  total: number,
  radius: number
) => {
  const angle = (index / total) * Math.PI * 2
  return {
    x: Math.cos(angle) * radius,
    y: 0,
    z: Math.sin(angle) * radius,
  }
}