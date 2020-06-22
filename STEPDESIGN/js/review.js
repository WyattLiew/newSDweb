function myFunction(x) {
  var reviews1__dots = document.getElementById("reviews1__dots");
  var reviews1__more = document.getElementById("reviews1__more");
  var reviews1__myBtn = document.getElementById("reviews1__btn");
   var reviews2__dots = document.getElementById("reviews2__dots");
  var reviews2__more = document.getElementById("reviews2__more");
  var reviews2__myBtn = document.getElementById("reviews2__btn");


  if (x==1) {
  if (reviews1__dots.style.display === "none") {
    reviews1__dots.style.display = "inline";
    reviews1__btn.innerHTML = "Read more"; 
    reviews1__more.style.display = "none";
  } else {
    reviews1__dots.style.display = "none";
    reviews1__btn.innerHTML = "Hide"; 
    // btnText.style.display="none";
    reviews1__more.style.display = "inline";
  }
} else if (x==2) {

  if (reviews2__dots.style.display === "none") {
    reviews2__dots.style.display = "inline";
    reviews2__btn.innerHTML = "Read more"; 
    reviews2__more.style.display = "none";
  } else {
    reviews2__dots.style.display = "none";
    reviews2__btn.innerHTML = "Hide"; 
    // btnText.style.display="none";
    reviews2__more.style.display = "inline";
  }
}

}
