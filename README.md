#algorithmInJS

- A collection of commonly used algorithms for encapsulating node.js

- Written in TypeScript for easy writing of smooth code

## Description

- Long-term maintenance of the library, in order to achieve a variety of more common algorithms, but also to witness the charm of JS

- This library is only suitable for self-learning and discussion, please do not use in production environment

- This library uses the MIT protocol, welcome to submit a pull Request



## start using

- If you want to use and test in the form of npm package

```
Npm i algorithminjs -D

```
Used in node

```javascript
Let algorithminjs = require(algorithminjs)

 // import form
Import algorithmInJS from 'algorithminjs'

```


### Document:


> Using ArrayQueue.ts array queue

```TypeScript
Let {ArrayQueue} = require('../index')
Let arrayQueue = new ArrayQueue(8)
//enqueue
Console.log('enqueue::', arrayQueue.enqueue('a'))
Console.log('arrayQueue:', arrayQueue)
Console.log('enqueue::', arrayQueue.enqueue('b'))
Console.log('arrayQueue:', arrayQueue)
// dequeue
Console.log('dequeue:', arrayQueue.dequeue())
Console.log('dequeue show :', arrayQueue)
```


> Using ArrayStack.ts array stack

```TypeScript
Let {ArrayStack} = require('../index')
Let arrayStack = new ArrayStack(5)
Console.log(arrayStack.push(4))
Console.log(arrayStack.items)
Expect(arrayStack.items).to.be.a('array')
```

> Using BinarySearch.ts binary search

```TypeScript
Let {BinarySearch} = require('../index')
Let a = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].reverse()
Let n = a.length
Let val = 8
Let bs = new BinarySearch()
Console.log('bs', bs)
Let result = bs.bsearchInternally(a, 0, n - 1, val)
Console.log('result:', result)
```

> Using CircleQueue.ts Loop Queue

```TypeScript
Let {CircleQueue} = require('../index')
Let circleQueue = new CircleQueue(8)
Console.log('circleQueue:', circleQueue.enqueue('jame'))
Console.log('circleQueue:', circleQueue.enqueue('tom'))
Console.log('circleQueue:', circleQueue.enqueue('jerry'))
Console.log('circleQueue:', circleQueue)
```

> Sorting by CountingSort.ts Count

```TypeScript
Let {CountingSort} = require('../index')
// let mergeSort = new MergeSort()
Var a = [11,10,9,8,7,6,5,4,3,2,1]
Var n = a.length
Console.time('countingSort')
CountingSort.countingSort(a,n)
// quickSort.mergeSortInternally(a, 0)
console.timeEnd('countingSort')
Console.log('array:', a)
```


> Implementation using the Heap.ts heap algorithm

```


```

> MergeSort.ts merge sort algorithm

```TypeScript
Let {MergeSort} = require('../index')
// let mergeSort = new MergeSort()
Var a = [1, 23, 45, 56, 2, 3, 34, 22]
Var n = a.length
Console.time('mergeSort')
Var mergeSort = new MergeSort(a, n)
mergeSort.mergeSortInternally(a, 0)
console.timeEnd('mergeSort')
Console.log('array:', a)
```

> Implemented using the Nodes.ts binary tree node algorithm

```TypeScript
Let {Nodes} = require('../index')
Var node1 = new Nodes(5)
Node1.insert(2)
Node1.insert(4)
Console.log(node1)

// delete
Console.time('delete')
Node1.delete(3)
console.timeEnd('delete')
Console.log('deleted::',node1)
```

> Implemented using the QuickSort.ts quick sort algorithm

```TypeScript
Let {QuickSort} = require('../index')
// let mergeSort = new MergeSort()
Var a = [11,10,9,8,7,6,5,4,3,2,1]
Var n = a.length
Console.time('mergeSort')
Var quickSort = new QuickSort(a, n)
// quickSort.mergeSortInternally(a, 0)
console.timeEnd('mergeSort')
Console.log('array:', a)
```

> Implemented with SyncPromise.ts asynchronous logic synchronous queue algorithm

```TypeScript
Let {SyncPromise} = require('../index')
Let syncPromise = new SyncPromise()
Console.log(syncPromise)
Let self = this
Const a = (option) => {
Return new Promise((resolve, reject) => {
Console.log(option)
Resolve(option)
}
)
}

Let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Function method(option) {
Return (callback) => {
a(option).then(data => {
Callback(null, data)
})
}
}

Let arrayOfCallback = ids.map(id => {
Return method(id)
})
syncPromise.seriesOfArray(arrayOfCallback)
Expect(arrayOfCallback).to.be.a('array')
```

> Using the Util.ts helper function

```TypeScript
Let {Util} = require('../index')
Let testUrl = 'https://translate.google.com/?view=home&op=translate&sl=en&tl=zh-CN&text=what%20i%20want%20to%20do%20is%20that'
Let getJSON = Util.url2json(testUrl)
Console.log("getJSON:",getJSON)
Expect(getJSON).to.be.a('object')
```


```TypeScript
Let {Util} = require('../index')
Let testObj = {
View: 'home',
Op: 'translate',
Sl: 'en',
Tl: 'zh-CN',
Text: 'what i want to do is that'
}
Let getUrl = Util.json2url(testObj)
Console.log('getUrl::',getUrl)
```
