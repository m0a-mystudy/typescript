"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
function hello() {
    console.log('hello');
    return this;
}
exports.hello = hello;
Observable_1.Observable.prototype.hello = hello;
