// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * TypeError is subclass of Error from instanceof operator point of view
 *
 * @section: 11.8.6;
 * @path: 11_Expressions/11.8_Relational_Operators/11.8.6_The_instanceof_operator/S11.8.6_A5_T1.js;
 * @description: Checking Error case;
 */

var __err = new Error;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__err instanceof Error)) {
	$ERROR('#1: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__err instanceof TypeError) {
	$ERROR('#2: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

var err__ = Error('failed');

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!(err__ instanceof Error)) {
	$ERROR('#3: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (err__ instanceof TypeError) {
	$ERROR('#4: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////


