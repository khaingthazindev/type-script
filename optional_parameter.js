function greet(message) {
    if (message !== undefined) {
        message = message.toLowerCase();
    }
    console.log('Greet:', message);
}
greet('HELLO');
greet();
// default parameter
function show(one, two, three, four) {
    if (three === void 0) { three = 3; }
    if (four === void 0) { four = 4; }
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
}
show(1, 2);
