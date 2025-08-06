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

let cart = new Set();

function addToCart(itemName) {
  const toast = document.getElementById("toast");

  if (cart.has(itemName)) {
    showToast(`"${itemName}" is already in your cart.`, false);
  } else {
    cart.add(itemName);
    updateCartCount();
    showToast(`"${itemName}" has been added to your cart!`, true);
  }
}

function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.textContent = cart.size;
  }
}

//for image change and hover 
const imageElement = document.getElementById("dynamicImage");

    const imagePaths = [
      "../assets/tailor1.jpg",
      "../assets/tailor2.jpg",
      "../assets/tailor3.jpg",
      "../assets/tailor4.jpg",
      "../assets/tailor5.jpg",
      "../assets/tailor6.jpg"
    ];

    let currentIndex = 0;

    function showNextImage() {
      currentIndex = (currentIndex + 1) % imagePaths.length;
      imageElement.src = imagePaths[currentIndex];
    }

    // Automatically change image every 5 seconds
    setInterval(showNextImage, 5000);

    // Add JS-only hover effect (scale + shadow)
    imageElement.addEventListener("mouseenter", () => {
      imageElement.style.transform = "scale(1.05)";
      imageElement.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
    });

    imageElement.addEventListener("mouseleave", () => {
      imageElement.style.transform = "scale(1)";
      imageElement.style.boxShadow = "none";
    });



    // service section hover 
     const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 12px 25px rgba(0,0,0,0.2)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 0 5px rgba(0,0,0,0.1)';
      });
    });


    // about us section 
     // Button hover effect
    const aboutBtn = document.getElementById('customAboutBtn');
    aboutBtn.addEventListener('mouseenter', () => {
      aboutBtn.style.backgroundPosition = 'left bottom';
    });
    aboutBtn.addEventListener('mouseleave', () => {
      aboutBtn.style.backgroundPosition = 'right bottom';
    });

    // Add styles via JS
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: 'montserrat', sans-serif;
        margin: 0;
        background-color: #fff;
      }

      .custom-about-section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 4rem 2rem;
        background-color: transparent;
        gap: 2rem;
      }

      .custom-about-left {
        flex: 1 1 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 1rem;
      }

      .custom-img-wrapper {
        width: 600px;
        height: auto;
        overflow: hidden;
        border-radius: 6px;
        position: relative;
        z-index: 2;
      }

      .custom-img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      .custom-img-wrapper:hover img {
        transform: scale(1.1);
      }

      .custom-img-overlay {
        position: absolute;
        bottom: -30px;
        right: -50px;
        width: 200px;
        height: 260px;
        overflow: hidden;
        border-radius: 6px;
        z-index: 1;
      }

      .custom-img-overlay img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      .custom-img-overlay:hover img {
        transform: scale(1.1);
      }

      .custom-about-right {
        flex: 1 1 45%;
        padding: 1rem;
      }

      .custom-about-right h2 {
        font-size: 3rem;
        font-weight: 300;   
        margin-bottom: 1rem;
        color: #0f1c2e;
      }

      .custom-about-right p {
        font-size: 1.1rem;
        color: #1a1a1a;
        line-height: 1.6;
        margin-bottom: 1rem;
        font-weight: 300;
      }

      .custom-about-btn {
        display: inline-block;
        padding: 0.9rem 2rem;
        background: linear-gradient(to right, #d8b598ff 50%, #d0ab92ff 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        color: white;
        font-weight: 300;
        border: none;
        cursor: pointer;
        transition: background-position 0.5s ease;
        font-size: 1rem;
        // border-radius: 4px;
        margin-top: 1rem;
      }

      @media screen and (max-width: 768px) {
        .custom-about-section {
          flex-direction: column;
          text-align: center;
          background-color: #faede3ff;
        }

        .custom-about-left,
        .custom-about-right {
          flex: 1 1 100%;
        }

        .custom-img-wrapper,
        .custom-img-overlay {
          width: 90%;
          max-width: 500px;
          height: auto;
        }

        .custom-img-overlay {
          position: relative;
          right: 0;
          bottom: 0;
          margin-top: 1rem;
        }

        .custom-about-right h2 {
          font-size: 2rem;
        }

        .custom-about-right p {
          font-size: 1rem;
        }
      }
    `;
    document.head.appendChild(style);


    // custom service section 

     // Simple scroll animation using IntersectionObserver
    const cardi = document.querySelectorAll('.feature-section-card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('feature-visible');
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, {
      threshold: 0.2
    });

    cardi.forEach(card => observer.observe(card));



     // owner section 
// Counter animation
const counters = document.querySelectorAll('.stat-counter');
const statBoxes = document.querySelectorAll('.owner-section-stat');

const animateCount = (el) => {
  const target = +el.getAttribute('data-target');
  const duration = 2000;
  const steps = 50;
  let current = 0;
  const increment = target / steps;
  const delay = duration / steps;
  const hasPlus = el.hasAttribute('data-plus');

  const update = () => {
    current += increment;
    if (current >= target) {
      el.textContent = target + (hasPlus ? '+' : '');
    } else {
      el.textContent = Math.floor(current) + (hasPlus ? '+' : '');
      setTimeout(update, delay);
    }
  };

  update();
};

const observerr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('stat-visible');
      const counter = entry.target.querySelector('.stat-counter');
      animateCount(counter);
      observerr.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

statBoxes.forEach(box => observerr.observe(box));
