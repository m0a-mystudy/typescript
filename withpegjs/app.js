let parser  = require('./parser');
let node = require('./myNode');
let node2 = require('./MyNode');

test1 = new node2.MyText('hello')
console.log(test1 instanceof node.MyText)


let result = parser.parse('sample<1>text</1>. hello');
console.log(result instanceof node.MyElement);
