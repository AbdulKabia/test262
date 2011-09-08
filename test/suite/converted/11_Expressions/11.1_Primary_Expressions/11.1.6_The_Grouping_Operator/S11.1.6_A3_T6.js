// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "This" operator only evaluates Expression
 *
 * @section: 11.1.6;
 * @path: 11_Expressions/11.1_Primary_Expressions/11.1.6_The_Grouping_Operator/S11.1.6_A3_T6.js;
 * @description: Applying grouping operator to delete and typeof operators;
 */

//CHECK#1
if (delete (x) !== true) {
  $ERROR('#1: delete (x) === true');
}

//CHECK#2
if (typeof (x) !== "undefined") {
  $ERROR('#2: typeof (x) === "undefined". Actual: ' + (typeof (x)));
}

