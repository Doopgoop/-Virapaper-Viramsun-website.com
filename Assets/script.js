document.addEventListener('DOMContentLoaded', () => {
  // ---------- Mobile Menu Toggle ----------
  const openBtn = document.getElementById('openMobile');
  const navLinks = document.querySelector('nav.links');

  openBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  // ---------- WhatsApp Link Setup ----------
  const whatsappBtn = document.getElementById('whatsappBtn');
  const whatsappNumber = '+234800000000'; // Replace with real number
  whatsappBtn?.setAttribute(
    'href',
    `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`
  );

  // ---------- Catalogue Download Links ----------
  const catalogueIds = ['catalogueDownload', 'downloadCatalogue'];
  catalogueIds.forEach((id) => {
    const el = document.getElementById(id);
    el?.setAttribute('href', '#'); // Replace '#' with your PDF URL
  });

  // ---------- Form Submit Demo ----------
  const form = document.getElementById('enquiryForm');
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);

    // Simulated alert - replace with AJAX or server endpoint
    alert('Enquiry simulated. Replace this with server submission code.');
    form.reset();
  });

  // ---------- Swiper Slider Initialization ----------
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    grabCursor: true,
    speed: 1000,
    parallax: true,
    autoplay: false,
    effect: 'slide',
    mousewheel: true,
  });

  // ---------- Scroll Fade-in Animation ----------
  const fadeElems = document.querySelectorAll('.fade-in');

  const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElems.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('load', fadeInOnScroll);

  // ---------- Back-to-Top Button ----------
  const backToTop = document.getElementById('backToTop');
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const toggleBackToTop = () => {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.style.opacity = '1';
      backToTop.style.pointerEvents = 'auto';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.pointerEvents = 'none';
    }
  };

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();
});
