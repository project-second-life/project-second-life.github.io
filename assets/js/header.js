
/*Mobile Menu script */
const mobileMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".menu-bar");
const home = document.querySelector(".home");

logo.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.add("open");
  
});

home.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.remove("open");
  
}); 

/* newsletter script*/
var modal = document.getElementById("modal-newsletter");
    
// Get the button that opens the modal
var btn = document.getElementById("newsletter");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}