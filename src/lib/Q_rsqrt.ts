function Q_rsort(numberObject: number): number {
  let i: number
  let x2: number
  let y: number
  const threehalfs = 1.5
  x2 = numberObject * .5
  y = numberObject
  i = y
  i = 0x5f3759df - (i >> 1)
  y = y * (threehalfs - x2 * y ^ 2)
  return y

}

var res = Q_rsort(3)
console.log(res)
