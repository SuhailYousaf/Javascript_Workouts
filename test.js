// second smallest number in an array
// const array=[4,3,2,1]
// let smallest=Infinity;
// let secondSmallest=Infinity;

// for(i=0;i<array.length;i++){
//     if(array[i]<smallest){
//        secondSmallest=smallest
//        smallest=array[i]
//     }
//     else if(array[i]<secondSmallest && array[i]!==smallest){
//         secondSmallest=array[i]
//     }

// }

// console.log('the second smallest number is '+secondSmallest)

//second largest number an array

// const array=[4,3,2,1]
// let largest= -Infinity
// let secondLargest= -Infinity

// for(i=0;i<array.length;i++){

//     if(array[i]>largest){
//         secondLargest=largest;
//         largest=array[i]
//     }
//     else if (array[i]>secondLargest && array[i]!==largest){
//         secondLargest=array[i]
//     }

// }
// console.log(secondLargest)

//print -ve elements an array

// const array=[4,1,2,-3,5,-6]
// let neg=[]

// for(i=0;i<array.length;i++){
//     if(array[i]<0){
//        neg[neg.length]=array[i]
//     }
// }
// console.log(neg)

//find the sum of array elements

// const array=[4,3,2,1]
// let sum=0

// for(i=0;i<array.length;i++){
//     sum+=array[i]
// }

// console.log(sum)

//delete prime numbers and sum of all numbers

// const array=[1,2,3,4,5,6,7,8]

// let newArray=[]
// sum=0;

// for( i=0;i<array.length;i++){
//     if(array[i]%2==0 && array[i]!=2 ){
//          newArray[newArray.length]=array[i]
//          sum+=array[i]
//     }
// }

// console.log(newArray)
// console.log(sum)

//sort elements in assending order remove duplicates

const array=[6,5,5,4,2,3,1,1,2,5]


for(i=0;i<array.length;i++){
     for(j=0;j<array.length;j++){
       
        if(array[j]>array[j+1]){
            temp=array[j]
            array[j]=array[j+1]
            array[j+1]=temp
        }

     }
}
let newArray=[...new Set(array)]
console.log(array)

//reverse array

// const array=[4,3,2,1]

// for(i=array.length-1;i>=0;i--){
//     console.log(array[i])
// }

//find most repeated elements

// function findMostRepeatedElement(array){
//     frequency={}
//     let maxCount=0;
//     let mostRepeated=null;
   
//     for(i=0;i<array.length;i++){

//         let element=array[i]
        
//         frequency[element]=(frequency[element] || 0)+1

//         if(frequency[element]>maxCount){
//             maxCount= frequency[element]
//             mostRepeated=element;
//         }
       
//     }
//     return mostRepeated;

// }
//   // Example usage
//   const myArray = [1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7, 8, 8];
//   const result = findMostRepeatedElement(myArray);
//   console.log(result);  // Output: 5

//insertion 

// function insertion (array,index,element){
//     for (i=0;i<array.length;i++){
//         if(i===index){
//             array[index]=element
//         }
//     }
//     return array;
// }

// const arry=[1,2,3,5,6]
// let result=insertion(arry,1,8)
// console.log(arry)



  






