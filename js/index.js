export function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}





export function navbarToggler() {
  document.addEventListener('DOMContentLoaded', () => {
      const wrapper = document.getElementById('wrapper');
      const toggleButton = document.getElementById('menu-toggle');

      if (toggleButton && wrapper) {
          toggleButton.addEventListener('click', function () {
              if (wrapper.style.display === 'none' || wrapper.style.display === '') {
                  wrapper.style.display = 'block';
              } else {
                  wrapper.style.display = 'none';
              }
          });
      }
  });
}






