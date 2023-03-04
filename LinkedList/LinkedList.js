class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    if(this.head === this.tail){
        this.tail = {
            value: value,
            next: null,
        }
        this.head.next = this.tail;
    }
    else{
        let newTail = {
            value : value,
            next: null
        }
        this.tail.next = newTail;
        this.tail = this.tail.next;
    }
    this.length++;
  }
  
  prepend(value){
      let newNode = {
          value : value,
          next: null
      }
     newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(29)
console.log(myLinkedList);
myLinkedList.prepend(1)
console.log(myLinkedList.prepend(2));
