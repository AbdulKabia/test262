// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Function Expression for automatic semicolon insertion
 *
 * @section: 7.9, 12.4, 11.2.5;
 * @path: 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A5.5_T3.js;
 * @description: Try use function f(o) {o.x = 1; return o;} \n (new Object()).x; construction;
 */

//CHECK#1
var result = function f(o) {o.x = 1; return o;}
(new Object()).x;
if (result !== 1) {
  $ERROR('#1: Check Function Expression for automatic semicolon insertion');
}

