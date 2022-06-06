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



navButton.addEventListener('click',function(e){
	navBar.classList.toggle('hide');
	navBar.classList.toggle('show');
	navButton.classList.toggle('open');
	// console.log(e);
});

// const navLink = document.querySelector(".nav__link");
// console.log(navLink);

document.addEventListener('click', function(e) {
    // e = e || window.event;
    // var target = e.target || e.srcElement,
    //     text = target.textContent || target.innerText;  
	if (e.target.classList.contains('nav__link')) {
		console.log(e.target.classList);
		navButton.classList.remove('open');
		navBar.classList.toggle('show');
		navBar.classList.toggle('hide');
	}
		 
}, false);


