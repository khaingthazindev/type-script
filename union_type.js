function align(a) {
    if (typeof a === 'string') {
        console.log("Uppercase a: ".concat(a.toUpperCase()));
    }
    console.log("a: ".concat(a));
}
align('20px');
console.log('------------');
align(20);
