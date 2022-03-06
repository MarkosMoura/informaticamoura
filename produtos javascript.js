/*menu-mobile*/
let mobile = document.querySelector(".menu-mobile i");
mobile.addEventListener('click',(p)=>{
	p.preventDefault();
	let mobile = document.querySelector('.menu-mobile ul');
	if (mobile.classList.contains('show-menu')) {
		mobile.classList.remove('show-menu');
	}
	else{
		mobile.classList.add('show-menu');
	}	
});