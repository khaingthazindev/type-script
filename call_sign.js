function greet() {
    console.log('Greet');
}
greet.description = 'This function prints greet.';
var fun = greet;
console.log('description ', fun.description);
