function specific_element(arr,elements){
    return arr.indexOf(elements)!==-1;
}
let fruits=['apple','mango','kiwi','grapes'];
console.log(specific_element(fruits, 'apple'))
console.log(specific_element(fruits, 'Pair'))