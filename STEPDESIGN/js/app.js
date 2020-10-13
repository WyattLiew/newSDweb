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
  // if (prevScrollpos > currentScrollPos) {
  if (prevScrollpos < "100") {
    document.getElementById("navbar-socials").style.top = "14vh";
  } else {
    document.getElementById("navbar-socials").style.top = "-1150px";
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
