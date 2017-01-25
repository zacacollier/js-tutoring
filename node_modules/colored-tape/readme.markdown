# colored-tape

color result of [tape](https://github.com/substack/tape)

forked from [substack/tape](https://github.com/substack/tape)

## Example

``` js
var test = require('colored-tape');

test('timing test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});
```

## Installation

With [npm](https://npmjs.org) do:

```
npm install colored-tape
```

# license

MIT (same as [substack/tape](https://github.com/substack/tape))
