type Rectangle = {
	width:number,
	height:number,
}
type Circle = {
	radius:number,
}
type Colored = {
	color:string,
}
type ColoredRectangle = Rectangle & Colored;
type ColoredCircle = Circle & Colored;

let cRectangle:ColoredRectangle = {
	width: 10,
	height: 20,
	color: 'red'
};
console.log('cRectangle', cRectangle);