let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.logo')

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	logo.classList.toggle('active');
})


