type CustomMap = {
	[index: string]: string
}
let map: CustomMap = {
	key1: 'Value1',
	key2: 'Value2',
}
console.log('map: ', map);

type CustomMap2 = {
	[index: number]: string
}
let map2: CustomMap2 = ['Value1', 'Value2'];
console.log('map2: ', map2);