'use strict';

  new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

// seltect elements
const navButton = document.querySelector('.nav__btn');
const navBar = document.querySelector('.nav__wrapper');
const sectionLabel = document.querySelector('.label__section p');
const paginationLabel = document.querySelector('.label__pagination h3');
const section =document.querySelector('.section.active');
const sectionId = document.querySelector('.section.active').id;


console.log(navButton);
navButton.addEventListener('click',function(){
	navBar.classList.toggle('hide');
	navBar.classList.toggle('show');
	navButton.classList.toggle('open');
});

