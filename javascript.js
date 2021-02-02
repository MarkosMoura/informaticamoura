/*slide da sessão inicial*/
let time = 3000,
indeximage = 0,
image = document.querySelectorAll(".apresentação img");
maximum = image.length;

window.addEventListener("load",start);

function start(){
	setInterval(()=>{
		next();
	},time);
}
function next(){
image[indeximage].classList.remove("select");
indeximage++;
if (indeximage>=maximum) {
	indeximage = 0;
}
image[indeximage].classList.add("select");
}

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

let form = document.querySelector('.button');
form.addEventListener('click',()=>{
	alert('formulário ainda em desenvolvimento');
});
let link = document.querySelector(".link");
link.addEventListener('click',()=>{
	alert('página ainda em desenvolvimento');
});
let menu = document.querySelector('.menu-desktop');
menu.addEventListener('click',()=>{
	alert('ainda em desenvolvimento');
});
let menumobile = document.querySelector('.menu-mobile ul');
menumobile.addEventListener('click',()=>{
	alert('ainda em desenvolvimento');
})
let icone = document.querySelector('.icone');
icone.addEventListener('click',()=>{
	alert('página ainda em desenvolvimento');
})