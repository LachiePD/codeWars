  let input = array;
  let snailArray = [];
  
  
  while(input.length > 0){
    snailArray = [...snailArray, ...top(input)];
    input = removeTop(input);
    
    snailArray = [...snailArray, ...right(input)];
    input = removeRight(input);
    
    snailArray = [...snailArray, ...bottom(input)];
    input = removeBottom(input);
    
    snailArray = [...snailArray, ...left(input)];
    input = removeLeft(input)
  }

  return [...snailArray];
}



const top = (input) =>{
  let parsed = []
  for(let number of input[0])
    {
      parsed.push(number)
    }
  return parsed
}

const removeTop = (input) => {
  let newInput = input;
  newInput.shift();
  
  return newInput;
}

const right = (input) =>{
  let parsed = [];
  
  for(let array of input){
    let newVal = array[array.length-1]
    parsed.push(newVal);
  }
  
  return parsed;
}

const removeRight = (input) =>{
  let newInput = input;
  
  for(let array of newInput){
    array.pop();
  }
  
  return newInput;
}

const bottom = (input) =>{
  
  let parsed = []
  
  if(input[input.length-1]){
  parsed = [...input[input.length-1]].reverse();
    }
  return parsed;
}

const removeBottom = (input)=>{
 
  let newInput = input;
  
      newInput = input.pop();
  return input;
  
}


const left = (input) =>{
  
  let parsed = [];
  for(let i = input.length-1; i >= 0; i--)
    {
      parsed.push(input[i][0])
    }
  return parsed;
  
}

const removeLeft = (input) =>{
  
  let newInput = input;
  for(let arr of input){
    arr.shift();
  }
  return newInput;
  
}
