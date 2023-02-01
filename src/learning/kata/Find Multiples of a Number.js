function findMultiples(integer, limit) {
    let arr = [];
    for (let i = 1; i <= (limit / integer); i++) {
        let a = integer * i;
        arr.push(a);
    }
    return arr;
}
console.log(findMultiples(11,54));