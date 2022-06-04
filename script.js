'use strict';

  new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

// seltect elements
let sectionLabel = document.querySelector('.label__section p');
let paginationLabel = document.querySelector('.label__pagination h3');
console.log(sectionLabel);
let section =document.querySelector('.section.active');
let sectionName = document.querySelector('.section.active').id;
console.log(sectionName);
let className= section.classList[1];
console.log(className);
let classNameLength = className.length;
console.log(classNameLength);
let sectionNumber = className.slice(classNameLength - 1);
console.log(sectionNumber);
sectionLabel.textContent = sectionName;
paginationLabel.textContent = sectionNumber;