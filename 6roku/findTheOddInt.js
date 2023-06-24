//PREP PARAM:array of ints, one int will have an odd number of times it shows.
//Returns the number that appears an odd number of times,
//example findOdd([1.1.1.1,2,2,2,3,3]) => 2;
/* Psuedo
function find([1,1,1,1,2,2,2,3,3]){

  call the input paramArr;
  
  make a loop to look at each value
  paramArr.map(number =>{
  let count = 0; //current count of the number;
  
  then , another loop to count the number of times the current number occurs.
  
  paramArr.forEach((2ndLoopNumber)=>{
  if(number === 2ndLoopNumber){
  count++;
  }
  })
  
  now, we check if this number can be divided by 2, if it cant, then thats out answer
  if(count %2 !== 0){return number}
  })

}
*/
function findOdd(A) {
  let answer = 0;
  A.map((num1) =>{
    let count =0;
    A.forEach(num2=>{
      if(num1 == num2){count++}
    })
    
    let canDivide = count%2;
    if(canDivide !==0){answer = num1}
  })
  return answer
}
