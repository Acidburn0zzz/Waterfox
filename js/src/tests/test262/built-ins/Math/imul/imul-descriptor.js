// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Math.imul
includes: [propertyHelper.js]
es6id: 20.2.2.19
---*/

verifyWritable(Math, "imul");
verifyNotEnumerable(Math, "imul");
verifyConfigurable(Math, "imul");

reportCompare(0, 0);
