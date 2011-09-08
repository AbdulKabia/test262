// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is -Infinity, return false
 *
 * @section: 11.8.2, 11.8.5;
 * @path: 11_Expressions/11.8_Relational_Operators/11.8.2_The_Greater_than_Operator/S11.8.2_A4.7.js;
 * @description: y is number primitive;
 */

//CHECK#1
if ((Number.NEGATIVE_INFINITY > 0) !== false) {
  $ERROR('#1: (-Infinity > 0) === false');
}

//CHECK#2
if ((Number.NEGATIVE_INFINITY > 1.1) !== false) {
  $ERROR('#2: (-Infinity > 1.1) === false');
}

//CHECK#3
if ((Number.NEGATIVE_INFINITY > -1.1) !== false) {
  $ERROR('#3: (-Infinity > -1.1) === false');
}

//CHECK#4
if ((Number.NEGATIVE_INFINITY > Number.POSITIVE_INFINITY) !== false) {
  $ERROR('#4: (-Infinity > +Infinity) === false');
}

//CHECK#5
if ((Number.NEGATIVE_INFINITY > Number.MAX_VALUE) !== false) {
  $ERROR('#5: (-Infinity > Number.MAX_VALUE) === false');
}

//CHECK#6
if ((Number.NEGATIVE_INFINITY > Number.MIN_VALUE) !== false) {
  $ERROR('#6: (-Infinity > Number.MIN_VALUE) === false');
}


