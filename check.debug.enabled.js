'use strict';


// Note: run this with and without DEBUG environment variable set
// Check `npm run` for handy scripts

const debugWithoutNamespace = require('debug');
const withNamespace = debugWithoutNamespace('fde:check');
const util = require('./util');


console.log('Without namespace', typeof debugWithoutNamespace.enabled);
console.log('Namespaces', typeof withNamespace.enabled);

// Lines using at() with a debug required with no namespace doesn't get shown
// even when calling this script with `DEBUG=*` set
debugWithoutNamespace(util.at(), 'no namespace debug line, using debug.enabled as function');


withNamespace(util.at(), 'namespaced debug line');

