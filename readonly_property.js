var human = {
    name: 'Thazin',
    age: 30,
    address: {
        city: 'Shwedaung',
        address: 'TSK'
    }
};
// human.name = "Khaing";
// not allow
// human.address = {
//
// }
// allow
human.address.city = 'Pyay';
console.log('human: ', human);
