/*
 *
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
 * */



function generateHashtag (str) {
  
  str = str.trim();
  let inputArr = str.split('');
  if(inputArr.length === 0){
    return false
  }
  
  inputArr[0] = inputArr[0].toUpperCase();
  for(let i = 0; i < inputArr.length; i++){
     if(inputArr[i] == ' '){
       inputArr[i+1] = inputArr[i+1].toUpperCase();
       
       inputArr.splice(i, 1);
       i--
     }
  }
  if(inputArr.length > 139){return false}
  let answer = ['#', ...inputArr];
  answer = answer.join('');
  return answer
}
