export class CircleQueue {
    private items: string[]
    private n: number = 0
    private head: number = 0
    private tail: number = 0

    constructor(capacity: number) {
        this.items = new Array(capacity)
        this.n = capacity
    }

    public enqueue(item: string) {
        let condition = (this.tail + 1) % this.n == this.head
        if (condition) return false
        this.items[this.tail] = item
        this.tail = (this.tail + 1) % this.n
        return true
    }

    public dequeue(): any {
        if (this.tail == this.head) return null
        let ret = this.items[this.head]
        this.head = (this.head + 1) % this.n
        return ret
    }
}