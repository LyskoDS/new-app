// Sum Numbers
function sum (numbers) {
    return numbers.reduce((a, b) => a + b, 0);
};
console.log(sum([1,2,3]));
//суммирует все элементы в массиве;