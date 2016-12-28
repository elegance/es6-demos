let {toString: s} = 123;
s === Number.prototype.toString

let {toString: b} = true;
b === Boolean.prototype.toString