export class BinarySearch {
  /**
   * @param a  {Array}
   * @param n {Number}
   * @param val {Number}
   * */
  public result: number

  constructor(a: Array<number>, n: number, val: number) {

  }

  public bsearchInternally(a: Array<number>, low: number, high: number, value: number): any {
    if (low > high) {
      this.result = -1
      return this.result
    }
    let mid = low + ((high - low) >> 1)
    console.log('mid::', mid)
    // console.log('a[mid]::',a[mid])
    if (a[mid] == value) {
      console.log('find it ::', value)
      this.result = mid
      return mid
    }
    else if (a[mid] < value) {
      return this.bsearchInternally(a, mid + 1, high, value)
    }
    else {
      return this.bsearchInternally(a, low, mid - 1, value)
    }
  }
}