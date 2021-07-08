//TABS ONLY

const navActive = document.querySelector('.active');
const navAbout = document.querySelector('.section-navigation-about');
const navIncluded = document.querySelector('.section-navigation-included');
const navGallery = document.querySelector('.section-navigation-gallery');
const textAbout = document.querySelector('.section-text-main');
const textIncluded = document.querySelector('.section-text-included');
const textGallery = document.querySelector('.section-text-gallery');

const menuList = [navAbout, navIncluded, navGallery];
const textList = [textAbout, textIncluded, textGallery];

// this function removes a class that highlihgts the active menu choice from all choices and adds it only to
// an element that we pass as an argument, which will be the clicked element.
// The second thing this function does - it loops through the array textList and removes the style Hidden - this
// skyle hides all the elements (what text to display according to the selected menu). Then it removes Hidden style
// only from the element that is supposed to be displayed
function higlightsActiveMenu(menuElement, contentElement) {
  menuList.forEach((el) => el.classList.remove('active'));
  textList.forEach((el) => el.classList.remove('active-txt'));
  menuElement.classList.add('active');
  contentElement.classList.add('active-txt');
  textList.forEach((el) => el.classList.add('hidden'));
  contentElement.classList.remove('hidden');
}

// this function adds click-event listener to all buttons of the menu
function menuClicked(menuElement, contentElement) {
  menuElement.addEventListener('click', () => {
    higlightsActiveMenu(menuElement, contentElement);
  });
}

menuClicked(navIncluded, textIncluded);
menuClicked(navGallery, textGallery);
menuClicked(navAbout, textAbout);

//GALLERY ONLY
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
