'use strict';

module.exports = function(object) {
  var result = {};
  var i = 0;

  if (!object) {
    throw new TypeError('Object as a first argument needed');
  }

  var keys = Object.keys(object);

  for(i = 0; i < keys.length; i++) {
    result[object[keys[i]]] = keys[i];
  }

  return result;
};
