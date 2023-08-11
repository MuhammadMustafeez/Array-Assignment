let num=[32,4,6,2,8,97,86,31,1];
function largest_smallest_element(arr=num){
    if(arr.length===0){
        return "Array is empty";
    }
    let smallest=arr[0];
    let largest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
           smallest=arr[i];
        }
        if(arr[i]>largest){
            largest=arr[i];
        }
        }
        return{smallest,largest};
}
let result=largest_smallest_element(num);
console.log("Smallest:", result.smallest);
console.log("Largest:", result.largest);