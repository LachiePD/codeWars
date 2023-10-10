function moveZeros(arr) {
  let copy = arr;
  let zeros = [];
  
  for(let i  = 0; i <copy.length; i++){
    if (copy[i] === 0){
      copy.splice(i, 1);
      zeros.push(0);
      i--;
    }
  }
  return copy.concat(zeros)
}



//note, wouldve been nice to see use of the .filter() function.
