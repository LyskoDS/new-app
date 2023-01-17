function padIt(str,n){
    let result = str
    let x = 0

    while (x < n) {
        if (x % 2 === 0) {
            result = `*${result}`
        } else {
            result =`${result}*`
        }
        x++
    }
    return result;
}
console.log(padIt("a", 5));
