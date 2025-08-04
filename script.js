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

function showToast(message, isSuccess) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.backgroundColor = isSuccess ? "#4CAF50" : "#f44336";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}



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
//message content section 
  document.addEventListener("DOMContentLoaded", () => {
  const messageContent = document.querySelector('.message-content');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        messageContent.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(messageContent);
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


    // show all button in suits section 
  function showAllSuits() {
  const hidden = document.getElementById("hidden-suits");
  const button = document.getElementById("view-all-btn");

  hidden.style.display = "grid";
  hidden.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
  hidden.style.gap = "2rem";
  hidden.style.marginTop = "2rem";

  button.style.display = "none";
}

function showAllSuits() {
  document.querySelectorAll('.hidden-suit').forEach(card => {
    card.classList.remove('hidden-suit');
  });
  document.getElementById('view-all-btn').style.display = 'none';
}

// for dynamically page loading 
document.addEventListener("DOMContentLoaded", () => {
  const type = new URLSearchParams(window.location.search).get("type") || "suits";

  fetch("../data.json")
    .then(res => res.json())
    .then(data => {
      if (!data[type]) return;

      const { hero, products } = data[type];

      // Update hero section
      document.querySelector("#hero-section h2").textContent = hero.title;
      document.querySelector("#hero-section p").textContent = hero.description;
      document.querySelector("#hero-section img").src = hero.image;

      // Update products
      const container = document.querySelector("#product-collection .suits-grid");
      container.innerHTML = ""; // Clear default cards

      products.forEach(product => {
        container.innerHTML += `
          <div class="suit-card">
            <div class="suit-image">
              <img src="${product.image}" alt="${product.name}">
              <div class="hover-overlay">
                <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
              </div>
            </div>
            <div class="suit-info">
              <p>${product.name}</p>
              <span>${product.price}</span>
            </div>
          </div>
        `;
      });
    });
});
