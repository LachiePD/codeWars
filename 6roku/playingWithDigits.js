//PREP: PRARAMETERS, RETURNS, EXAMPLES, PSUEDO CODE
//
/*Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.
*/



//Parameter:
//two ints are given, the first will be broken down into individual digits, a power will be applied to the single digit, this power will be relative to the second parameter.
//
//The second int is the beginning of the power scale that will be applied to the digits given from the first parameter. This power will be increased per index of the digits from param1. 
//
//
//Return:
//An int will be returned. After all the digits from first param are given a power, they will be summed together. The first parameter will be divided by this sum, if there is no remainder, then the result will be returned. If there is a remainder, then -1 will be returned.
//
//Example:
//digPow(12, 1) => 1^1 + 2^2 = 5. 12/5 = 2.4. -1 will be returned.
//
//digPow(89, 1)=> 8^1 + 9^2 = 89. 89/89 =1. 1 will be returned.
//
//
//Psuedo code. 
//
//function(dividend, powStart){
//  arr[] = dividend.split('');
//  arr.map(digit, index =>{return digit^(powStart + index)})
//  const divisor = arr.reduce(digit, acc => acc += digit, 0)
//  
//  if(dividend % divisor !== 0){return -1}
//
//  return(dividend/divisor);
//  }
//
function digPow(n, p){

  let conversion = String(n)
  let arr = conversion.split('');
  arr = arr.map(digit=>(Number(digit)))

  
  arr = arr.map((digit, index)=>
    (Math.pow(digit, index+p))
  )
  

 arr= arr.reduce((digit, acc)=>digit+acc, 0)

 
  if(arr%n!== 0)return -1;
  
  else{return arr/n}

}
//If I was to optimise, I would find a better way to parse the digit into a broken array, rather than turn it into a string, then  break it, then map through the arr to convert each thing back into an int.
