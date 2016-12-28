let it = makeIterator(['a', 'b', 'c', 'd']);
//console.log(it.next());
//console.log(it.next());

function makeIterator(arr) {
    let nextIndex = 0;
    return {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    return nextIndex < arr.length ? {
                        value: arr[nextIndex++],
                        done: false
                    } : {
                            value: undefined,
                            done: true
                        };
                }
            };
        }
    };
}
console.log(it);

for (let s of it) {
    console.log(s);
}