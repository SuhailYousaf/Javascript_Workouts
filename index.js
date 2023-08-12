function x(){
    var a=10;
    function y(){
        console.log(a)
    }
    y()
}
x()


setInterval(()=>{
    console.log("suhail")
},1000)
setTimeout(()=>{
    console.log("suhail")
},1000)

 

// //callback
function a(callback){
    console.log("inside a")
    callback()
}

function b(){
    console.log("inside b")
}

a(b);





// //promises
function add(num1,num2){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(num1===0){
            reject("first number is zero")
        }else{
            resolve(num1+num2)
        }
       },1000)
    })
}
add(1,20).then((sum)=>{
    console.log(sum)
})
.catch((error)=>{
    console.log(error)
})









