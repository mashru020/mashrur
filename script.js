'use strict';

  new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

// seltect elements
let sectionLabelValue = "";
let pagValue;
const navButton = document.querySelector('.nav__btn');
const navBar = document.querySelector('.nav__wrapper');
const sectionLabel = document.querySelector('.label__section p');
const paginationLabel = document.querySelector('.label__pagination h3');
let section = document.querySelector('.section.active');
const sectionId = document.querySelector('.section.active').id;



navButton.addEventListener('click',function(e){
	navBar.classList.toggle('hide');
	navBar.classList.toggle('show');
	navButton.classList.toggle('open');
});
document.addEventListener('click', function(e) {  
	if (e.target.classList.contains('nav__link')) {
		sectionLabelValue = e.target.innerHTML.toLowerCase();
		sectionLabel.innerHTML = (sectionLabelValue) ;
		navButton.classList.remove('open');
		navBar.classList.toggle('show');
		navBar.classList.toggle('hide');


		pagValue = e.target.hash;
		paginationLabel.innerHTML = (0+pagValue[10]);
		console.log(sectionLabelValue.length);
		// console.log(sectionLabelValue);
		console.log(sectionLabel);
	}
		 
}, false);

