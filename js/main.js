// Government Polytechnic Chopan - Responsive Scripts (v1)
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      const isExpanded = navLinks.classList.toggle('active');
      mobileBtn.innerHTML = isExpanded ? '✕' : '☰';
      mobileBtn.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Mobile Dropdown Click Handler
  const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const menu = item.querySelector('.dropdown-menu');
    
    if (link && menu) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          menu.classList.toggle('show-mobile');
        }
      });
    }
  });

  // Hero Image Slider
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  
  if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval = null;

    function showSlide(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      currentSlide = index;
    }

    function nextSlide() {
      let nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }

    function prevSlide() {
      let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 4500);
    }

    function stopAutoSlide() {
      if (slideInterval) clearInterval(slideInterval);
    }

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoSlide);
      sliderContainer.addEventListener('mouseleave', startAutoSlide);
      sliderContainer.addEventListener('touchstart', stopAutoSlide, {passive: true});
      sliderContainer.addEventListener('touchend', startAutoSlide, {passive: true});
    }

    startAutoSlide();
  }
});
