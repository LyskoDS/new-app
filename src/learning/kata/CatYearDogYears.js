var humanYearsCatYearsDogYears = function(humanYears) {
    let arr = [0, 0, 0];
    arr[0] = humanYears;
    if (humanYears === 1) {
        arr[1]=15;
        arr[2]=15;
    } else if (humanYears === 2) {
        arr[1]=24;
        arr[2]=24;
    } else if (humanYears >= 3) {
        arr[1]= (24+ (4 * (humanYears - 2)));
        arr[2]= (24+ (5 * (humanYears - 2)));
    }
    return arr;
}
console.log(humanYearsCatYearsDogYears(3));