/*hidden menu*/

document.getElementById("dropbtnid").addEventListener("click", myFunction)

function myFunction() {
    console.log('bla');
    document.getElementById("dropdown-content").classList.toggle("show");
}
