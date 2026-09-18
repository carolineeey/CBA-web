// script for scrollbar
window.onscroll = function() { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// script for slideshow gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slides');
  //let dots = document.getElementsByClassName('demo');
  if (n > slides.length) { slideIndex = 1 };
  if (n < 1) { slideIndex = slides.length };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  //for (i = 0; i < dots.length; i++) {
  //dots[i].className = dots[i].className.replace('active','');
  //}
  slides[slideIndex - 1].style.display = 'block';
  //dots[slideIndex - 1].className += 'active';
}

//script for toggle
function colorchangerbtn() {
  document.getElementById('colorchangerbox').classList.toggle('active');
}

// script for color changer

let themebuttons = document.querySelectorAll('.themebutton');
themebuttons.forEach(color => {
  color.addEventListener('click', () => {
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--main-color', dataColor)
  })
})