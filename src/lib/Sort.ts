export class Sort {
  /**
   * @param a  {Array}
   * @param n  {Number}  the size of this array
   * */
  public bubbleSort(a: Array<number>, n: number) {
    if (n <= 1) return
    for (let i = 0; i < n; i++) {
      let flag: boolean = false
      for (let j = 0; j < n - i - 1; j++) {
        if (a[j] > a[j + 1]) {
          let tmp = a[j]
          a[j] = a[j + 1]
          a[j + 1] = tmp
          flag = true
        }
      }
      if (!flag) {
        break
      }
    }
  }

  /**
   * @param a  {Array}
   * @param n  {Number}  the size of this array
   * */
  public insertionSort(a: Array<number>, n: number) {
    if (n <= 1) return
    for (let i = 1; i < n; i++) {
      let value = a[i]
      let j = i - 1
      for (; j >= 0; --j) {
        if (a[j] > value) {
          a[j + 1] = a[j]
        }
        else {
          break
        }
      }
      a[j+1] = value
    }
  }

  /**
   * mergeSort
   *
   * it shoud like this:
   *
   * mergeSort(p..r) = merge(merge_sort(p..q),merge_sort(q+1..r))
   * */


}