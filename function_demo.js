function greet(message) {
    console.log('Greet ', message);
}
greet('hi');
function add(x, y) {
    return x + y;
}
var sum = add(1, 2);
console.log('sum ', sum);
var names = ['Alice', 'Brown', 'Charlie'];
names.forEach(function (name) {
    console.log(name);
});
