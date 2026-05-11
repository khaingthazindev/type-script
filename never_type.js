function fail(msg) {
    throw new Error(msg);
}
// fail('Somethind wrong');
try {
    fail('Somethind wrong');
}
catch (e) {
    // console.log('catch error: ', e.message);
}
