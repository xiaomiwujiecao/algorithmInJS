

[![Travis (.org)](https://img.shields.io/travis/xiaomiwujiecao/algorithmInJS.svg)](https://travis-ci.org/xiaomiwujiecao/algorithmInJS)



# algorithmInJS

- A collection of commonly used algorithms for encapsulating node.js

- Written in TypeScript for easy writing of smooth code

## Description

- Long-term maintenance of the library, in order to achieve a variety of more common algorithms, but also to witness the charm of JS

- This library is only suitable for self-learning and discussion, please do not use in production environment

- This library uses the MIT protocol, welcome to submit a pull Request



## start using

- If you want to use and test in the form of npm package

```
npm i algorithminjs -D

```
Used in node

```javascript
let algorithminjs = require('algorithminjs')

 // import form
import algorithmInJS from 'algorithminjs'

```


### Document ( [中文](./README_CN.md))


> Using ArrayQueue.ts array queue

```TypeScript
let {ArrayQueue} = require('../index')
let arrayQueue = new ArrayQueue(8)
//enqueue
console.log('enqueue::', arrayQueue.enqueue('a'))
console.log('arrayQueue:', arrayQueue)
console.log('enqueue::', arrayQueue.enqueue('b'))
console.log('arrayQueue:', arrayQueue)
// dequeue
console.log('dequeue:', arrayQueue.dequeue())
console.log('dequeue show :', arrayQueue)
```


> Using ArrayStack.ts array stack

```TypeScript
let {ArrayStack} = require('../index')
let arrayStack = new ArrayStack(5)
console.log(arrayStack.push(4))
console.log(arrayStack.items)
expect(arrayStack.items).to.be.a('array')
```

> Using BinarySearch.ts binary search

```TypeScript
let {BinarySearch} = require('../index')
let a = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].reverse()
let n = a.length
let val = 8
let bs = new BinarySearch()
console.log('bs', bs)
let result = bs.bsearchInternally(a, 0, n - 1, val)
console.log('result:', result)
```

> Using CircleQueue.ts Loop Queue

```TypeScript
let {CircleQueue} = require('../index')
let circleQueue = new CircleQueue(8)
console.log('circleQueue:', circleQueue.enqueue('jame'))
console.log('circleQueue:', circleQueue.enqueue('tom'))
console.log('circleQueue:', circleQueue.enqueue('jerry'))
console.log('circleQueue:', circleQueue)
```

> Sorting by CountingSort.ts Count

```TypeScript
let {CountingSort} = require('../index')
// let mergeSort = new MergeSort()
var a = [11,10,9,8,7,6,5,4,3,2,1]
var n = a.length
Console.time('countingSort')
CountingSort.countingSort(a,n)
// quickSort.mergeSortInternally(a, 0)
console.timeEnd('countingSort')
console.log('array:', a)
```


> Implementation using the Heap.ts heap algorithm

```


```

> MergeSort.ts merge sort algorithm

```TypeScript
let {MergeSort} = require('../index')
// let mergeSort = new MergeSort()
var a = [1, 23, 45, 56, 2, 3, 34, 22]
var n = a.length
Console.time('mergeSort')
var mergeSort = new MergeSort(a, n)
mergeSort.mergeSortInternally(a, 0)
console.timeEnd('mergeSort')
console.log('array:', a)
```

> Implemented using the Nodes.ts binary tree node algorithm

```TypeScript
let {Nodes} = require('../index')
var node1 = new Nodes(5)
Node1.insert(2)
Node1.insert(4)
console.log(node1)

// delete
Console.time('delete')
Node1.delete(3)
console.timeEnd('delete')
console.log('deleted::',node1)
```

> Implemented using the QuickSort.ts quick sort algorithm

```TypeScript
let {QuickSort} = require('../index')
// let mergeSort = new MergeSort()
var a = [11,10,9,8,7,6,5,4,3,2,1]
var n = a.length
Console.time('mergeSort')
var quickSort = new QuickSort(a, n)
// quickSort.mergeSortInternally(a, 0)
console.timeEnd('mergeSort')
console.log('array:', a)
```

> Implemented with SyncPromise.ts asynchronous logic synchronous queue algorithm

```TypeScript
let {SyncPromise} = require('../index')
let syncPromise = new SyncPromise()
console.log(syncPromise)
let self = this
Const a = (option) => {
Return new Promise((resolve, reject) => {
console.log(option)
Resolve(option)
}
)
}

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Function method(option) {
Return (callback) => {
a(option).then(data => {
Callback(null, data)
})
}
}

let arrayOfCallback = ids.map(id => {
Return method(id)
})
syncPromise.seriesOfArray(arrayOfCallback)
expect(arrayOfCallback).to.be.a('array')
```

> Using the Util.ts helper function

```TypeScript
let {Util} = require('../index')
let testUrl = 'https://translate.google.com/?view=home&op=translate&sl=en&tl=zh-CN&text=what%20i%20want%20to%20do%20is%20that'
let getJSON = Util.url2json(testUrl)
console.log("getJSON:",getJSON)
expect(getJSON).to.be.a('object')
```


```TypeScript
let {Util} = require('../index')
let testObj = {
View: 'home',
Op: 'translate',
Sl: 'en',
Tl: 'zh-CN',
Text: 'what i want to do is that'
}
let getUrl = Util.json2url(testObj)
console.log('getUrl::',getUrl)
```
