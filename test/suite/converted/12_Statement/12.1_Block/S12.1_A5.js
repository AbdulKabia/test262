// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * StatementList: StatementList Statement inside the Block is evaluated from left to right
 *
 * @section: 12.1;
 * @path: 12_Statement/12.1_Block/S12.1_A5.js;
 * @description: Throwing exceptions within embedded/sequence Blocks;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	throw 1;
    throw 2;
    throw 3;
    $ERROR('1.1: throw 1 lead to throwing exception');
} catch (e) {
	if (e!==1) {
		$ERROR('#1.2: Exception === 1. Actual:  Exception ==='+ e);
	}
}
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
	{
	    throw 1;
        throw 2;
    }
    throw 3;
    $ERROR('#2.1: throw 1 lead to throwing exception');
} catch (e) {
	if (e!==1) {
		$ERROR('#2.2: Exception === 1. Actual:  Exception ==='+ e);
	}
}
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
try {
	throw 1;
    {
        throw 2;
        throw 3;
    }
    $ERROR('#3.1: throw 1 lead to throwing exception');
} catch (e) {
	if (e!==1) {
		$ERROR('#3.2: Exception === 1. Actual:  Exception ==='+ e);
	}
}
////////////////////////////////////////////////////////////////////////////////


