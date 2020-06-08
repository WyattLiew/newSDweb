// Get the modal
var modal = document.getElementById("freeQuoteModal");

// Get the button that opens the modal
var btn = document.getElementById("freeQuote");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  modal.style.display = "block";
    nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

