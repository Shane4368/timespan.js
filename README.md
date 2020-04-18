# TimeSpan.js
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

const ts3 = ts1 - ts2;
console.log(ts3);	// 50000
```
From the above example, subtracting the TimeSpans return the difference in milliseconds.
This is possible because the TimeSpan class implements its own valueOf method.