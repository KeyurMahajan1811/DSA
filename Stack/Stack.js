class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value) {
      const newItem = new Node(value);
      if (this.top) {
        newItem.next = this.top;
        this.top = newItem;
      } else {
        this.top = newItem;
        this.bottom = newItem;
      }
      this.length++;
    }
    pop() {
      if (this.top) {
        const popedItem = this.top;
        if(this.top === this.bottom){
          this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return popedItem.value;
      } else {
        return null;
      }
    }
    //isEmpty
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
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack);
  
  