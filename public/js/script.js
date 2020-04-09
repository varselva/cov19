var slideIndex = 1;
showSlides1(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);
showSlides4(slideIndex);

function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function plusSlides4(n) {
  showSlides4(slideIndex += n);
}


function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  slides1[slideIndex-1].style.display = "block";
}


function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  slides2[slideIndex-1].style.display = "block";
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  slides3[slideIndex-1].style.display = "block";
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  if (n > slides4.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  slides4[slideIndex-1].style.display = "block";
}

function sendMail() {
  document.getElementById("sendmail").submit();
}