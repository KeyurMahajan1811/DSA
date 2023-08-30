const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length  = array.length;
    let min = 0;
    for(let i = 0 ; i< length-1 ; i++){
      min = i;
      for(let j = i+1 ; j< length ; j++){
         if(array[j] < array[min] ){
           min = j;
         }   
      }  
      let temp = array[min];
      array[min] = array[i] ;
      array[i] = temp;
    }
    return array;
  }

console.log( selectionSort(numbers) );