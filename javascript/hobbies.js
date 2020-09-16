/*hidden menu*/

document.getElementById("dropbtnid").addEventListener("click", myFunction)

function myFunction() {
    console.log('bla');
    document.getElementById("dropdown-content").classList.toggle("show");
}

/*hobbies slides*/

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

showSlides();

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot","");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  setTimeout(showSlides, 2000);
}