 function toggleMenu() {
      const nav = document.getElementById('navLinks');
      const icon = document.getElementById('menu-icon');
      nav.classList.toggle('active');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
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


// bespoke section 
function scrollSection(btn, direction) {
      const section = btn.parentElement;
      const container = section.querySelector('.scroll-container');
      container.scrollBy({ left: direction * 380, behavior: 'smooth' });
    }