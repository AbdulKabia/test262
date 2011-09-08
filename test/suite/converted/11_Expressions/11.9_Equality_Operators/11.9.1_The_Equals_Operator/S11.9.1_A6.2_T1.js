// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If one expression is undefined or null and another is not, return false
 *
 * @section: 11.9.1, 11.9.3;
 * @path: 11_Expressions/11.9_Equality_Operators/11.9.1_The_Equals_Operator/S11.9.1_A6.2_T1.js;
 * @description: x is null or undefined, y is not;
 */

//CHECK#1
if ((undefined == true) !== false) {
  $ERROR('#1: (undefined == true) === false');
}

//CHECK#2
if ((undefined == 0) !== false) {
  $ERROR('#2: (undefined == 0) === false');
}

//CHECK#3
if ((undefined == "undefined") !== false) {
  $ERROR('#3: (undefined == "undefined") === false');
}

//CHECK#4
if ((undefined == {}) !== false) {
  $ERROR('#4: (undefined == {}) === false');
}

//CHECK#5
if ((null == false) !== false) {
  $ERROR('#5: (null == false) === false');
}

//CHECK#6
if ((null == 0) !== false) {
  $ERROR('#6: (null == 0) === false');
}

//CHECK#7
if ((null == "null") !== false) {
  $ERROR('#7: (null == "null") === false');
}

//CHECK#8
if ((null == {}) !== false) {
  $ERROR('#8: (null == {}) === false');
}

