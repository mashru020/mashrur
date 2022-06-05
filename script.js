'use strict';

  new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

// seltect elements
let navButton = document.querySelector('.nav__btn');
const navBar = document.querySelector('.nav__wrapper');
let sectionLabel = document.querySelector('.label__section p');
let paginationLabel = document.querySelector('.label__pagination h3');
console.log(sectionLabel);
let section =document.querySelector('.section.active');
let sectionId = document.querySelector('.section.active').id;


console.log(navButton);
navButton.addEventListener('click',function(){
	navBar.classList.toggle('hide');
	navBar.classList.toggle('show');
});

