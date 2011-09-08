// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * DecimalLiteral :: DecimalIntegerLiteral ExponentPart
 *
 * @section: 7.8.3;
 * @path: 07_Lexical_Conventions/7.8_Literals/7.8.3_Numeric_Literals/S7.8.3_A1.2_T4.js;
 * @description: ExponentPart :: E -DecimalDigits;
 */

//CHECK#0
if (0E-1 !== 0) {
  $ERROR('#0: 0E-1 === 0');
}

//CHECK#1
if (1E-1 !== 0.1) {
  $ERROR('#1: 1E-1 === 0.1');
}

//CHECK#2
if (2E-1 !== 0.2) {
  $ERROR('#2: 2E-1 === 0.2');
}

//CHECK#3
if (3E-1 !== 0.3) {
  $ERROR('#3: 3E-1 === 0.3');
}

//CHECK#4
if (4E-1 !== 0.4) {
  $ERROR('#4: 4E-1 === 0.4');
}

//CHECK#5
if (5E-1 !== 0.5) {
  $ERROR('#5: 5E-1 === 0.5');
}

//CHECK#6
if (6E-1 !== 0.6) {
  $ERROR('#6: 6E-1 === 0.6');
}

//CHECK#7
if (7E-1 !== 0.7) {
  $ERROR('#7: 7E-1 === 0.7');
}

//CHECK#8
if (8E-1 !== 0.8) {
  $ERROR('#8: 8E-1 === 0.8');
}

//CHECK#9
if (9E-1 !== 0.9) {
  $ERROR('#9: 9E-1 === 0.9');
}

