// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A property can have attribute DontEnum like all properties of Number
 *
 * @section: 8.6.1, 12.6.4, 15.7;
 * @path: 08_Types/8.6_The_Object_Type/8.6.1_Property_Attributes/S8.6.1_A2.js;
 * @description: Try to enumerate properties of Number;
 */

//CHECK#1
var count=0;
for (p in Number) count++;
if (count > 0){
  $ERROR('#1: count=0; for (p in Number) count++; count > 0. Actual: ' + (count));
}

