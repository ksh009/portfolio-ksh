// Selectors
const navBar = document.querySelector('.header__nav');
const classList = [
  '.main__skills',
  '.main__project',
  '.main__about',
  '.main__contact',
];
const skillsHeading = document.querySelector('.main__skills h2');
const projectsHeading = document.querySelector('.main__project h2');
const aboutHeading = document.querySelector('.main__about h2');
const contactHeading = document.querySelector('.main__contact h2');

// Event listeners
document.addEventListener('scroll', () => {
  console.log('window.screenY', window.pageYOffset);
  let scroll_position = window.scrollY;
  if (scroll_position > 100) {
    navBar.style.backgroundColor = '#175D60';
    navBar.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
  } else {
    navBar.style.backgroundColor = 'transparent';
    navBar.style.boxShadow = 'none';
  }

  // Scroll animation for skills heading
  if (scroll_position > 300) {
    skillsHeading.classList.add('tracking-in-expand');
  } else {
    skillsHeading.classList.remove('tracking-in-expand');
  }

  // Scroll animation for Project heading
  if (scroll_position > 1800) {
    projectsHeading.classList.add('tracking-in-expand');
  } else {
    projectsHeading.classList.remove('tracking-in-expand');
  }

  // Scroll animation for About heading
  if (scroll_position > 6417) {
    aboutHeading.classList.add('tracking-in-expand');
  } else {
    aboutHeading.classList.remove('tracking-in-expand');
  }

  // Scroll animation for Contact heading
  if (scroll_position > 7704) {
    contactHeading.classList.add('tracking-in-expand');
  } else {
    contactHeading.classList.remove('tracking-in-expand');
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
