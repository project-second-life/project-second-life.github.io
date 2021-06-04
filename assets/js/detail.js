/*Checkout */
// Get the modal
var modalCheckout = document.getElementById("modal-checkout");
    
// Get the button that opens the modal
var btnCheckout = document.getElementById("checkout-trigger");

// Get the <span> element that closes the modal
var spanCheckout = document.getElementsByClassName("close")[1];
var continueShopping = document.getElementById("continue-shopping");

// When the user clicks the button, open the modal 
btnCheckout.onclick = function() {
    modalCheckout.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCheckout.onclick = function() {
    modalCheckout.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalCheckout.style.display = "none";
  }
}

// When the user clicks continue shopping  close it
continueShopping.onclick = function(event) {
      modalCheckout.style.display = "none";
}

/*Slide Show Product Detail*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}