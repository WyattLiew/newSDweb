// Get the modal
var projectsListmodal = document.getElementById("projectListsModal");
var pjOverflow = document.getElementById("pj-overflow");

// Get the button that opens the modal
var projectListsBtn = document.getElementById("projectLists");
var projectListsBtnSm = document.getElementById("projectListsSm");

// Get the <span> element that closes the modal
var pjSpan = document.getElementsByClassName("pj-close")[0];

// When the user clicks the button, open the modal 
projectListsBtn.onclick = function() {
  projectsListmodal.style.display = "block";
  pjOverflow.style.overflow = `hidden`;
 init();
}

projectListsBtnSm.onclick = function() {
  projectsListmodal.style.display = "block";
  pjOverflow.style.overflow = `hidden`;
 init();
}

// When the user clicks on <span> (x), close the modal
pjSpan.onclick = function() {
  projectsListmodal.style.display = "none";
  pjOverflow.style.overflow = `auto`;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == projectsListmodal) {
    projectsListmodal.style.display = "none";
    pjOverflow.style.overflow = `auto`;
  }
}

function init(){
 var checkid = document.getElementsByClassName("swiper-container-projects");

if (checkid.id == "1") {

}else{
    var projectSwiper = new Swiper('.swiper-container-projects', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    checkid.id = "1";
}
}

$(function () {
    x=2;
    $('#reviewLists li').slice(0, 2).show();
    $('#reviewloadMore').on('click', function (e) {
        e.preventDefault();
        x = x+3;
        $('#reviewLists li').slice(0, x).slideDown();
        if($('#reviewLists li').length <= x) {
            $('#reviewloadMore').hide();
        }
    });

    y=60;
    $('#projectLists__load li').slice(0, 60).show();
    if($('#projectLists__load li').length <= y) {
            $('#projectloadMore').hide();
        }
    $('#projectloadMore').on('click', function (e) {
        e.preventDefault();
        y = y+20;
        $('#projectLists__load li').slice(0, y).slideDown();
        if($('#projectLists__load li').length <= y) {
            $('#projectloadMore').hide();
        }
        var projectSwiper = new Swiper('.swiper-container-projects', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    });
});