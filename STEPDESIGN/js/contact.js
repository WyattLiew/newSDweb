
	var key = document.getElementById("keyCollected");
	var iskeyCollected = document.getElementById("iskeyCollected");
	

	key.onchange = function() {
  if (key.value == "no") {
		iskeyCollected.style.display = "flex";
	}
	else{
		iskeyCollected.style.display = "none";
	}
}

var radios = document.querySelectorAll('input[type=radio][name="propertyType"]');


function changeHandler(event) {
	const hdb = document.getElementById("hdb");
	const hdb1 = document.getElementById("hdb1");
	const condo = document.getElementById("condo");
	const condo1 = document.getElementById("condo1");
	const landed = document.getElementById("landed");
	const landed1 = document.getElementById("landed1");
	const commercial = document.getElementById("commercial");
	const commercial1 = document.getElementById("commercial1");
   if ( this.value === 'hdb' ) {
     hdb.style.display = "none";
     landed.style.display = "inline-block";
     commercial.style.display = "inline-block";
     condo.style.display = "inline-block";
     hdb1.style.display = "inline-block";
     landed1.style.display = "none";
     commercial1.style.display = "none";
     condo1.style.display = "none";
   } else if ( this.value === 'landed' ) {
      hdb.style.display = "inline-block";
     landed.style.display = "none";
     commercial.style.display = "inline-block";
     condo.style.display = "inline-block";
     hdb1.style.display = "none";
     landed1.style.display = "inline-block";
     commercial1.style.display = "none";
     condo1.style.display = "none";
   }  
   else if ( this.value === 'condo' ) {
      hdb.style.display = "inline-block";
     landed.style.display = "inline-block";
     commercial.style.display = "inline-block";
     condo.style.display = "none";
     hdb1.style.display = "none";
     landed1.style.display = "none";
     commercial1.style.display = "none";
     condo1.style.display = "inline-block";
   } 
   else if ( this.value === 'commercial' ) {
      hdb.style.display = "inline-block";
     landed.style.display = "inline-block";
     commercial.style.display = "none";
     condo.style.display = "inline-block";
     hdb1.style.display = "none";
     landed1.style.display = "none";
     commercial1.style.display = "inline-block";
     condo1.style.display = "none";
   }  
}

Array.prototype.forEach.call(radios, function(radio) {
   radio.addEventListener('change', changeHandler);
});