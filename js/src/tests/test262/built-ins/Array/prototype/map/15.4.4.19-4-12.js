// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-4-12
description: Array.prototype.map - 'callbackfn' is a function
---*/

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var testResult = [11, 9].map(callbackfn);

assert.sameValue(testResult.length, 2, 'testResult.length');
assert.sameValue(testResult[0], true, 'testResult[0]');
assert.sameValue(testResult[1], false, 'testResult[1]');

reportCompare(0, 0);
