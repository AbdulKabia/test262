// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Single line comment can contain FORM FEED (U+000C)
 *
 * @section: 7.2, 7.4;
 * @path: 07_Lexical_Conventions/7.2_White_Space/S7.2_A3.3_T2.js;
 * @description: Use real FORM FEED;
 */

//CHECK#1
var x = 0;
//singlelinecommentx = 1;
if (x !== 0) {
  $ERROR('#1: var x = 0; //singlelinecommentx = 1; x === 0. Actual: ' + (x));
}

