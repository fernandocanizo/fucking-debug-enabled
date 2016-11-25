'use strict';


const debug = require('debug');

const at = () => {
  if (debug.enabled()) {
    return new Error().stack.split(/\n/)[2].trim();
  }
};


module.exports = {
  at,
}
