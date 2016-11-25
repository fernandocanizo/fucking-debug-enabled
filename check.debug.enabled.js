'use strict';


// Note: run this with and without DEBUG environment variable set
// Check `npm run` for handy scripts

const debugWithoutNamespace = require('debug');
const withNamespace = debugWithoutNamespace('fde:check');
const util = require('./util');


console.log('Without namespace', typeof debugWithoutNamespace.enabled);
console.log('Namespaces', typeof withNamespace.enabled, '\n');

console.log('Should print line 16');
debugWithoutNamespace('no namespace debug line, no at()');

console.log('Should print line 19');
debugWithoutNamespace(util.at(), 'no namespace debug line, using at()');

console.log('Should print line 22');
withNamespace('namespaced debug line, no at()');

console.log('Should print line 24');
withNamespace(util.at(), 'namespaced debug line, with at()');
