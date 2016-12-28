// 表面上看是一个数组，传入参数的那一刻，数组参数就被解构成变量 x 和 y了。函数内部感受到的参数是 x 和 y
function add([x, y]) {
    return x + y;
}

add([1, 2]);

// 另外一个例子
let [a, b] = [[1, 2], [3, 4]].map(([a, b]) => a + b);  // 3, 7

console.log(`a: ${a}, b: ${b}`);

// 函数的结构参数也可以使用默认值
function move({x = 0, y = 0} = {x: 10, y: 10}) {
    return [x, y];
}
// 上面有两层默认值的概念：首先整个入参默认值(没有传入对象时,即为undefined时触发默认值)为对象 {x: 10, y: 10}，再个是 x、y 没有值是分别的默认值是0
// 参数对象结构出 x、y，然后x、y 组装成数组返回

move({x: 3, y: 8}); //[3, 8]
move({x: 3});       //[3, 0]
move({y: 8});       //[0, 8]
move({});           //[0, 0]
move();             //[10, 10]

// 再次测试下为undefined时触发默认值
let [x, y, z] = [1, undefined, 3].map((x = 'default-val') => x);  // [1, 'default-val', 3];