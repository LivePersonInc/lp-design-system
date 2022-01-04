export function scaleValue(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  const result = (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

  if (result < outMin) {
    return outMin;
  } else if (result > outMax) {
    return outMax;
  }

  return result;
}
