    // Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    let nums = [];

    if(n === 0){
        return nums;
    }
     nums.push(0);
    if(n === 1){
        return nums[n];
    }
    nums.push(1);
    if(n === 2){
        return nums[n];
    }
    for(let i=2; i<= n ;i++ ){
        nums[i] = nums[i-1] + nums[i-2];
    }
    return nums.pop();
  }
  console.log(fibonacciIterative(8));
  console.log(fibonacciIterative(30));

  
  
  function fibonacciRecursive(n) {
    if(n < 2){    return n;}
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
  }
  
  console.log(fibonacciRecursive(8));
  console.log(fibonacciRecursive(30));