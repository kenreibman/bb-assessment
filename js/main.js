// grab the menu-toggle in the header using es6
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.header-navigation--mobile');
const slideshow = document.querySelector('.slideshow');
const featuredWidgetHeader = document.querySelector('.featured-widget__header');

menuToggle.addEventListener('click', function () {
  // toggle the active class on the menu-toggle
  mobileNav.classList.toggle('active');
  // hide the slideshow hero section while mobile menu is active
  slideshow.classList.toggle('hidden');
  // hide the featured widget while mobile menu is active
  featuredWidgetHeader.classList.toggle('hidden');
});

// Footer Accordion variables
const expander = document.querySelectorAll('.expander--mobile');
const expanderToggle = document.querySelectorAll('.expander__toggle--mobile');
const expanderPanel = document.querySelectorAll('.expander__panel--mobile');

// loop through each expander and add a click event listener
for (let i = 0; i < expander.length; i++) {
  expander[i].addEventListener('click', function () {
    expanderPanel[i].classList.toggle('active');
  });
  // when one is clicked, close all the others
  expanderToggle[i].addEventListener('click', function () {
    for (let i = 0; i < expanderToggle.length; i++) {
      expanderPanel[i].classList.remove('active');
    }
  });
}
