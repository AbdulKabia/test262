// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator ++x returns x = ToNumber(x) + 1
 *
 * @section: 11.4.4, 11.6.3;
 * @path: 11_Expressions/11.4_Unary_Operators/11.4.4_Prefix_Increment_Operator/S11.4.4_A3_T5.js;
 * @description: Type(x) is Object object or Function object;
 */

//CHECK#1
var x = {}; 
++x; 
if (isNaN(x) !== true) {
  $ERROR('#1: var x = {}; ++x; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
var x = function(){return 1}; 
++x; 
if (isNaN(x) !== true) {
  $ERROR('#2: var x = function(){return 1}; ++x; x === Not-a-Number. Actual: ' + (x));
}

