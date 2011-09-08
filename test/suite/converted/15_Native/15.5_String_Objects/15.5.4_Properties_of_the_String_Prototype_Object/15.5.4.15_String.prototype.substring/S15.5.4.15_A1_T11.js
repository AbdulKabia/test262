// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring (start, end)
 *
 * @section: 15.5.4.15;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A1_T11.js;
 * @description: Arguments are objects, and instance is string, objects have overrided valueOf function, that return exception;
 */

var __obj = {valueOf:function(){throw "instart";}};
var __obj2 = {valueOf:function(){throw "inend";}};
var __str = {str__:"ABB\u0041BABAB"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    with(str__){
        try {
          var x = substring(__obj,__obj2);
          $FAIL('#1: "var x = substring(__obj,__obj2)" lead to throw exception');
        } catch (e) {
          if (e!=="instart") {
            $ERROR('#1.1: Exception === "instart". Actual: '+e);
          }
        }
    }
}
//
//////////////////////////////////////////////////////////////////////////////

