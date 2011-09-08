// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check For Statement for automatic semicolon insertion
 *
 * @section: 7.9, 12.6.3;
 * @path: 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A6.1_T5.js;
 * @description: for ( \n semicolon \n\n semicolon \n);
 */

//CHECK#1
for(
    ;
    
    ;
) {
  break;
}

