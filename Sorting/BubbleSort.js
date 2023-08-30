const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for(let i = 0; i < array.length-1 ; i++){
        for(let j = i+1; j < array.length ; j++){
          if(array[j] < array[i]){
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
          }
        }
    }
  return numbers
}

console.log(bubbleSort(numbers));
console.log(numbers);