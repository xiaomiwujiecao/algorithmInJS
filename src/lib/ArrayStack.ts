export class ArrayStack {
    /**
     * items: this is an  array
     * count: the number of unit in this array
     * n    : the size of this array
     * */
    private items: string[]
    private count: number
    private n: number

    constructor(n: number) {
        this.items = new Array(n)
        this.n = n
        this.count = 0
    }

    /**
     * push
     * */

    public push(item: string): boolean {
        if (this.count == this.n) return false;
        this.items[this.count] = item
        ++this.count
        return true

    }

    /**
     * pop
     *
     * */
    public pop(): string {
        if (this.count == 0) return null;
        //  return the unit  of this array that index is [count -1 ]
        let tmp = this.items[this.count - 1]
        --this.count
        return tmp

    }
}