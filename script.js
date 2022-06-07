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
	console.log(x , y);
	sectionLabelText.style.width = `${val3*7}px`
	paginationLabel.style.transform = `translateY(${x})`;
	sectionLabelText.style.transform = `translateY(${y})`;

}

navButton.addEventListener('click',function(e){
	navBar.classList.toggle('hide');
	navBar.classList.toggle('show');
	navButton.classList.toggle('open');
});
document.addEventListener('click', function(e) {  
	if (e.target.classList.contains('nav__link')) {
		
		sectionLabelValue = e.target.innerHTML.toLowerCase();
		labelStyle(-50, -50,sectionLabelValue.length);
		// sectionLabel.innerHTML = (sectionLabelValue) ;
		navButton.classList.remove('open');
		navBar.classList.toggle('show');
		navBar.classList.toggle('hide');


		pagValue = e.target.hash;
		
		console.log(sectionLabelValue.length);
		console.log(sectionLabelValue);
		console.log(sectionLabelText);
		setTimeout(() => {
			sectionLabelText.innerHTML = (sectionLabelValue) ;
			paginationLabel.innerHTML = (0+pagValue[10]);
			labelStyle(0,0, sectionLabelValue.length);
		}, 1000);
		
	}
		 
}, false);


