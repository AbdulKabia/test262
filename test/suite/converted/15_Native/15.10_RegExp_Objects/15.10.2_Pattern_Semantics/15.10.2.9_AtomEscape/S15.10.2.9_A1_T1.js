// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * An escape sequence of the form \ followed by a nonzero decimal number n matches the result of the nth set of capturing parentheses (see 15.10.2.11)
 *
 * @section: 15.10.2.9, 15.10.2.11;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.9_AtomEscape/S15.10.2.9_A1_T1.js;
 * @description: Execute /\b(\w+) \1\b/.exec("do you listen the the band") and check results;
 */

__executed = /\b(\w+) \1\b/.exec("do you listen the the band");

__expected = ["the the", "the"];
__expected.index = 14;
__expected.input = "do you listen the the band";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /\\b(\\w+) \\1\\b/.exec("do you listen the the band"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /\\b(\\w+) \\1\\b/.exec("do you listen the the band"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /\\b(\\w+) \\1\\b/.exec("do you listen the the band"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /\\b(\\w+) \\1\\b/.exec("do you listen the the band"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


