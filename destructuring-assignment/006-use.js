//1. 交换变量的值
let [x, y] = [1, 2];
[x, y] = [y, x];    // 交换 x，y 的值，2,1

//2. 从函数返回多个值

// 返回一个数组
function example() {
    return [1, 2, 3];
}

let [a, b, c] = example();

// 返回一个对象
function example2() {
    return {
        foo: 1,
        bar: 2
    };
}
let {foo, bar} = example2();


//3. 函数参数的定义
function f([x, y, z]) {

}

f([1, 2, 3]);

function f2({x, y, z}) {

}
f2({z: 3, y: 2, x:1});

// 4. 提取JSON数据
let jsonData = {
    id: 42,
    status: 'ok',
    data: [862, 283]
};

let {id, status, data} = jsonData;
console.log(id, status, data);

// 5. 遍历Map结构
let map = new Map();
map.set('first', 'hello');
map.set('second', 'js');

for (let [key, value] of map) {
    console.log(key, value);
}

// 模块导入
//const { SourceMapConsumer, SourceNode } = require("source-map");