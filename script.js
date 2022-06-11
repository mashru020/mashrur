'use strict';

  new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
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

const getCurrentSection= () => {
	return document.querySelector('.section.active');
}
const labelStyle = function (val1, val2, val3) {
	let x = `${val1}px`;
	let y = `${val2}px`;
	// console.log(x , y);
	sectionLabelText.style.width = `${val3*8}px`
	paginationLabel.style.transform = `translateY(${x})`;
	sectionLabelText.style.transform = `translateY(${y})`;

}


 
//check last and first section 
const checkFirstLastSection = () => {
	const currentSectionTest = getCurrentSection().id;
	console.log(currentSectionTest);
	const firstSection = allSection[0].id;
	const lastSection = allSection[length - 1].id;
	
	if (firstSection == currentSectionTest || lastSection == currentSectionTest ){
		return 0;
	}
	else return 1;
}
// ========================label change form nav item
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

// ==============  label change with scroll
const changeLabel = (e) => {
	const currentSection = getCurrentSection();
	pagValue = currentSection.id[9];
	
	
	
	sectionLabelValue = currentSection.classList[1];
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
		
		
		// sectionLabel.innerHTML = (sectionLabelValue) ;
		navButton.classList.remove('open');
		navBar.classList.toggle('show');
		navBar.classList.toggle('hide');

		changeLabelNav(e);
	}
		 
}, false);
document.addEventListener('wheel',function(e) {
	changeLabel(e);
	console.log(checkFirstLastSection());
});

document.addEventListener('keydown',function(e) {
	// console.log(e.target);
	e.preventDefault();
	changeLabel(e);
	console.log(checkFirstLastSection());
	
});

