document.addEventListener('DOMContentLoaded', function () {
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Ignore empty anchors

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate header height for offset
        const headerHeight = document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth'
        });

        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
      contactForm.reset();
    });
  }

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      const nav = document.querySelector('nav ul');
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.right = '20px';
        nav.style.backgroundColor = 'white';
        nav.style.padding = '20px';
        nav.style.borderRadius = '5px';
        nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        nav.style.zIndex = '100';
      }
    });
  }

  // Form submission handler
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    });
  }

});
