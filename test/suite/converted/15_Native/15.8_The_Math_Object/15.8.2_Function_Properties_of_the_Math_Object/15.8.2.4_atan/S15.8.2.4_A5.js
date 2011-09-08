// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is -Infinity, Math.atan(x) is an implementation-dependent approximation to -PI/2
 *
 * @section: 15.8.2.4;
 * @path: 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.4_atan/S15.8.2.4_A5.js;
 * @description: Checking if Math.atan(-Infinity) is an approximation to -PI/2;
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js"); 
 
// CHECK#1

var x = -Infinity;
if (!isEqual(Math.atan(x), -Math.PI/2))
{
	$ERROR("#1: '!isEqual(Math.atan(-Infinity), -Math.PI/2)'");
}

