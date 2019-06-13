function sumAll(arr) {

// 1. Find the numbers in between the two numbers in the array
var result = 0;
for(var i=arr[0]; i<=arr[1]; i++){
    console.log(i);
    result += i
    
}

console.log(result)
// 2. Add all of the numbers together including the two numbers in the array 


sumAll([1, 4]);

// function sumAll(arr) {
//   return 1;
// }

// sumAll([1, 4]);


// function sumAll(arr) {
//     var max = Math.max(arr[0], arr[1]);
//     var min = Math.min(arr[0], arr[1]);
//     var temp = 0;
//     for (var i=min; i <= max; i++){
//         temp += i;
//     }
//   return(temp);
// }

// sumAll([1, 4]);

