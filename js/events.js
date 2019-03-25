/*// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an inline event handler. Hihihi!";
}

// Add event handler as a property of the button element
const button = document.querySelector('button');
button.onclick = changeText;*/


/*const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert('Will I alert?');
}

// Events can be overwritten
button.onclick = changeText;
button.onclick = alertText;*/



/*// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event listener. Hmm!";
}

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);*/

const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "But will I seriously change?";
}

const alertText = () => {
    alert('Will I alert?');
}

// Multiple listeners can be added to the same event and element
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);

/*
	// An anonymous function on an event listener
	button.addEventListener('click', () => {
	    p.textContent = "Will I change?";
	});
*/

/*
	// Remove alert function from button element
	button.removeEventListener('click', alertText);
*/

// mouse events

// click 		-> pressed and releassed
// dblclick		-> element clicked twice
// mouseenter	-> fires when pointer enters an element
// mouseleave	-> when a pointer leaves an element
// mousemove	-> fires all when pionter in the element


// form events

// submit 		-> fires when a form is submitted
// focus		-> fires when an element e.g. input receives focus.
// blur 		-> fires when an element loses focus


// Keyboard Events

// keydown 		-> fires once a key is pressed
// keyup 		-> once when a key is released
// keypress 	-> continously when a key is pressed


// Test the keyCode, key, and code properties
document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
});



// Event Objects


