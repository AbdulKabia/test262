// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1 evaluates Expression
 *
 * @section: 12.13;
 * @path: 12_Statement/12.13_The_throw_statement/S12.13_A2_T4.js;
 * @description: Throwing string;
 */

// CHECK#1
try{
  throw "exception #1";
}
catch(e){
  if (e!=="exception #1") $ERROR('#1: Exception ==="exception #1". Actual:  Exception ==='+ e );
}

// CHECK#2
var b="exception #1";
try{
  throw b;
}
catch(e){
  if (e!=="exception #1") $ERROR('#2: Exception ==="exception #1". Actual:  Exception ==='+ e );
}

