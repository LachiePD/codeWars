/*
PREP, 
PARAMETER: a list of items. could be string or int or perhaps truthy / falsy value
RETURNS: a list, with and duplicates next to eachother removed
EXAMPLE: [A,A,A, a, B, C, D] => [A, a, B, C, D]
PSEUDO:
const func = (listOfValues)=>{

  create a holder variable, this will hold the element before
  loop through each element in the iterable.
  if the element = the holder, remove it.
  return iterable
}
*/

var uniqueInOrder=function(iterable){
 //converts strings to arrays
  if(typeof(iterable) ==='string'){
    iterable = iterable.split('');
    }
 //0 value case
  if(iterable.length === 0){return iterable}
  
  let holder = null;
  
  for(let i = 0 ; i<iterable.length; i++){
    //last value = current value? remove current value
    if(iterable[i] === holder){iterable.splice(i, 1)
                            i--  }
    holder = iterable[i]
  }
  return(iterable)
}

/*best answer uses .filter()
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
*/
