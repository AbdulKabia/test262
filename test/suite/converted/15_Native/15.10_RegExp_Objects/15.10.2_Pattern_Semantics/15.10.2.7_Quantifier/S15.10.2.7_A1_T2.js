// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production QuantifierPrefix :: { DecimalDigits , DecimalDigits } evaluates as ...
 *
 * @section: 15.10.2.7;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.7_Quantifier/S15.10.2.7_A1_T2.js;
 * @description: Execute /\d{2,4}/.test("the 7 movie") and check results;
 */

__executed = /\d{2,4}/.test("the 7 movie");

//CHECK#1
if (__executed) {
	$ERROR('#1: /\\d{2,4}/.test("the 7 movie") === false');
}


