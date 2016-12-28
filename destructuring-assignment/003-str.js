// 啊哦 typescript 在 解构赋值 方面 好像支持的还不是很到位，不知道是不是因为本地的node 版本低问题
// 将文件 改为了js


const [a, b , c] = 'hello';
console.log(`a: ${a}, b: ${b}, c: ${c}`);


let {length : len} = 'hello';
console.log(len);