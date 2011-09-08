// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The result of a floating-point multiplication is governed by the rules of IEEE 754 double-precision arithmetics
 *
 * @section: 11.5.1;
 * @path: 11_Expressions/11.5_Multiplicative_Operators/11.5.1_Applying_the_asterisk_Operator/S11.5.1_A4_T8.js;
 * @description: Multiplication is not always associative (x * y * z is the same as (x * y) * z, not x * (y * z));
 */

//CHECK#1
if (Number.MAX_VALUE * 1.1 * 0.9 !== (Number.MAX_VALUE * 1.1) * 0.9) {
  $ERROR('#1: Number.MAX_VALUE * 1.1 * 0.9 === (Number.MAX_VALUE * 1.1) * 0.9. Actual: ' + (Number.MAX_VALUE * 1.1 * 0.9));
} 

//CHECK#2
if ((Number.MAX_VALUE * 1.1) * 0.9 === Number.MAX_VALUE * (1.1 * 0.9)) {
  $ERROR('#2: (Number.MAX_VALUE * 1.1) * 0.9 !== Number.MAX_VALUE * (1.1 * 0.9)');
}

