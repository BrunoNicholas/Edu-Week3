// attributes.js

// Assign image element
const img = document.querySelector('img');

img.hasAttribute('src');                // returns true
img.getAttribute('src');                // returns "...shark.png"
img.removeAttribute('src');             // remove the src attribute and value

// give it a new image
img.setAttribute('src', 'https://js-tutorials.nyc3.digitaloceanspaces.com/octopus.png');

img.src = 'https://js-tutorials.nyc3.digitaloceanspaces.com/shark.png';


// checking for attributes
hasAttribute() 
p.hasAttribute('href'); // returns boolean true or false
p.getAttribute('href'); // returns the value 
p.setAttribute('href','index.html') // sets the value
p.removeAttribute('href') // removes


// modifying CSS classes

element.className; 						// gets or sets class value
element.classList.add('active'); 		// adds one or more class values
element.classList.toggle('active');		// toggles aclass on or off
element.classList.contains('active');	// checks if class value exists
element.classList.replace('old','new');	// for class values
element.classList.remove('active'); 	// removes class value

