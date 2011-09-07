// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype has the property "toLocaleDateString"
 *
 * @id: S15.9.5_A06_T1;
 * @section: 15.9.5;
 * @description: The Date.prototype has the property "toLocaleDateString";
 */

if(Date.prototype.hasOwnProperty("toLocaleDateString") !== true){
  $ERROR('#1: The Date.prototype has the property "toLocaleDateString"');
}

