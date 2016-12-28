import Benchmark = require('benchmark');

let suite = new Benchmark.Suite;

// 测试数据对象
let node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

suite
.add('normal-assignment', function() {
    let line = node.loc.start.line;
})
.add('deconstruction-assignment', function() {
    let {loc: {start: {line}}} = node;
})
.on('cycle', (event) => {
    console.log(String(event.target));
})
.on('complete', () => {
    console.log('complete');
})
.run({async: true});
