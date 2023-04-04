class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      let newNode = new Node(value);
      if(this.root === null){
        this.root = newNode;
      }else{
      let current = this.root;
      let prev = null;
      while(current){
        if(current.value > value){
           if(current.left !== null){
             current = current.left;
           }else{
             current.left = newNode;
             return this;
           }       
        }else{
          if(current.right !== null){
             current = current.right;
           }else{
             current.right = newNode;
            return this;
           }       
        }
      }
      }
    }
    lookup(value){
      if(this.root === null){
        return null;
      }
      let current = this.root;
      while(current){
        if(current.value === value){
          return current;
        }
        else
        if(current.value > value){
           if(current.left !== null){
             current = current.left;
           }else{
            return null;
           }       
        }else{
          if(current.right !== null){
             current = current.right;
           }else{
             return null;
           }       
        }
      }
    }
    // remove

    remove(value){
      if(this.root === null){
        return null;
      }
      let current = this.root;
      
      let prev = null;
      while(current.value !== value){
        
        if(current.value > value){
           if(current.left !== null){
            prev = current;
             current = current.left;
           }else{
            return null;
           }       
        }else{
          if(current.right !== null){
            prev = current;
             current = current.right;
           }else{
             return null;
           }       
        }
      }
      let lFlag = current.left === null;
      let rFlag = current.right === null;

     if(!lFlag && !rFlag){
       let newCurrent = current.right ;
       let newCurrentPrev = null;
       while(newCurrent.left){
        newCurrentPrev = newCurrent;
        newCurrent = newCurrent.left;
       }
       if(newCurrentPrev){
         current.value = newCurrent.value;
         newCurrentPrev.left = newCurrent.right; 
       }else{
        newCurrent.left =current.left;
        current = newCurrent;
       }
       return this;
      }else{
        if(prev.value  > current.value){
          prev.left = current.left;
        }else{
          prev.right =current.right;
        }
        return this;
      }

    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(63)
  tree.insert(61)
  tree.insert(75)
  tree.insert(8)
  tree.insert(62)
  tree.insert(68)
  tree.insert(94)
  tree.insert(1)
  tree.insert(14)
  tree.insert(89)
  tree.insert(9)
  tree.insert(12)
  console.log(JSON.stringify(traverse(tree.root)))
  console.log(tree.lookup(94))
  console.log(tree.remove(8));
  console.log(JSON.stringify(traverse(tree.root)));
  console.log(tree.remove(75));
  console.log(JSON.stringify(traverse(tree.root)));
  console.log(tree.remove(68));
  console.log(JSON.stringify(traverse(tree.root)));
  console.log(tree.remove(89));
  console.log(JSON.stringify(traverse(tree.root)));
  console.log(tree.remove(94));
  console.log(JSON.stringify(traverse(tree.root)))
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  