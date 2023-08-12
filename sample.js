
// find -ve elements in an array
let array = [5, 4, 3, -2, -1];
let array2 = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    array2.push(array[i]);
  }
}

const arr = [1, 2, 3, -5, -6];
let arry = [];

for (let i = 0, j = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arry[j] = arr[i];
    j++;
  }
}

console.log(arry);


console.log(array2);

// find the sum of array elements
const array=[1,2,3,4,5]
let sum=0;

for( i=0;i<array.length;i++){
    sum += array[i]
}

console.log(sum)


// remove prime number and sum of all elements
let  array=[1,2,3,4,5,6,7,8,9,10]
let newArray=[]
let sum=0;
for(i=0;i<array.length;i++){
      if(array[i] %2 == 0 && array[i] !=2) {
            newArray.push(array[i])
            sum +=array[i]
      }
}
console.log(newArray)
console.log(sum)


let array =[1,2,2,3,4,5,6,8,9,7,2]
let arr=[];
 for (i =0;i<array.length;i++){
     for(j =i+1;j<array.length;j++){
          if(array[i]==array[j]){
                   
          }
     }
 }
 array.sort((a, b) => (a - b));
 console.log(array)



let newArry=[]
for(i =0; i<array.length;i++){
    let duplicate=false;
    for(j=0;j<i;j++){
        if(array[i]===array[j])
        {
              duplicate=true;
              break;
        }
    }
    if(!duplicate){
             newArry.push(array[i])
    }
}
newArry.sort((a,b)=>(a-b))
console.log(newArry)


function remove(arr){
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}
let arr = [1, 2, 1, 2, 3, 4, 5, 6];
console.log(remove(arr)); // Output: [1, 2, 3, 4, 5, 6]

// find common elements in 3 array
let array = [5, 4, 3, 2, 1, 4];
let arr = [4, 5, 3, 8, 9, 10];
let ar = [4, 5, 22, 10];
let newArray = [];
 
for (var i = 0; i < array.length; i++) {
  var currentValue = array[i];

  if (array.includes(currentValue) && arr.includes(currentValue) && ar.includes(currentValue)) {
    newArray.push(currentValue);
  }
}

console.log(newArray);




// reverse
function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
   
  var myArray = [1, 2, 3, 4, 5];
  var reversedArray = reverseArray(myArray);
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
  

// find most repeated elements
let arr=[1,1,2,3,4,5,2,6]
newArray=[]
for (i= 0;i<arr.length;i++){
   
    for (j=0;j<i;j++){
        if(arr[i]===arr[j]){
             newArray.push(arr[i])
        }......................

    }
}
console.log(newArray)



// "use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}










