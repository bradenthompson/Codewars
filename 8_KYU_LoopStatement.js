// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
// 
// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
// 
// If you forgot how to push an element to an array, please refer to lesson 4.

function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i <= arr.length-1; i++){
      if (arr[i] % 2 === 1){
        odd.push(arr[i])
      }
      else even.push(arr[i])
    }
    return [odd,even];
  }