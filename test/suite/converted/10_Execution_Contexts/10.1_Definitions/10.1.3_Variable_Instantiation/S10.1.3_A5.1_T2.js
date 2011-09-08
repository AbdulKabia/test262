// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * For each VariableDeclaration or VariableDeclarationNoIn in the
 * code, create a property of the variable object whose name is the Identifier
 * in the VariableDeclaration or VariableDeclarationNoIn, whose value is
 * undefined and whose attributes are determined by the type of code
 *
 * @section: 10.1.3;
 * @path: 10_Execution_Contexts/10.1_Definitions/10.1.3_Variable_Instantiation/S10.1.3_A5.1_T2.js;
 * @description: Checking existence of the variable object property with formal parameter;
 */

//CHECK#1
function f1(x){
  var x;
  
  return typeof x;
}

if(!(f1() === "undefined")){
  $PRINT('#1: f1(1) === "undefined"');
}

//CHECK#2
function f2(x){
  var x;
  
  return x;
}

if(!(f2() === undefined)){
  $PRINT('#1: f2(1) === undefined');
}

