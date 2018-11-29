export class ArrayQueue {
    private items: string[]
    private n: number = 0
    private head: number = 0
    private tail: number = 0

    constructor(capacity: number) {
        this.items = new Array(capacity)
        this.n = capacity
        this.tail = capacity
    }

    /**
     * enqueue
     * */
    public enqueue(item: string): boolean {
        let self = this
        if (self.tail = self.n) {
            // if (self.head==0) {return false}

            for (let i = self.head;i<self.tail;i++) {
                self.items[i-self.head] = self.items[i]
                console.log(self.head,self.tail)
            }
            self.tail-=self.head
            self.head = 0
        }
        self.items[self.tail] = item
        ++self.tail
        return true
    }
    /*dequeue*/
    public dequeue(): any {
        let self = this
        if (self.head = self.tail) {
            return null
        }
        let ret: string = self.items[self.head]
        ++self.head
        return ret
    }

}