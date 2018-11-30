export class MergeSort {

  /**
   *  @param a {Array}
   *
   * @param n  array length
   */
  private a: Array<number>
  private n: number

  constructor(a: Array<number>, n: number) {
    this.a = a
    this.n = n
  }

  private mergeSortInternally(a: Array<number>, p: number, r: number = this.n): void {

    try {
      if (p >= r) return
      let q: number = p + (r - p) / 2;
      this.mergeSortInternally(a, p, q);
      this.mergeSortInternally(a, q + 1, r);

      this.merge(a, p, q, r);
    } catch (err) {
      console.error(err)
      return
    }
  }

  private merge(a: Array<number>, p: number, q: number, r: number): void {
    let i = p;
    let j = q + 1;
    let k = 0;
    let len = (r - p + 1).toFixed(0)

    console.log('len::', len)
    let tmp = []
    while (i <= q && j <= r) {
      if (a[i] <= a[j]) {
        tmp[k++] = a[i++];
      } else {
        tmp[k++] = a[j++];
      }
    }

    let start = i;
    let end = q;
    if (j <= r) {
      start = j;
      end = r;
    }

    while (start <= end) {
      tmp[k++] = a[start++];
    }

    for (let i = 0; i <= r - p; ++i) {
      a[p + i] = tmp[i];
    }
  }

}