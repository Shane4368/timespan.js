# TimeSpan.js

[![Codacy Badge][codacy-badge]][codacy-dash]
![GitHub package.json version][package.json-version]
![GitHub LICENSE](https://img.shields.io/github/license/Shane4368/timespan.js.svg)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

Based off C#'s TimeSpan structure.

## Installation
Ensure you have git installed, then run `npm i shane4368/timespan.js`.

## Examples

### Overview
```js
const { TimeSpan } = require("timespan.js");

const ts = TimeSpan.fromSeconds(3);

console.log(ts);
```

### Numerical Operations
```js
const ts1 = TimeSpan.fromMinutes(1);
const ts2 = TimeSpan.fromSeconds(10);

console.log(ts1 - ts2);	// 50000
console.log(ts1 + ts2);	// 70000
```

From the above example, subtracting the TimeSpans return the difference in milliseconds.
This is possible because the TimeSpan class implements its own valueOf method.

### Parsing
```js
const ts1 = TimeSpan.parse("2.04:10:05.006");	// Can also be formatted 00:00:00

const ts2 = TimeSpan.parse("2 days 4 hrs 10 mins 5.006 secs".split(" "));

const ts3 = TimeSpan.parse([2, 4, 10, 5, 6]);	// days, hrs, mins, secs, ms
const ts4 = TimeSpan.parse([2, 4, 10, 5]);	// days, hrs, mins, secs
const ts5 = TimeSpan.parse([2, 4, 10]);		// hrs, mins, secs
```

#### Table showing valid units for the second method of parsing
Days | Hours | Minutes | Seconds
:--: | :---: | :-----: | :------:
days | hours | minutes | seconds
day  | hour  | minute  | second
---- | hrs   | mins    | secs
---- | hr    | min     | sec

*NOTE: You'd need to provide seconds as a decimal if you wish to specify milliseconds.*

<!-- -------------------------------- REFERENCE LINKS -------------------------------- -->

[package.json-version]: https://img.shields.io/github/package-json/v/Shane4368/timespan.js.svg
[codacy-badge]: https://api.codacy.com/project/badge/Grade/1827d938c0d94d8bbe3ad8f1df7393ee
[codacy-dash]: https://www.codacy.com/manual/Shane4368/timespan.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Shane4368/timespan.js&amp;utm_campaign=Badge_Grade