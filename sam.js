
//insert elemnts in array for loop
let array=[]
 for (i=1;i<5;i++){
    array[i-1] =i
 }
 console.log(array)


let array=[4,5,6,7],
arry=[8,9,10]

const all= array.concat(arry)

console.log(all)

// destructuring in object
let obj = {
   name: 'Suhail',
   age: 24,
   status: undefined
 };
 
 function getName() {
   
   const {
      name,
      status=false,
      ...rest
   }=obj

   console.log(name ,status,rest)
 }
 
 getName();


 //array destructuring
 const array=[4,3,2,1]
 
 function get(){

   const [a,b,...rest]=array

   console.log(a)
   console.log(rest)
 }

 get()


//spread Operator
const globalPlayer={
   name:'suhail',
   place: "palakkad"

}
let player ={...globalPlayer}
player.name='shafi'

console.log(globalPlayer)
console.log(player)

//spread concat & normal concat

const global =['suhail' ,'shafi']
const global2=['abdhu', 'noushad']
const players=[...global,...global2]

 const play= global.concat(global2)

console.log(play)
console.log(players)

//array destructring
const array=[1,2,3,4,5]
const [a,b,...rest]=array;

console.log(rest)

//object destructuring
const obj = {
   id: 1,
   name: 'suhail',
   place: 'palakkad'
 };
 
 const { id, ...others } = obj;
 
 console.log(id);
 

//Rest
//Arrow
myFunc=()=>{
   console.log('hey arrow')
}

// myFunc()

//Foreach :  simplyfying our forlopp method
const teams=[
   {
      id:1,
      name:'suhail',
      place:'palakkad',
      age:20
      
   },
   {
      id:2,
      name:'abdu',
      place:'calicut',
      age:21
   },
   {
      id:3,
      name:'shafi',
      place:'kochi',
      age:20
   }
]
for(i=0;i<teams.length;i++){
   console.log(teams[i])
}
teams.forEach((value)=>{
   console.log(value)
})

//Map
const newArray= teams.map((data)=>(data.name))
console.log(newArray)

//filter
const new1Array=teams.filter((data)=>(data.age===20))
console.log(new1Array)


//reduce : calulations aahn cheyyunnath
const num=[1,2,3,4,5]
total=0
for(i=0;i<num.length;i++)
{
   total+=num[i];
}
const newA = num.reduce((total,data)=>(total+data),0)
console.log(newA)

//find
const newObj= teams.find((data)=>(data.name=='suhail'))
console.log(newObj)

//sort
const numb=[5,10,40,1,20,33]

const sorted= numb.sort((a,b)=>a-b)

console.log(sorted)

//flat : nested arrays  removeing then access in one array

const ar = [1, 2, 3, [4, 5, 6]];
 const newrr=ar.flat(Infinity) //if more nested arrays in ar ,we use inifinity
//  const newrr=ar.flat()
console.log(newrr);


//CHAINING
const globaly = {
   id: 1,
   name: 'suhail',
   company: {
     company_name: 'wipro'
   }
 };
 
 if (globaly?.company?.company_name) {
   console.log(globaly.company.company_name);
 }

 //
 const numbs=[1,2,3,4,5,6]
 const newNum= numbs.map((data)=>data).filter((data)=>data>2).sort((a,b)=>b-a).reduce((total,data)=>total+data,0)
 console.log(newNum)
 

//Dom Selectors
//Es10 syntax

 


 