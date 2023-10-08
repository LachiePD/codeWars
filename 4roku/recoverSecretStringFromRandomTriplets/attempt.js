var recoverSecret = function(triplets) {
  let build = ([].concat(...triplets));


  triplets.forEach(trip=>{

    trip.forEach((char, charIndex)=>{
      if(charIndex!== 2){
        sorter(char, trip[charIndex+1], build)
      }
    }
                );


  })


}

const sorter = (char, nextChar, build) =>{
  
  for(let i =0; i < build.length; i++){
    if(build[i] == char){
      if(build[i+1] !==nextChar){
        build.splice(i, 1);
        i--;
        build.splice(findNext(nextChar, build), 0, char);
      }
    }
  }
  console.log(build)
} 

const findNext = (charToFind, arr) =>{
  arr.forEach((char, index) =>{
    if(char === charToFind){return index}
  })
}
