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
    return this.printList()
  }
  
  prepend(value){
      let newNode = {
          value : value,
          next: null
      }
     newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this.printList();
  }

  printList(){
    let currentNode = this.head;
    let array = [];
    while(currentNode){
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return array;
  }
  getNode(index){
    let i =0;
    let current = this.head;
    while(current){
        
        if(i === index){
            return current;
        }
        i++;
        current = current.next;
    }
    return null;
  }
  insert(value,index){
    if(index > this.length){
      this.length++;
       this.tail.next = {value:value,next : null};
       this.tail =  this.tail.next;
       return this.printList(); 
    }
    let prev = null;
    let current = this.head;
    let i =0;
    [1,2,3]
    if(index === 0){
        this.prepend(value);
       return  this.printList();
    }
    while(current !=null && i !== index){
        i++;
        prev = current;
        current = current.next;
    }
    
    prev.next = {value:value,next :current};
    this.length++;
    return this.printList();
  }

  remove(index){
    if(index > this.length){
      index = this.length-1;
    }
    if(index === 0){
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    let current = this.head;
    let i = 0;
    let prev =null;
    while(current && index !== i){
      prev =current;
      i++;
      current =   current.next;
    }
    
    if(current){
      prev.next = current.next;
    }else{
      prev.next = null;
    }
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.append(29));
console.log(myLinkedList.insert(55,1));
console.log(myLinkedList.insert(100,5));
console.log(myLinkedList.remove(9));

console.log(myLinkedList.insert(-1,0));

console.log(myLinkedList.remove(0));
console.log(myLinkedList.getNode(0));
console.log(myLinkedList.remove(2));

console.log(myLinkedList.getNode(3));
console.log(myLinkedList.append(101))
console.log(myLinkedList.getNode(3))
console.log(console.log(myLinkedList.prepend(2)));
