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
const sectionLabel = document.querySelector('.label__section');
const sectionLabelText = document.querySelector('.label__section p');
const paginationLabel = document.querySelector('.label__pagination h3');
let section = document.querySelector('.section.active');
const sectionId = document.querySelector('.section.active').id;

const labelStyle = function (val1, val2, val3) {
	let x = `${val1}px`;
	let y = `${val2}px`;
	// console.log(x , y);
	sectionLabelText.style.width = `${val3*7.5}px`
	paginationLabel.style.transform = `translateY(${x})`;
	sectionLabelText.style.transform = `translateY(${y})`;

}


// functions 

// label change form nav item
const changeLabelNav = (e) => {
	sectionLabelValue = e.target.innerHTML.toLowerCase();
	labelStyle(-50, -50,sectionLabelValue.length);
	pagValue = e.target.hash;

	setTimeout(() => {
		sectionLabelText.innerHTML = (sectionLabelValue) ;
		paginationLabel.innerHTML = (0+pagValue[10]);
		labelStyle(0,0, sectionLabelValue.length);
	}, 1000);
}

// label change with scroll
const changeLabelScroll = (e) => {
	const currentSection = document.querySelector('.section.active');
	console.log(currentSection);
	pagValue = currentSection.id[9];
	
	
	
	sectionLabelValue = currentSection.classList[1];
	labelStyle(-50, -50,sectionLabelValue.length);
	setTimeout(() => {
		sectionLabelText.innerHTML = (sectionLabelValue) ;
		paginationLabel.innerHTML = (0+pagValue);
		labelStyle(0,0, sectionLabelValue.length);
	}, 1000);
}

const changeLabelKey = (val) => {
	if (val === 38 || val === 33) {
		pagValue = `${Number(pagValue) + 1}`;
	}
	else if (val === 40 || val === 34) {
		pagValue = `${Number(pagValue) - 1}`;
	}
	else {
		console.log("press up or down arrow");
	}
}

navButton.addEventListener('click',function(e){
	navBar.classList.toggle('hide');
	navBar.classList.toggle('show');
	navButton.classList.toggle('open');
});
document.addEventListener('click', function(e) {  
	if (e.target.classList.contains('nav__link')) {
		
		
		// sectionLabel.innerHTML = (sectionLabelValue) ;
		navButton.classList.remove('open');
		navBar.classList.toggle('show');
		navBar.classList.toggle('hide');


		changeLabelNav(e);
		
		// console.log(sectionLabelValue.length);
		// console.log(sectionLabelValue);
		// console.log(sectionLabelText);
		
		
	}
		 
}, false);
document.addEventListener('wheel',function(e) {
	changeLabelScroll(e);
});

// document.addEventListener('keydown',function(e) {
// 	console.log(e.target);
// 	// e.preventDefault();
// 	// changeLabelKey(e.keyCode);
	
	
// });

