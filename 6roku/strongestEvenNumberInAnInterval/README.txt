I couldnt get the solution in the end, here is what I got up to:

function strongestEven(n, m){
  let arr = [n, m];
  let champion = {int:arr[0], strength:0}
  
  for(let i = arr[0]; i<=arr[1]; i++){
   
    if(oddChecker(i)){
    let iStrength = strengthChecker(i);
    
    if(iStrength > champion.strength){
      champion= {int: i, strength:iStrength};
    }
      }
  }

  return champion.int;
}

function strengthChecker(num){
  
  let ele = num;
  
  let strength = 0;
  
  while(ele%2 ===0){
    ele = ele/2;
    strength++;
  }
  return strength
}

function oddChecker(num){
  let str = num.toString();
  
  let intToCheck = str.charAt(str.length -1);
  if(parseInt(intToCheck)%2 !==0){
    return false
  }
  else{
  return true;
  }
  
  
}





It seems the thing I was missing was the ability to convert a worded problem into a function to code out. The solutions I found online all started off with converting it to a function expression then coding that, I need to find a resource to learn how to do that I think.
