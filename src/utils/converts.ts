export const intToBool = (num: number) => {
  return num == 0 || num == 2 ? false : true
}
export const boolToInt = (bool: boolean | number) => {
  return bool ? 1 : 0
}

export function isNumber(number: number) {
  if (number && !Number.isNaN(number)) {
    return number
  }
  return 0
}