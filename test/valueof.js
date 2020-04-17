"use strict";

const { TimeSpan } = require("../dist/index");

let ts1 = TimeSpan.fromMinutes(1);
let ts2 = TimeSpan.fromSeconds(10);
let ts3 = TimeSpan.fromMilliseconds(60000);	// 1 minute


console.log("------------------ Testing comparison ------------------");

console.log("ts1 == ts3 :", ts1 == ts3);	// false
console.log("ts1 != ts3 :", ts1 != ts3);	// true
console.log("ts1.equals(ts3) :", ts1.equals(ts3));	// true
console.log("!ts1.equals(ts3) :", !ts1.equals(ts3));	// false
console.log("ts1 > ts2 :", ts1 > ts2);	// true
console.log("ts1 < ts3 :", ts1 < ts3);	// false
console.log("ts1 >= ts3 :", ts1 >= ts3);	// true
console.log("ts1 <= ts3 :", ts1 <= ts3);	// true


console.log("------------- Testing arithmetic operations -------------");

console.log("++ts2 :", ++ts2);	// 10001
console.log("--ts2 :", --ts2);	// 10000
console.log("ts1 - ts3 :", ts1 - ts3);	// 0
console.log("ts1 + ts3 :", ts1 + ts3);	// 120000
console.log("ts1 / ts2 :", ts1 / ts2);	// 6
console.log("ts1 * ts2 :", ts1 * ts2);	// 600000000
console.log("ts1 % ts2 :", ts1 % ts2);	// 0


console.log("------------- Testing assignment operators -------------");

console.log("ts1 -= ts3 :", ts1 -= ts3);	// 0
console.log("ts1 += ts3 :", ts1 += ts3);	// 60000
console.log("ts1 /= ts2 :", ts1 /= ts2);	// 6
console.log("ts1 *= ts2 :", ts1 *= ts2);	// 60000
console.log("ts1 %= ts2 :", ts1 %= ts2);	// 0