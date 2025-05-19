document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (event) {
    if (navMenu && navMenu.classList.contains('show') &&
        !event.target.closest('nav') &&
        !event.target.closest('.mobile-menu-btn')) {
      navMenu.classList.remove('show');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
        }

        // Calculate header height for offset
        const headerHeight = document.querySelector('header').offsetHeight;

        // Scroll to the target with offset
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth'
        });

        // Update URL without page jump
        history.pushState(null, null, targetId);
      }
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple form validation
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && !isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }

      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Add active class to nav links based on scroll position
  function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const scrollPosition = window.scrollY + 100; // Offset

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // Offset
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Add active class to Home link when at the top
    if (scrollPosition < 100) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '/' || link.getAttribute('href') === '#home') {
          link.classList.add('active');
        }
      });
    }
  }

  // Call once on load and then on scroll
  setActiveNavLink();
  window.addEventListener('scroll', setActiveNavLink);
});
