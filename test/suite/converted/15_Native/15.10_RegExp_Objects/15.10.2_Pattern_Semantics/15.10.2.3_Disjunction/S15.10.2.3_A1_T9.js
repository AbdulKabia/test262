// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The | regular expression operator separates two alternatives.
 * The pattern first tries to match the left Alternative (followed by the sequel of the regular expression).
 * If it fails, it tries to match the right Disjunction (followed by the sequel of the regular expression)
 *
 * @section: 15.10.2.3;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.3_Disjunction/S15.10.2.3_A1_T9.js;
 * @description: Execute /(?:ab|cd)+|ef/i.exec("AEKFCDab") and check results;
 */

__executed = /(?:ab|cd)+|ef/i.exec("AEKFCDab");

__expected = ["CDab"];
__expected.index = 4;
__expected.input = "AEKFCDab";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(?:ab|cd)+|ef/i.exec("AEKFCDab"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(?:ab|cd)+|ef/i.exec("AEKFCDab"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(?:ab|cd)+|ef/i.exec("AEKFCDab"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(?:ab|cd)+|ef/i.exec("AEKFCDab"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


