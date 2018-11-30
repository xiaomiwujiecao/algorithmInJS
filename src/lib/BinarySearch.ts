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

  public bsearchFirstElement(a: Array<number>, n: number, value: number): any {
    let low = 0
    let high = n - 1
    while (low <= high) {
      let mid = low + ((high - low) >> 1)
      if (a[mid] > value) {
        high = mid - 1

      }
      else if (a[mid] < value) {
        low = mid + 1
      }
      else {
        if ((mid == 0) || (a[mid - 1] != value)) {
          return mid
        }
        else {
          high = mid - 1
        }
      }
    }

  }

  public bsearchLastElement(a: Array<number>, n: number, value: number): any {
    let low = 0
    let high = n - 1
    while (low <= high) {
      let mid = low + ((high - low) >> 1)
      if (a[mid] > value) {
        high = mid - 1

      }
      if (a[mid] < value) {
        low = mid + 1
      }
      if ((mid == n - 1) || (a[mid + 1] != value)) {
        return mid
      }
      else {
        low = mid + 1
      }

    }
  }

  public bsearchFirstGTE(a: Array<number>, n: number, value: number): any {
    let low = 0
    let high = n - 1
    while (low <= high) {
      let mid = low + ((high - low) >> 1)
      if (a[mid] > value) {
        if ((mid == n - 1) || (a[mid + 1] != value)) {
          return mid
        }
        else {
          low = mid + 1
        }
      }
    }
    return -1
  }

  public nsearchLastLTE(a: Array<number>, n: number, value: number): any {
    let low = 0
    let high = n - 1
    while (low <= high) {
      let mid = low + ((high - low) >> 1)
      if (a[mid] > value) {
        high = mid + 1
      } else {
        if ((mid == n - 1) || (a[mid + 1] != value)) {
          return mid
        }
        else {
          low = mid + 1
        }
      }
    }
    return -1
  }
}