// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function.prototype.toString.length property has the attribute ReadOnly
 *
 * @section: 15.3.4.2;
 * @path: 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.2_Function.prototype.toString/S15.3.4.2_A10.js;
 * @description: Checking if varying the Function.prototype.toString.length property fails;
 */

//CHECK#1
if (!(Function.prototype.toString.hasOwnProperty('length'))) {
  $FAIL('#1: the Function.prototype.toString has length property.');
}

var obj = Function.prototype.toString.length;

Function.prototype.toString.length = function(){return "shifted";};

//CHECK#2
if (Function.prototype.toString.length !== obj) {
  $ERROR('#2: the Function.prototype.toString length property has the attributes ReadOnly.');
}

