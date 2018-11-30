export class QuickSort {
  constructor(a: Array<number>, n: number) {
    QuickSort.quickSortInternally(a, 0, n - 1)
  }

  private static quickSortInternally(a: Array<number>, p: number, r: number): void {
    if (p >= r) return;

    let q = QuickSort.partition(a, p, r); // 获取分区点
    QuickSort.quickSortInternally(a, p, q - 1);
    QuickSort.quickSortInternally(a, q + 1, r);
  }
/**
 * @param a {Array}
 * @param p  start index
 * @param r end index
 * */
  public static partition(a: Array<number>, p: number, r: number): number {
    let pivot = a[r];
    let i = p;
    for (let j = p; j < r; ++j) {
      if (a[j] < pivot) {
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
        ++i;
      }
    }

    let tmp = a[i];
    a[i] = a[r];
    a[r] = tmp;

    console.log("i=" + i);
    return i;
  }
}