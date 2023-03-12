class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      const newItem = new Node(value);
      if(this.length === 0)
      {
        this.first = newItem;
        this.last = newItem;
        
      }else{
        this.last.next = newItem;
        this.last = this.last.next;
      }
      this.length++;
      return this;
    }
    dequeue(){
      if(this.length === 0){
        return null;
      }
      if(this.last === this.first){
        this.last= null;
        this.first= null;
        
      }
      else{
        this.first = this.first.next;
      }
      this.length--;
      return this;  
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  console.log(myQueue.enqueue('joy'))
  console.log(myQueue.enqueue('Matt'))
  console.log(myQueue.enqueue('Pavel'))
  console.log(myQueue.enqueue('Samir'))
  console.log(myQueue.enqueue('Elon'))
  console.log(myQueue.peek());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  
  
  //Joy
  //Matt
  //Pavel
  //Samir
  
  