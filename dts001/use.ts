import add = require('./sample')
console.log(`add=${add(1,2)}`);

import Sample = require('./sample_class')
let s = new Sample('hohohhohoh')
s.echo();