export class CountingSort {
  /**
   * @param a {Array} array
   * @param n {Number} the size of this array
   *
   * */
  public static countingSort(a: Array<number>, n: number) {
    if (n <= 1) return
    let max = a[0]
    for (let i = 1; i < n; i++) {
      if (max < a[i]) {
        max = a[i]
      }
    }

    let c = new Array(max + 1)
    for (let i = 0; i < max + 1; i++) {
      c[i] = 0
    }

    for (let i = 0; i < n; ++i) {
      c[a[i]]++
    }

    for (let i = 1; i < max + 1; ++i) {
      c[i] = c[i - 1] + c[i]
    }

    //   tmp
    let r = new Array(n)
    for (let i = n - 1; i >= 0; --i) {
      let index = c[a[i]] - 1
      r[index] = a[i]
      c[a[i]]--

    }

    //   copy to array a
    for (let i = 0; i < n; ++i) {
      a[i] = r[i]
    }
  }
}