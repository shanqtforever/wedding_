function handleResize() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    if (window.innerWidth <= 900) {
      navLinks.style.display = 'none';
      menuToggle.style.display = 'flex';
    } else {
      navLinks.style.display = 'flex';
      menuToggle.style.display = 'none';
    }
  }
  window.addEventListener('resize', handleResize);
  window.addEventListener('DOMContentLoaded', handleResize);

  document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.alignItems = 'center';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.width = '100vw';
      navLinks.style.background = '#fff';
      navLinks.style.zIndex = '1051';
    }
  });
