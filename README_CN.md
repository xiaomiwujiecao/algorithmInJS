[![Travis (.org)](https://img.shields.io/travis/xiaomiwujiecao/algorithmInJS.svg)](https://travis-ci.org/xiaomiwujiecao/algorithmInJS)
＃algorithmInJS

- 封装node.js常用算法的集合

- 使用TypeScript编写，以便于编写流畅的代码

## 说明

- 本库长期维护，为了实现各种比较常见的算法，也为了能够见证JS的魅力

- 本库仅适合自我学习和讨论使用，请勿在生产环境上使用

- 本库采用MIT协议，欢迎提交 pull Request



## 开始使用

- 如果想使用npm包的形式使用并测试

```
npm i  algorithminjs -D

```
在node中使用

```javascript
let algorithminjs = require('algorithminjs')

 // import 形式
import algorithmInJS from 'algorithminjs'

```


### 文档：


> 使用  ArrayQueue.ts    数组队列

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


> 使用 ArrayStack.ts  数组堆栈

```TypeScript
let {ArrayStack} = require('../index')
		let arrayStack = new ArrayStack(5)
		console.log(arrayStack.push(4))
		console.log(arrayStack.items)
		expect(arrayStack.items).to.be.a('array')
```

> 使用 BinarySearch.ts  二分查找法

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

> 使用 CircleQueue.ts  循环队列

```TypeScript
let {CircleQueue} = require('../index')
		let circleQueue = new CircleQueue(8)
		console.log('circleQueue:',  circleQueue.enqueue('jame'))
		console.log('circleQueue:',  circleQueue.enqueue('tom'))
		console.log('circleQueue:',  circleQueue.enqueue('jerry'))
		console.log('circleQueue:',  circleQueue)
```

> 使用 CountingSort.ts  计数排序

```TypeScript
let {CountingSort} = require('../index')
		// let mergeSort = new MergeSort()
		var a = [11,10,9,8,7,6,5,4,3,2,1]
		var n = a.length
		console.time('countingSort')
		CountingSort.countingSort(a,n)
		// quickSort.mergeSortInternally(a, 0)
		console.timeEnd('countingSort')
		console.log('array:', a)
```


> 使用 Heap.ts  堆算法的实现

```


```

> 使用 MergeSort.ts  合并排序算法

```TypeScript
let {MergeSort} = require('../index')
		// let mergeSort = new MergeSort()
		var a = [1, 23, 45, 56, 2, 3, 34, 22]
		var n = a.length
		console.time('mergeSort')
		var mergeSort = new MergeSort(a, n)
		mergeSort.mergeSortInternally(a, 0)
		console.timeEnd('mergeSort')
		console.log('array:', a)
```

> 使用 Nodes.ts   二叉树节点算法实现

```TypeScript
let {Nodes} = require('../index')
		var node1 = new Nodes(5)
		node1.insert(2)
		node1.insert(4)
		console.log(node1)

		// delete
		console.time('delete')
		node1.delete(3)
		console.timeEnd('delete')
		console.log('deleted::',node1)
```

> 使用 QuickSort.ts  快速排序算法实现

```TypeScript
let {QuickSort} = require('../index')
		// let mergeSort = new MergeSort()
		var a = [11,10,9,8,7,6,5,4,3,2,1]
		var n = a.length
		console.time('mergeSort')
		var quickSort = new QuickSort(a, n)
		// quickSort.mergeSortInternally(a, 0)
		console.timeEnd('mergeSort')
		console.log('array:', a)
```

> 使用 SyncPromise.ts   异步逻辑同步队列算法实现

```TypeScript
let {SyncPromise} = require('../index')
		let syncPromise = new SyncPromise()
		console.log(syncPromise)
		let self = this
		const a = (option) => {
			return new Promise((resolve, reject) => {
					console.log(option)
					resolve(option)
				}
			)
		}

		let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

		function method(option) {
			return (callback) => {
				a(option).then(data => {
					callback(null, data)
				})
			}
		}

		let arrayOfCallback = ids.map(id => {
			return method(id)
		})
		syncPromise.seriesOfArray(arrayOfCallback)
		expect(arrayOfCallback).to.be.a('array')
```

> 使用 Util.ts  帮助函数

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
			view: 'home',
			op: 'translate',
			sl: 'en',
			tl: 'zh-CN',
			text: 'what i want to do is that'
		}
		let getUrl = Util.json2url(testObj)
		console.log('getUrl::',getUrl)
```
