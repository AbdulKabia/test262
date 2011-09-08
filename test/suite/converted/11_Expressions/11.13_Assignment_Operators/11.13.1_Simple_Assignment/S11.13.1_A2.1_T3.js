// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x = y uses GetValue and PutValue
 *
 * @section: 11.13.1, 16;
 * @path: 11_Expressions/11.13_Assignment_Operators/11.13.1_Simple_Assignment/S11.13.1_A2.1_T3.js;
 * @description: If Type(LeftHandSideExpression) is not Reference, throw ReferenceError (or SyntaxError);
 * @negative;
 */

//CHECK#1
try {
  1 = 1;
  $ERROR('#1.1: 1 = 1 throw ReferenceError (or SyntaxError). Actual: ' + (1 = 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1 = 1 throw ReferenceError (or SyntaxError). Actual: ' + (e));  
  } else {
    1 = 1;
  }
}

