// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Equivalent to the expression RegExp.prototype.exec(string) != null
 *
 * @section: 15.10.6.3;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A1_T11.js;
 * @description: RegExp is /2|12/ and tested string is new Number(1.012);
 */

var __string = new Number(1.012);
__re = /2|12/;

//CHECK#0
if (__re.test(__string) !== (__re.exec(__string) !== null)) {
	$ERROR('#0: var __string = new Number(1.012); __re = /2|12/; __re.test(__string) === (__re.exec(__string) !== null)');
}


