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
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  console.log(JSON.stringify(traverse(tree.root)))
  console.log(tree.lookup(4))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  