const hamburger = document.querySelector('.hamburger');
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.add('mobile-menu');
  document.querySelector('header').appendChild(mobileMenu);

  // Combine both menus into mobile menu
  mobileMenu.innerHTML = `<ul>${navLeft.innerHTML}${navRight.innerHTML}</ul>`;

  // Toggle menu on click
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
  });


   const faders = document.querySelectorAll('.fade');
    const appearOptions = { threshold: 0.3 };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(el => appearOnScroll.observe(el));


    // sliding in property 
    document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.slide-in-right');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  });



  //   message section 
document.addEventListener("DOMContentLoaded", () => {
    const guidedContent = document.querySelector('.message-content');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          guidedContent.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(guidedContent);
  });




//   guided expertly section 
document.addEventListener("DOMContentLoaded", () => {
    const guidedContent = document.querySelector('.guided-content');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          guidedContent.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(guidedContent);
  });


  // Testimonials scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll('.testimonial');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  testimonials.forEach(t => observer.observe(t));
});
