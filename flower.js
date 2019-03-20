var flower = {
	name: 'Rose',
	color: 'Blue',
	height: 14,
	country: 'Uganda'
}

var getItem = function(item){
	return flower[item];
}

var changeItem = function(item, val){
	flower[item] = val;
	return flower;
}

var removeItem = function(item, val){
	flower[item] = val;
	return flower;
}

var growFlower = function(num=null){
	if (num) {
		flower.height += num;
	}
	else {
		flower.height++;
	}
	return flower;
}
console.log('\n------- logging the object ---------- ');
console.log(flower);
console.log('\n------- logging the object keys ---------- ');
console.log(Object.keys(flower));
console.log('\n------- logging the object key by index ---------- ');
console.log(Object.keys(flower)[2]);
console.log('\n------- logging the object key value ---------- ');
console.log(getItem('color'));
console.log('------- changing an object key value ---------- ');
console.log(changeItem('color','green'));
console.log('------- removing the object item ---------- ');

console.log('------- growth of the flower ---------- ');
console.log(growFlower(6));