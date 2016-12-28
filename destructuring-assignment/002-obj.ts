// 结构赋值不仅可以用于数组，还可以用于对象
let {foo, bar} = {foo: 'aaa', bar: 'bbb'};

// 与数组的不同是，对象结构赋值时顺序就不重要了,同名属性会被赋值上

console.log(`foo: ${foo}, bar: ${bar}`);

// but 如果想要给同步的属性名赋值要写成这个样子：
let {foo:x, bar: y} = {foo: 'aaa', bar: 'bbb'};    // 这个表达式咋看容易记混，我是这样来理解的：把冒号":"理解成“给”的意思，整个理解起来就是：把对象的 “foo”给“x”；
console.log(`x: ${x}, y: ${y}`);

// 看到 let、var 等这样的形式：var {p: xxx} = xxObj 就这样去理解：取 xxObj对象的 p属性 ，按结构赋值的方式给到 xxx 变量 (如果xxx 也是前面提到的这种形式，那他本身不是变量，递归的按照这个逻辑去做)
// demo:
let node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

let {loc: {start: {line}}} = node;
console.log(line); // 搞来搞去，这里就是将  定义了一个 line 变量， 其值是：node.loc.start.line ，尼玛这种写法容易让人install b啊，我得写个 benchmark 对比下 `let line = node.loc.start.line`
// 测试结果有了 两种方式是一个数量级别的，没什么差别，看来 native 的支持就是强 ，测试代码`002-bench-test.ts`


// 方便的将对象的方法赋值到对应变量上来
let {log, round, floor} = Math;