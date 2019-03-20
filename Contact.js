// let Contact = class {
// 	constructor(first_name, second_name,phone_number,email,address){
// 		this.first_name 	= first_name;
// 		this.second_name 	= second_name;
// 		this.phone_number	= phone_number;
// 		this.email 		= email;
// 		this.address	= address;
// 	}
// }
// 
// mine = new Contact('Bruno','Nicholas',25600,'sbnibro256@gmail.com','Kampala');

function Contact(first_name,second_name,phone_number,email,address) {
	this.first_name 	= first_name;
	this.second_name 	= second_name;
	this.phone_number	= phone_number;
	this.email 		= email;
	this.address	= address;
	this.street 	= '';
	this.city 		= '';
	this.country 	= '';
}

Contact.prototype.fullAddress = function(street=null,city=null,country=null){
	street? this.street = street: null;
	city? this.city = city: null;
	country? this.country = country: null;

	return this.street + ', ' + this.city + ', ' + this.country;
}

newMe = new Contact('Bruno','Nicholas',256,'sbnibro256@gmail.com','Mutungo')

console.log(newMe);

console.log('\n---------- logging one Element ----------');
console.log(newMe['phone_number']);

console.log('\n---------- logging the prototype ----------');
console.log(newMe.fullAddress('Lumumba Avenue','Kampala','Uganda'));

console.log('\n---------- logging the final object ----------');
console.log(newMe);