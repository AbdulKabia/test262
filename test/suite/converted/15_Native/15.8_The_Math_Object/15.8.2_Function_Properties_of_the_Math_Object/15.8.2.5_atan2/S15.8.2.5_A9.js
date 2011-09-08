// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If y is -0 and x is +0, Math.atan2(y,x) is -0
 *
 * @section: 15.8.2.5;
 * @path: 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.5_atan2/S15.8.2.5_A9.js;
 * @description: Checking if Math.atan2(y,x) is -0, where y is -0 and x is +0;
 */

// CHECK#1
y = -0;
x = +0;
if (Math.atan2(y,x) !== -0)
	$ERROR("#1: Math.atan2(" + y + ", " + x + ") !== -0");

