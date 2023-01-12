function sameCase(a, b){
    if (a.match(/[a-z]/) && b.match(/[a-z]/)) {
        return 1;
    }
    if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
        return 1;
    }
    if (b.match(/[a-z]/) && a.match(/[A-Z]/)) {
        return 0;
    }
    if (a.match(/[a-z]/) && b.match(/[A-Z]/)) {
        return 0;
    }
    return -1;
}
console.log(sameCase('d', 'S'));