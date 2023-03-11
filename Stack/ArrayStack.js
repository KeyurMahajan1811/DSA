class Stack {
    constructor() {
      this.stackArray = [];
      this.length = 0;
    }
    push(value){
      this.stackArray.push(value);
      this.length++;
      return this.stackArray;
    }
    
    pop(){
      this.stackArray.pop();
      this.length--;
      return this.stackArray;
    }
  
    peek(){
      return this.stackArray[this.length-1];
    }
  }
  
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.push(4);
  myStack.push(5);
  myStack.push(6);
  console.log(myStack);
  console.log(myStack.pop());
  console.log(myStack.pop());
  
  console.log("peek",myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  