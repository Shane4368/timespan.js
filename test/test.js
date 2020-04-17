"use strict";

const { TimeSpan } = require("../dist/index");

// All three variables should have the same value.
const ts1 = TimeSpan.parse("2.04:10:05.006");
const ts2 = TimeSpan.parse("2 days 4 hrs 10 mins 5.006 secs".split(" "));
const ts3 = TimeSpan.parse([2, 4, 10, 5, 6]);

console.log(ts1);
console.log("---------------------------------------------");
console.log(ts2);
console.log("---------------------------------------------");
console.log(ts3);