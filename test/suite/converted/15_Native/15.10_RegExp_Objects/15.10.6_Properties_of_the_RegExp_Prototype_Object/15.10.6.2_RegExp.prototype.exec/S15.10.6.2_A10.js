// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype.exec.length property has the attribute ReadOnly
 *
 * @section: 15.10.6.2;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A10.js;
 * @description: Checking if varying the RegExp.prototype.exec.length property fails;
 */

//CHECK#1
if (RegExp.prototype.exec.hasOwnProperty('length') !== true) {
  $FAIL('#1: RegExp.prototype.exec.hasOwnProperty(\'length\') === true');
}

__obj = RegExp.prototype.exec.length;

RegExp.prototype.exec.length = function(){return "shifted";};

//CHECK#2
if (RegExp.prototype.exec.length !== __obj) {
  $ERROR('#2: __obj = RegExp.prototype.exec.length; RegExp.prototype.exec.length = function(){return "shifted";}; RegExp.prototype.exec.length === __obj. Actual: ' + (RegExp.prototype.exec.length));
}

