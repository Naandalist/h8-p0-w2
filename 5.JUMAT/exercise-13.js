
/*********************************************
* Logic Challenge - X dan O
**********************************************/
function xo(str) {
    // you can only write your code here!
    var panjangStr = (str.length -1);
    var temp1 =0;
    var temp2 =0;

    for (var index =0; index <=panjangStr; index++){ 
  
      if (str[index] == "x"){
        temp1 +=1;
      }
      else if (str[index] == "o"){
        temp2 +=1;
      }
    }
    
    if ( temp1 != temp2){
      return false
    }
    else{
      return true
    } 
  }
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true