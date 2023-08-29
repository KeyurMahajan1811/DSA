function reverseString(str ,i,j){
   let stringArray =  str.split("");
    function swap(){
        if(i < j){
            let temp = stringArray[i];
            stringArray[i] = stringArray[j];
            stringArray[j]=temp;
    
           swap(stringArray,++i,--j);
        }
    }
    swap();
    return stringArray.join('');
}   


let str = "My Cat Name is Bagheera";

console.log(reverseString(str,0,str.length-1)); 



function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array) {
      
      if(array.length > 0) {
        reversedArray.push(array.pop());
        addToArray(array);
      }
      return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
  }
  
  console.log(reverseString('yoyo master'));
  
  function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
  console.log(reverseStringRecursive('yoyo master'));


