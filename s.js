let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Elements
const cartCountElement = document.querySelector(".cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.querySelector(".cart-items");
const cartIcon = document.getElementById("cartIcon");
const closeCart = document.getElementById("closeCart");

// Update cart count
function updateCartCount() {
  cartCountElement.textContent = cartItems.length;
}

// Render cart items
function renderCartItems() {
  cartItemsContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${item.name} - $${item.price}</span>
      <button onclick="removeItem(${index})">X</button>
    `;

    cartItemsContainer.appendChild(div);
  });
}

// Remove item
function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartCount();
  renderCartItems();
}

// Add to cart
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartItems.push({
      name: button.dataset.name,
      price: button.dataset.price
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartCount();
  });
});

// Open & close cart
cartIcon.addEventListener("click", () => {
  renderCartItems();
  cartModal.style.display = "flex";
});

closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Init
updateCartCount();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you for contacting Ayiset Collection! We will get back to you shortly.");

  contactForm.reset();
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
