/*********************************************
* 1. Menyusun Barisan Bintang
**********************************************/
 var rows1 =5;

 for (var i =0; i <rows1; i++ ){
     console.log("*")
 }


 /**************************************************
* 2. Menyusun Barisan Bintang Dengan Nested Looping
****************************************************/

var rows2 =5;

var tampung ="";
for (var i=0; i <rows2; i++){
  for (var j=0; j <rows2; j++){
  
  tampung +="*";
  }
  console.log(tampung);
  tampung ="";
}


/***************************************************
*3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
****************************************************/

var rows3 =5;

var tampung ="";
for (var i=0; i <=rows3; i++){
  for (var j=0; j <i; j++){
  
  tampung +="*";
  }
  console.log(tampung);
  tampung ="";
}