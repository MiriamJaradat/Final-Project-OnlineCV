/*hidden menu*/

document.getElementById("dropbtnid").addEventListener("click", myFunction)

function myFunction() {
    console.log('bla');
    document.getElementById("dropdown-content").classList.toggle("show");
}


var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(event) {
    this.classList.toggle("active-collapse");
    var content = event.target.parentElement.nextElementSibling
    content.classList.toggle("active-collapse-content");

    //if (content.style.maxHeight){
      //content.style.maxHeight = null;
    //} else {
      //content.style.maxHeight = content.scrollHeight + "px";
    //} 
  });
}