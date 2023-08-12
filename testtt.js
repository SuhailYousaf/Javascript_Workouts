function missingElemnts(arr){
    let result=[]
    let k=0;
      for(let i=0;i<arr.length;i++){
          for(let j=i+1;j<arr.length;j++){
            if(arr[j]-arr[i] !=1){
                     k= arr[j]-arr[i]
                     result.push(k)
                     break;
                     
            }
          }
      }
      return result;
}
arr = [1, 3, 4, 5, 6, 8,9,11,12,13,14]

console.log(missingElemnts(arr))


db.product.aggregate([{$match:{name:"name"}},{$group:{_id:null,maximumQundity:{$max:{product:"$qundity"}}}}])

