let answer = 1;
function findFactorialRecursive(number) {
    answer = answer*number;
    if(number === 1 ){
        return answer
    } 
    else {
        return findFactorialRecursive(--number);
    }
}
  function findFactorialIterative(number) {
    let answer = 1;
    while(number > 1){
        answer = answer * number;
        number--;
    }
    return answer;
  }

 console.log(findFactorialRecursive(5)); 
 console.log(findFactorialIterative(5)); 