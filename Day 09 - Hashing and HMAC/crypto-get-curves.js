'use strict';

const crypto = require('crypto');
const curves = crypto.getCurves();

console.log(`ℹ️ Available curves: ${curves}`);