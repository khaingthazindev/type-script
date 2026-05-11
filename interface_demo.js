function displayPos(pos) {
    console.log("x: ".concat(pos.x, ", y: ").concat(pos.y, ", z: ").concat(pos.z));
}
displayPos({ x: 10, y: 10 });
displayPos({ x: 10, y: 10, z: 20 });
var todoList = [
    {
        id: '1',
        title: 'Item 1',
    },
    {
        id: '2',
        title: 'Item 2',
    }
];
console.log(todoList);
console.log("todoList: ".concat(todoList));
