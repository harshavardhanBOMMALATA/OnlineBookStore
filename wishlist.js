// USER DETAILS
let logged = localStorage.getItem("loggedIn");
let user = JSON.parse(localStorage.getItem("user"));

if (!logged || !user) {
  window.location.href = "login.html";
}

document.getElementById("userNameText").innerText = user.username;
document.getElementById("uName").innerText = user.username;
document.getElementById("uEmail").innerText = user.email;
document.getElementById("uAddress").innerText = user.address;
document.getElementById("uPhone").innerText = user.phone;

// Toggle dropdown
function toggleUserBox() {
  let box = document.getElementById("userBox");
  box.style.display = (box.style.display === "block") ? "none" : "block";
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// ----------------- WISHLIST -----------------

function loadWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let container = document.getElementById("wishlistContainer");

  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = "<p>No items in wishlist.</p>";
    return;
  }

  wishlist.forEach(book => {
    let card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
  <input type="checkbox" class="wishlist-check" value="${book.id}" style="margin-bottom:10px;">

  <img src="${book.image}" onerror="this.src='noimage.jpg'">

  <div class="book-title">${book.title}</div>
  <div class="book-author">By ${book.author}</div>

  <div class="book-desc">${book.description}</div>

  <div class="book-meta">
    Genre: ${book.genre} | ${book.year} | ${book.publication}
  </div>

  <div class="book-copies">Available Copies: ${book.copies}</div>
  <div class="book-price">₹${book.price}</div>

  <button class="remove-btn" onclick="removeFromWishlist(${book.id})">Remove</button>

  <button class="order-btn" onclick="goToPlaceOrder(${book.id})">Order Now</button>
`;

    container.appendChild(card);
  });
}

function removeFromWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist = wishlist.filter(book => book.id !== id);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  loadWishlist();
}

// MOVE SINGLE BOOK TO ORDER PAGE
function goToPlaceOrder(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let book = wishlist.find(b => b.id === id);

  if (!book) return;

  // Save selected book
  localStorage.setItem("orderNow", JSON.stringify([book]));

  // Redirect to place order page
  window.location.href = "placeorder.html";
}

function orderAll() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length === 0) {
    alert("No items in wishlist.");
    return;
  }

  localStorage.setItem("orderNow", JSON.stringify(wishlist));

  window.location.href = "placeorder.html";
}

function orderSelected() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let checks = document.querySelectorAll(".wishlist-check:checked");

  if (checks.length === 0) {
    alert("Select at least one item.");
    return;
  }

  let selectedBooks = [];

  checks.forEach(c => {
    let bookId = Number(c.value);
    let book = wishlist.find(b => b.id === bookId);
    if (book) selectedBooks.push(book);
  });

  localStorage.setItem("orderNow", JSON.stringify(selectedBooks));

  window.location.href = "placeorder.html";
}



loadWishlist();
