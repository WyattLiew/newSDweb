const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

	burger.classList.toggle('toggle');	
	});

}

navSlide();

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-1150px";
  }
  prevScrollpos = currentScrollPos;
}

function myFunction() {
  var dots = document.getElementById("blogs__dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Hide"; 
    // btnText.style.display="none";
    moreText.style.display = "inline";
  }
}

var chatMenu = document.getElementById("chatmenu");
var chatWhatsapp = document.getElementById("chat__Whatsapp");


function clickMenu() {
  chatMenu.classList.toggle('toggleChat');
  chatMenu.classList.toggle('toggleImg');
  chatWhatsapp.classList.toggle('toggleWhatsapp');

}

chatMenu.addEventListener('click', function(e){
      clickMenu();
    });