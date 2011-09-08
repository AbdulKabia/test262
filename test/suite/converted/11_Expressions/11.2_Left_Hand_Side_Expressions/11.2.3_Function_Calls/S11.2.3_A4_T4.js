// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If MemberExpression does not implement the internal [[Call]] method, throw TypeError
 *
 * @section: 11.2.3;
 * @path: 11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.3_Function_Calls/S11.2.3_A4_T4.js;
 * @description: Checking Global object case;
 */

//CHECK#1
try {
  this();
  $ERROR('#1.1: this() throw TypeError. Actual: ' + (this()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: this() throw TypeError. Actual: ' + (e));	
  }
}

