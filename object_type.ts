type Position = {
	x:number,
	y?:number,
};
// type Position = {
// 	z: number
// }

function displayPosition(pos:Position):void {
	console.log(`x: ${pos.x}, y:${pos.y}`);
}
displayPosition({x: 10});
displayPosition({ x: 10, y: 20 });

interface Pos {
	x:number,
	y:number,
}
interface Pos {
	z?:number
}
function displayPos(pos:Pos) {
	console.log(`x: ${pos.x}, y: ${pos.y}, z: ${pos.z}`);
}
displayPos({x:10, y:10});
displayPos({x:10, y:10, z:20});
