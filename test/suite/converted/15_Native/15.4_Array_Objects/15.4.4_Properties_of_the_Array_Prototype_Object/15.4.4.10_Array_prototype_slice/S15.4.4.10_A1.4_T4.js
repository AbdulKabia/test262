// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If start is negative, use max(start + length, 0).
 * If end is negative, use max(end + length, 0)
 *
 * @section: 15.4.4.10;
 * @path: 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.10_Array_prototype_slice/S15.4.4.10_A1.4_T4.js;
 * @description: start = end < -length;
 */

var x = [0,1,2,3,4];
var arr = x.slice(-6,-6);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(-6,-6); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 0) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(-6,-6); arr.length === 0. Actual: ' + (arr.length));
}      

//CHECK#3
if (arr[0] !== undefined) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(-6,-6); arr[0] === undefined. Actual: ' + (arr[0]));
}

