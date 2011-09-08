// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
 * returns an Array object containing the results of the match, or null if the string did not match
 *
 * @section: 15.10.6.2;
 * @path: 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A1_T3.js;
 * @description: String is new Object("abcdefghi") and RegExp is /a[a-z]{2,4}/;
 */

__executed = /a[a-z]{2,4}/.exec(new Object("abcdefghi"));

__expected = ["abcde"];
__expected.index=0;
__expected.input="abcdefghi";

//CHECK#0
if ((__executed instanceof Array) !== true) {
	$ERROR('#0: __executed = /a[a-z]{2,4}/.exec(new Object("abcdefghi")); (__executed instanceof Array) === true');
}

//CHECK#1
if (__executed.length !== __expected.length) {
  $ERROR('#1: __executed = /a[a-z]{2,4}/.exec(new Object("abcdefghi")); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
  $ERROR('#2: __executed = /a[a-z]{2,4}/.exec(new Object("abcdefghi")); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
  $ERROR('#3: __executed = /a[a-z]{2,4}/.exec(new Object("abcdefghi")); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__executed[index] !== __expected[index]) {
    $ERROR('#4: __executed = /a[a-z]{2,4}/.exec(new Object("abcdefghi")); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
  }
}


