function removeDuplicate(arr){
    let addarr = [];
    for (let i = 0; i < arr.length; i++){
        if (filter (addarr, arr[i]))
            continue;
        else 
            addarr.push(arr[i])
    }
    return addarr;
}

function filter(addarr, item){
    for (let i = 0; i < addarr.length; i++){
        if (addarr[i]===item)
            return true;
        else 
            continue;
    }
    return false
}


 
console.log(removeDuplicate([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]))