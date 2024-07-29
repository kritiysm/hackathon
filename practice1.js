function reverseString(str){
    const arr = strToArr(str);
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(reverse(arr[i]));
    }
    return join(newArr);
}
console.log(reverseString("I love dogs"))

function strToArr(str){
    let arr = [];
    let word = "";
    for (let i=0; i<str.length; i++){
        if(str[i]===" "){
            arr.push(word);
            word = "";
        }
        else
            word += str[i];
    }
    arr.push(word);
    return arr;
}

console.log(strToArr("I love dogs"));

function join(arr){
    let joinstr = ""; 
    for(let i=0;i<arr.length;i++){
        joinstr = joinstr + arr[i]+ " ";
    }
   return joinstr     
}
console.log(join(["I","love","dogs"]))

function reverse(str){
    let storestr ="";
    for(let i=str.length-1; i>=0; i--){
        storestr = storestr + str[i];
    }
     return storestr
}
console.log(reverse("I love dogs"))

