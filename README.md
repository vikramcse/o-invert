# o-invert
Returns a copy of object with inverted keys and values of an object

## Install

```sh
$ npm install --save o-invert
```
## `The object's all values must be unique`

## Example

```js
var invert = require('o-invert');
console.log(invert({name: "Vikram", surname: "Jadhav"}));
// -> { Vikram: 'name', Jadhav: 'surname' }
```

### `require('o-invert')(object)`

**Arguments**:

- `object`: An object that to be inverted

**Returns**: Returns a copy of object with inverted keys and values of an object

## License

&copy; 2016 Vikram Jadhav. MIT License
