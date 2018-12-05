export class Heap {
  private a: Array<number>
  private n: number
  private count: number

  constructor(capacity: number) {
    this.a = new Array(capacity + 1)
    this.n = capacity
    this.count = 0
  }

  public insert(data: number): void {
    if (this.count >= this.n) return
    ++this.count
    this.a[this.count] = data
    let i = this.count
    while (i / 2 > 0 && this.a[i] > this.a[i / 2]) {
      this.swap(this.a, i, Math.floor(i / 2))
    }

  }

  public swap(a: Array<number>, i: number, max: number): void {
    let tmp = this.a[i]
    a[i] = a[max]
    a[max] = tmp
  }

  public removeMax(): any {
    if (this.count == 0) {
      return -1
    }
    this.a[1] = this.a[this.count]
    --this.count
    this.heapify(this.a, this.count, 1)
  }

  public heapify(a: Array<number>, n: number, i: number) {
    while (true) {
      let maxPos = i
      if (i * 2 < this.n && a[i] < a[i * 2]) {
        maxPos = i * 2
      }
      if (i * 2 + 1 <= n && a[maxPos] < a[i * 2 + 1]) {
        maxPos = i * 2 + 1
      }
      if (maxPos == i) {
        break
      }
      this.swap(a, i, maxPos)
    }
  }

  public buildHelp(a: Array<number>, n: number): void {
    for (let i = Math.floor(n / 2); i >= 1; --i) {
      this.heapify(a, n, i)
    }
  }

  public sort(a: Array<number>, n: number) {
    this.buildHelp(a, n)
    let k = n
    while (k > 1) {
      this.swap(a, 1, k)
      --k;
      this.heapify(a, k, 1)
    }
  }
}