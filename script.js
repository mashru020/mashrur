'use strict';

  new fullpage('#fullpage', {
	//options here
	menu: '#menu-list',
	anchors:['home', 'skills', 'services', 'profile'],
	navigation: true,
	navigationPosition: 'left',
	autoScrolling:true,
	scrollHorizontally: true
});

// seltect elements

const navButton = document.querySelector('.nav__btn');
const navBar = document.querySelector('.nav__wrapper');
const sectionLabel = document.querySelector('.label__section');
const sectionLabelText = document.querySelector('.label__section p');
const paginationLabel = document.querySelector('.label__pagination h3');
let section = document.querySelector('.section.active');
const sectionId = document.querySelector('.section.active').id;
const allSection = document.querySelectorAll('.section');

// =======================================================variables
let sectionLabelValue = "";
let pagValue;
const length = allSection.length;

// functions 
const labelStyle = function (val1, val2, val3) {
	let x = `${val1}px`;
	let y = `${val2}px`;
	// console.log(x , y);
	sectionLabelText.style.width = `${val3*8}px`
	paginationLabel.style.transform = `translateY(${x})`;
	sectionLabelText.style.transform = `translateY(${y})`;
}

// return active section
const getCurrentSection= () => {
	return document.querySelector('.section.active');
}

// ==============  label change with scroll
const changeLabel = () => {
	const currentSection = getCurrentSection();
	pagValue = currentSection.classList[1][9];
	sectionLabelValue = currentSection.dataset.anchor;

	labelStyle(-50, -50,sectionLabelValue.length);
	setTimeout(() => {
		sectionLabelText.innerHTML = (sectionLabelValue) ;
		paginationLabel.innerHTML = (0+pagValue);
		labelStyle(0,0, sectionLabelValue.length);
	}, 1000);
}

// EVENTS
navButton.addEventListener('click',function(e){
	navBar.classList.toggle('hide');
	navBar.classList.toggle('show');
	navButton.classList.toggle('open');
});

document.addEventListener('click', function(e) {  
	if (e.target.classList.contains('nav__link')) {
		navButton.classList.remove('open');
		navBar.classList.toggle('show');
		navBar.classList.toggle('hide');
		setTimeout(() => {
			changeLabel();
		}, 10);	
	}	 
}, false);

document.addEventListener('wheel',function(e) {
	changeLabel();
});

document.addEventListener('keydown',function(e) {
	e.preventDefault();
	changeLabel();
});

