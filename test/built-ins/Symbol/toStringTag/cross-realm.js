// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.tostringtag
es6id: 19.4.2.13
description: Value shared by all realms
info: |
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [cross-realm, Symbol.toStringTag]
---*/

var OSymbol = $262.createRealm().global.Symbol;

assert.sameValue(Symbol.toStringTag, OSymbol.toStringTag);
