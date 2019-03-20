// creatin the function contructor for the object
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

// creating the prototype function
Contact.prototype.fullAddress = function(street=null,city=null,country=null){
	// checking existance of the values and adding them to the object
	street? this.street = street: null;
	city? this.city = city: null;
	country? this.country = country: null;

	// returning the object
	return this.street + ', ' + this.city + ', ' + this.country;
}

// creating a new object with values
newMe = new Contact('Bruno','Nicholas',256,'sbnibro256@gmail.com','Mutungo')

// looging the fresh object
console.log(newMe);

// practicing with keys: last name
console.log('\n---------- logging the keys ----------');
console.log(newMe[Object.keys(newMe)[1]]);

// loging the object while inserting in the prototype values
console.log('\n---------- logging the prototype ----------');
console.log(newMe.fullAddress('Lumumba Avenue','Kampala','Uganda'));

// logging the final outcome
console.log('\n---------- logging the final object ----------');
console.log(newMe);