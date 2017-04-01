"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = require("./sample");
console.log("add=" + add(1, 2));
var Sample = require("./sample_class");
var s = new Sample('hohohhohoh');
s.echo();
