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

console.log(flower)