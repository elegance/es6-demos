### Iterator 遍历器 接口，只要有实现Iterator接口，就标识可以完成遍历操作
遍历器返回：
```javascript
{
    next: fn,
    done: boolean
}
```

### 会调用Iterator接口的几个场合
#### 1. 解构赋值
对数组或Set进行解构赋值时，会默认调用`Symbol.iterator`方法
```javascript
let set = new Set().add('a').add('b').add('c');
let [x, y] = set;
// x=a, y=b

let [first, ...rest] = set;
// first=a, rest=[b, c];
```

#### 2. 扩展运算符
扩展运算符（`...`）也会调用`Symbol.iterator`方法
```javascript
let str = 'hello';
[...str]; // ['h','e','l','l','o']

let arr = ['b', 'c'];
['a', ...arr, 'd']; // ['a', 'b', 'c', 'd']
```

#### 3. yield* generator函数

#### 4. 其它场合
. for...of
. Array.from()
. Map(),Set(),WeakMap(),WeakSet() （比如：new Map([['a', 1], ['b', 2]]);）
. Promise.all()
. Promise.race()

#### 5. 字符串的Iterator接口
字符串是一个类似数组的对象，也原生具有Iterator接口。
```
let a = 'str';
typeof a[Symbol.iterator]; // function
let it = a[Symbol.iterator]();
it.next();
it.next();
```