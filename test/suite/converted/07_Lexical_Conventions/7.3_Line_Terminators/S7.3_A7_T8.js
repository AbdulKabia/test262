// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Line Terminators between operators are allowed
 *
 * @section: 7.3;
 * @path: 07_Lexical_Conventions/7.3_Line_Terminators/S7.3_A7_T8.js;
 * @description: Insert Line Terminator in var x=y<z;
 */

// CHECK#1
var y=2;
var z=3;
var
x
=
y
<
z
;
if (x !== true) {
  $ERROR('#1: var\\nx\\n=\\ny\\n<\\nz\\n; x === true. Actual: ' + (x));
}
x=0;

// CHECK#2
var y=2;
var z=3;
var
x
=
y
<
z
;
if (x !== true) {
  $ERROR('#2: var\\nx\\n=\\ny\\n<\\nz\\n; x === true. Actual: ' + (x));
}
x=0;

// CHECK#3
var y=2;
var z=3;
eval("\u2028var\u2028x\u2028=\u2028y\u2028<\u2028z\u2028");
if (x !== true) {
  $ERROR('#3: eval("\\u2028var\\u2028x\\u2028=\\u2028y\\u2028<\\u2028z\\u2028"); x === true. Actual: ' + (x));
}
x=0;

// CHECK#4
var y=2;
var z=3;
eval("\u2029var\u2029x\u2029=\u2029y\u2029<\u2029z\u2029");
if (x !== true) {
  $ERROR('#4: eval("\\u2029var\\u2029x\\u2029=\\u2029y\\u2029<\\u2029z\\u2029"); x === true. Actual: ' + (x));
}

