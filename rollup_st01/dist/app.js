(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('debug')) :
    typeof define === 'function' && define.amd ? define(['debug'], factory) :
    (factory(global.aaa));
}(this, (function (aaa) { 'use strict';

aaa = 'default' in aaa ? aaa['default'] : aaa;

function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i - 0] = arguments[_i];
    }
    return nums.reduce(function (x, y) { return x + y; });
}

var debug = aaa('app');
debug('test');
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

})));