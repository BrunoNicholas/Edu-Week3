// access.js
/*	const demoId = document.getElementById('demo');

	demoId.style.border = '1px solid purple';

	const demoClass = document.getElementsByClassName('demo');
	demoClass.style.border = '1px solid orange';

	demoClass[0].style.border = '1px solid orange';

	for (i = 0; i < demoClass.length; i++) {
	  demoClass[i].style.border = '1px solid orange';
	}

	const demoTag = document.getElementsByTagName('article');

	for (i = 0; i < demoTag.length; i++) {
	  demoTag[i].style.border = '1px solid blue';
	}

	const demoQuery = document.querySelector('#demo-query');

	const demoQueryAll = document.querySelectorAll('.demo-query-all');
	demoQueryAll.forEach(query => {
	  query.style.border = '1px solid green';
	});
*/

// Assign all elements
const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

// Change border of ID demo to purple
demoId.style.border = '1px solid purple';

// Change border of class demo to orange
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = '1px solid orange';
}

// Change border of tag demo to blue
for (i = 0; i < demoTag.length; i++) {
  demoTag[i].style.border = '1px solid blue';
}

// Change border of ID demo-query to red
demoQuery.style.border = '1px solid red';

// Change border of class query-all to green
demoQueryAll.forEach(query => {
  query.style.border = '1px solid green';
});

////////////
ul.firstChild.style.background = 'yellow';
ul.firstElementChild.style.background = 'yellow';

for (let element of ul.children) {
  element.style.background = 'yellow';
}

for (let element of p.childNodes) {
  console.log(element);
}

document.body.children[3].lastElementChild.style.background = 'fuchsia';

const tiger = ul.children[1];
tiger.nextElementSibling.style.background = 'coral';
tiger.previousElementSibling.style.background = 'aquamarine';

paragraph.textContent = "I'm a brand new paragraph.";
paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";

const text = document.createTextNode("I'm a new text node.");
text;

// Inserting Nodes into the DOM

node.appendChild(); 	// Add a node as the last child of parent element
node.insertBefore(); 	// insert node into parent element b4 a specified sibling node
node.replaceChild(); 	// replace an existing node with a new node