
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
   if ( this.value === 'hdb' ) {
     console.log('value', 'hdb');
   } else if ( this.value === 'landed' ) {
      console.log('value', 'landed');
   }  
}

Array.prototype.forEach.call(radios, function(radio) {
   radio.addEventListener('change', changeHandler);
});