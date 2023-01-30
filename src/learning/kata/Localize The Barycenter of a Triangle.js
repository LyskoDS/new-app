function barTriang(p1, p2, p3) {
    let arr = [];
    arr[0] = (Math.round((((p1[0]+p2[0]+p3[0])/3))*10000)/10000);
    arr[1] = (Math.round((((p1[1]+p2[1]+p3[1])/3))*10000)/10000);
    return arr;
}
console.log(barTriang([4, 2], [12, 2], [6, 10]));