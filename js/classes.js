// classes.js// Select the first div
const div = document.querySelector('div');

// Assign the warning class to the first div
div.className = 'warning';

// Select the second div by class name
const activeDiv = document.querySelector('.active');

activeDiv.classList.add('hidden');                // Add the hidden class
activeDiv.classList.remove('hidden');             // Remove the hidden class
activeDiv.classList.toggle('hidden');             // Switch between hidden true and false
activeDiv.classList.replace('active', 'warning'); // Replace active class with warning class


// Modifying Styles
// Select div
const div = document.querySelector('div');

// Apply style to div
div.setAttribute('style', 'text-align: center');

div.style.height = '100px';
div.style.width = '100px';
div.style.border = '2px solid black';


// Make div into a circle and vertically center the text
div.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';

