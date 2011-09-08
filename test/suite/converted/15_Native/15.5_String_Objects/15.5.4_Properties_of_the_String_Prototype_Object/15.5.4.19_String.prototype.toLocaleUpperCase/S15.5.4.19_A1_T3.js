// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleUpperCase()
 *
 * @section: 15.5.4.19;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.19_String.prototype.toLocaleUpperCase/S15.5.4.19_A1_T3.js;
 * @description: Checking by using eval;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (eval("\"bj\"").toLocaleUpperCase() !== "BJ") {
  $ERROR('#1: eval("\\"bj\\"").toLocaleUpperCase() === "BJ". Actual: '+eval("\"bj\"").toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

