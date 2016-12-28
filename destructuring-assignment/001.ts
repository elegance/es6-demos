// let a = 1;
// let b = 2;
// let c = 3;

// ==> 可以写成以下写法，按照对应位置，对变量赋值

let [a, b, c] = [1, 2, 3];

console.log(a, b ,c)
console.log('---------------------------------------------------------------------');

// 本质上，这种写法属于“模式匹配”，只要两边的模式相同，左边的变量就会被赋予对应的值
let [foo, [bar, baz]] = [1, [2, 3]];
console.log(foo, bar, baz);

let [, , third] = ['foo', 'bar', 'baz'];
console.log('third', third);

let [x, , z] = [1, 2, 3];
console.log(`x: ${x}, z: ${z}`);

let [head, ...tail] = [1, 2, 3, 4];
console.log(`head: ${head}, tail: ${tail}`);

let [x1, y1, ...z1] = ['a'];
console.log(`x1: ${x1}, y1: ${y1}`);

console.log('---------------------------------------------------------------------');

// 如果解构不成功，变量的值就变成了undefined
//let [foo2] = [];
//let [bar2, baz2]  = [1];
//console.log(foo2);
//console.log(bar2, baz2);
//console.log('---------------------------------------------------------------------');

// 不完全解构，左边的值只匹配一部分右边的值
let [x2, y2] = [1, 2, 3];
console.log(`x2: ${x2}, y2: ${y2}`)

let [x3, [y3], z3] = [1, [2, 3], 4];
console.log(`x3: ${x3}, y3: ${y3}, z3: ${z3}`);

// 如果右边不是数组，或者说是不可遍历的结构，那么将会报错
//let [a2] = 1;
//let [b2] = false;

// 对于Set结构也可以用于数组的结构赋值
let [a1, b1, c1] = new Set<string>(['a', 'b', 'c']);
console.log(`a1: ${a1}, b1: ${b1}, c1: ${c1}`);
