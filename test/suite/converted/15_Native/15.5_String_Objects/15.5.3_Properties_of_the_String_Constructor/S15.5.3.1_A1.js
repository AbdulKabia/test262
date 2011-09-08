// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String has property prototype
 *
 * @section: 15.5.3.1, 15.5.4;
 * @path: 15_Native/15.5_String_Objects/15.5.3_Properties_of_the_String_Constructor/S15.5.3.1_A1.js;
 * @description: Checking String.hasOwnProperty('prototype');
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.hasOwnProperty('prototype'))) {
  $ERROR('#1: String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////


