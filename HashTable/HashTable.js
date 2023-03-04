class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    
    set(key, value){
        const index = this._hash(key);
      
        if(!this.data[index]){
            this.data[index] = [];   
        }
        this.data[index].push([key,value]);
    }
    
    get(key){
        let index = this._hash(key);
        let currentBucket = this.data[index];
        if(!this.data[index]){
            return undefined
        }
        
            if(this.data[index].length === 1){
                return this.data[index][0][1];
            }
            
                for(let i =0 ; i < currentBucket.length ; i++){
                    
                    if(currentBucket[i][0] === key){
                        return this.data[index][i][1];
                    }
                }
         
    }
    
    keys(){
      const keysArray = [];
      console.log(this.data.length);
      for (let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          if(this.data[i].length === 1)  {
          keysArray.push(this.data[i][0][0])
            
          }
          else{
              for(let j =0 ; j< this.data[i].length ; j++){
                   keysArray.push(this.data[i][j][0])
              }
          }
          }
      }
      return keysArray;
    }
    
    
  }
  
  const myHashTable = new HashTable(3);
  myHashTable.set('grapes', 10000)
  console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  myHashTable.set('banana', 4000)
  
  console.log(myHashTable);
  console.log(myHashTable.get('apples'))
  console.log(myHashTable.keys())
  
  