"use strict";

const { TimeSpan } = require("../dist/index");

const timeSpan = TimeSpan.parse("2.04:10:05.006");

console.log(timeSpan);