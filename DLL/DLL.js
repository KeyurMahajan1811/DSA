class DLL {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      if(this.head === this.tail){
          this.tail = {
              value: value,
              next: null,
              prev: this.head
          }
          this.head.next = this.tail;
      }
      else{
          let newTail = {
              value : value,
              next: null,
              prev : this.tail 
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
            next: null,
            prev:null
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
    remove(index){
      
      if(index >= this.length){
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return this.printList();
      }
      if(index === 0){
        this.head = this.head.next;
        this.head.prev = null;
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
      
      prev.next = current.next;
      current.next.prev = prev;
      this.length--;
      return this.printList();
    }
    insert(value,index){
      if(index > this.length){
        this.length++;
         this.tail.next = {value:value,next : null, prev:this.tail};
         this.tail =  this.tail.next;
         return this.printList(); 
      }
      this.length++;
      let prev = null;
      let current = this.head;
      let i =0;
      if(index === 0){
          this.prepend(value);
         return  this.printList();
      }
      while(current !=null && i !== index){
          i++;
          prev = current;
          current = current.next;
      }
      prev.next = {value:value,next :current, prev:prev};
      current.prev = prev.next;
      return this.printList();

    }

    
  }
  
  let myLinkedList = new DLL(10);
  console.log(myLinkedList.append(5));
  console.log(myLinkedList.getNode(1));
  
  console.log(myLinkedList.append(16));
  console.log(myLinkedList.append(29));
  console.log(myLinkedList.insert(55,1));
  console.log(myLinkedList.remove(9));

  console.log(myLinkedList.insert(-1,0));
  
  console.log(myLinkedList.remove(0));
  console.log(myLinkedList.getNode(0));
  console.log(myLinkedList.remove(2));
  
  console.log(myLinkedList.getNode(2));
  console.log(myLinkedList.append(101))
  console.log(myLinkedList.getNode(3))
  console.log(console.log(myLinkedList.prepend(2)));
  