
// toggle function for best tattoos
function toggle1(){
  var x= document.getElementById('text1');
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("btn1").innerHTML = "Read Less";
  } else {
    x.style.display = "none";
    document.getElementById("btn1").innerHTML = "Read More";
  }
}

var a= document.getElementById('text1');
a.style.display = "none";

function toggle1(){
  var x= document.getElementById('text1');
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("btn1").innerHTML = "Read Less";
  } else {

    x.style.display = "none";
    document.getElementById("btn1").innerHTML = "Read More";


  }
}

var b= document.getElementById('text2');
b.style.display = "none";

function toggle2(){
  var x= document.getElementById('text2');
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("btn2").innerHTML = "Read Less";
  } else {

    x.style.display = "none";
    document.getElementById("btn2").innerHTML = "Read More";


  }
}

// <----------------------------------------menu toggle------------------------------------------------>


var menuitem = document.getElementById("menuitem");
menuitem.style.maxHeight = "0px";

function menutoggle() {
  if (menuitem.style.maxHeight == '0px') {
    menuitem.style.maxHeight = "200px"
  } else {
    menuitem.style.maxHeight = "0px"
  }
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
