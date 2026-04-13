AOS.init();

const header = document.getElementById("site-header");

header.innerHTML = `
  <nav class="navbar">
    <div class="logo">
  <a  href="#home">
    <span class="company-name">CreativeHub</span>
  </a>
    </div>

    <ul class="nav-links">
      <li><a href="#about">Hakkımızda</a></li>
      <li><a href="#services">Hizmetler</a></li>
      <li><a href="#transport">Konumumuz</a></li>
      <li><a href="#contact">İletişim</a></li>
    </ul>

    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
`;

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});