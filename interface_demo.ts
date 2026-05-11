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

interface Todo {
	id:string,
	title:string
}
let todoList:Todo[] = [
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
