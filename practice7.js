function frequency(str, character) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === character)
        count++


    }
    return count;

}
console.log(frequency("reeti", "e"));
console.log(frequency("Nitu", "e"))