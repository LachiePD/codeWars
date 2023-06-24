// complete the function
//PREP parameter, return , example, psuedo code

//input is a string, in camel casing
//return is a string, broken up with spaces
//eg solution("camelCase") => "camel case"
function solution(string) {
  const isUpperCase = (char) =>{
    return char === char.toUpperCase() && char !== char.toLowerCase();
  }
    let inputArray = string.split('');
  console.log(inputArray)
  
    for(let i = 1; i < inputArray.length -1 ;i++){
      if(isUpperCase(inputArray[i])){
    
        inputArray.splice(i, 0, " ");
        i++;
      }
    }
  let answer = inputArray.join('')
  console.log(answer);
  return answer
}

