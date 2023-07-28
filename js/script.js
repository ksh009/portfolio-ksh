// Selectors
const navBar = document.querySelector('.header__nav');
const classList = [
  '.main__skills',
  '.main__project',
  '.main__about',
  '.main__contact',
];

// Event listeners
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 100) {
    navBar.style.backgroundColor = '#175D60';
    navBar.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
  } else {
    navBar.style.backgroundColor = 'transparent';
    navBar.style.boxShadow = 'none';
  }
});

classList.forEach((className) => {
  const h2Elements = document.querySelectorAll(`${className} h2`);

  h2Elements.forEach((h2) => {
    const words = h2.textContent.split(' ');
    h2.innerHTML = words
      .map((word, index) => {
        if (index % 2 !== 0) {
          return `<span class="purple-word">${word}</span>`;
        }
        return word;
      })
      .join(' ');
  });
});
