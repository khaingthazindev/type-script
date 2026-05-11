// type Position = {
// 	z: number
// }
function displayPosition(pos) {
    console.log("x: ".concat(pos.x, ", y:").concat(pos.y));
}
displayPosition({ x: 10 });
displayPosition({ x: 10, y: 20 });
function displayPos(pos) {
    console.log("x: ".concat(pos.x, ", y: ").concat(pos.y, ", z: ").concat(pos.z));
}
displayPos({ x: 10, y: 10 });
displayPos({ x: 10, y: 10, z: 20 });
