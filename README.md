# optcheck

Checks requirements for and adds defaults to parameter objects

```javascript
var optcheck = require('optcheck');

var args = {async: false, type: 'json'};
optcheck(args)
    .defaults({
        async: true,
        url: 'http://localhost'
    })
    .requires('type', 'url');
args.should.eql({async: false, type: 'json', url: 'http://localhost'});
```

## API

### `optcheck({})`

Takes a parameter object. 

Returns an `optcheck` object to operate on the parameter object passed in.

### `.requires([])`

Checks the parameter object for properties in `array`.

Returns `this`.

### `.defaults({})`

Adds properties from `object` to the parameter object if the parameter object needs the property.

Returns `this`.
