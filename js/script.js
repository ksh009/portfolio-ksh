// Selectors
const navBar = document.querySelector('.header__nav');

// Event listeners
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    navBar.style.backgroundColor = '#175D60';
    navBar.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
  } else {
    navBar.style.backgroundColor = 'transparent';
    navBar.style.boxShadow = 'none';
  }
});
