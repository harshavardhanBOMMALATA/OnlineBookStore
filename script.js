// ---------------- USER AUTH + NAVBAR ----------------
let logged = localStorage.getItem("loggedIn");
let user = JSON.parse(localStorage.getItem("user"));

if (!logged || !user) {
  // If not logged in, go back to login
  window.location.href = "login.html";
} else {
  document.getElementById("userNameText").innerText = user.username;
  document.getElementById("uName").innerText = user.username;
  document.getElementById("uEmail").innerText = user.email;
  document.getElementById("uAddress").innerText = user.address;
  document.getElementById("uPhone").innerText = user.phone;
}

function toggleUserBox() {
  const box = document.getElementById("userBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// ---------------- SIDEBAR (COLLAPSIBLE) ----------------
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

// ---------------- BOOK DATA ----------------
let allBooks = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    description: "A young wizard discovers his magical heritage and attends Hogwarts School.",
    price: 499,
    year: 1997,
    publication: "Bloomsbury",
    copies: 12,
    image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._SL1500_.jpg"
  },
  {
    id: 2,
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romance",
    description: "Two teenagers form a deep bond while battling cancer.",
    price: 399,
    year: 2012,
    publication: "Dutton Books",
    copies: 8,
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/459EF8E90B72194883DBDAEC0C4EA6179185D57DE0947832F52288DC09F30329/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    description: "Practical strategies to build good habits and break bad ones.",
    price: 450,
    year: 2018,
    publication: "Penguin Random House",
    copies: 15,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg"
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    genre: "Business",
    description: "Lessons about money, investing, and financial independence.",
    price: 350,
    year: 1997,
    publication: "Plata Publishing",
    copies: 20,
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._SL1500_.jpg"
  },
  {
    id: 5,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Tech",
    description: "A handbook of agile software craftsmanship for programmers.",
    price: 699,
    year: 2008,
    publication: "Prentice Hall",
    copies: 5,
    image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg"
  },
  {
    id: 6,
    title: "Naruto Vol. 1",
    author: "Masashi Kishimoto",
    genre: "Manga",
    description: "The story of a young ninja with dreams of becoming Hokage.",
    price: 299,
    year: 1999,
    publication: "Shueisha",
    copies: 18,
    image: "https://cdn.pixabay.com/photo/2023/09/04/07/39/ai-generated-8232206_1280.png"
  },
  {
    id: 7,
    title: "Death Note Vol. 1",
    author: "Tsugumi Ohba",
    genre: "Manga",
    description: "A high school student discovers a notebook that kills anyone whose name is written in it.",
    price: 320,
    year: 2003,
    publication: "Shueisha",
    copies: 10,
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg"
  },
  {
    id: 8,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genre: "Thriller",
    description: "A woman becomes entangled in a missing person investigation.",
    price: 380,
    year: 2015,
    publication: "Riverhead Books",
    copies: 7,
    image: "https://i5.walmartimages.com/asr/a6513e10-23f9-4f18-9100-554fddcaa750_1.edd1069e46c70d49a412c4ec82f6dd21.jpeg"
  },
  {
    id: 9,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Thriller",
    description: "A twisted tale of marriage and media when a wife goes missing.",
    price: 420,
    year: 2012,
    publication: "Crown Publishing",
    copies: 6,
    image: "https://m.media-amazon.com/images/I/81af+MCATTL._SL1500_.jpg"
  },
  {
    id: 10,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    description: "A novel about racial injustice and moral growth in the American South.",
    price: 360,
    year: 1960,
    publication: "J.B. Lippincott & Co.",
    copies: 9,
    image: "https://cdn2.penguin.com.au/covers/original/9781785151552.jpg"

  },
  {
    id: 11,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    description: "A dystopian future under constant surveillance and totalitarian rule.",
    price: 320,
    year: 1949,
    publication: "Secker & Warburg",
    copies: 11,
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png"
  },
  {
    id: 12,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    description: "A shepherd boy's journey to discover his personal legend.",
    price: 280,
    year: 1988,
    publication: "HarperCollins",
    copies: 14,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._SL1500_.jpg"
  },
  {
    id: 13,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self Help",
    description: "A counterintuitive approach to living a good life.",
    price: 399,
    year: 2016,
    publication: "HarperOne",
    copies: 13,
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SL1500_.jpg"
  },
  {
    id: 14,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self Help",
    description: "Rules for focused success in a distracted world.",
    price: 430,
    year: 2016,
    publication: "Grand Central Publishing",
    copies: 8,
    image: "https://m.media-amazon.com/images/I/71din4TLubL.jpg"
  },
  {
    id: 15,
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    genre: "Tech",
    description: "Interview questions and solutions for software engineers.",
    price: 899,
    year: 2015,
    publication: "CareerCup",
    copies: 4,
    image: "https://m.media-amazon.com/images/I/61oBPZ6GM+L._SL1000_.jpg"
  },
  {
    id: 16,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Mystery",
    description: "A woman's act of violence against her husband—and her refusal to speak.",
    price: 370,
    year: 2019,
    publication: "Celadon Books",
    copies: 6,
    image: "https://m.media-amazon.com/images/I/81F9UYf0n3L._SL1500_.jpg"
  },
  {
    id: 17,
    title: "Sherlock Holmes: The Complete Novels",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    description: "Adventures of the legendary detective Sherlock Holmes.",
    price: 650,
    year: 1892,
    publication: "Wordsworth Editions",
    copies: 5,
    image: "https://cdnb.artstation.com/p/assets/images/images/058/706/813/large/george-designes-sherlock-holmes-poster.jpg?1674771455"
  },
  {
    id: 18,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "Bilbo Baggins embarks on a quest with dwarves to reclaim treasure.",
    price: 420,
    year: 1937,
    publication: "George Allen & Unwin",
    copies: 9,
    image: "https://m.media-amazon.com/images/I/91b0C2YNSrL._SL1500_.jpg"
  },
  {
    id: 19,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "The epic journey to destroy the One Ring.",
    price: 999,
    year: 1954,
    publication: "George Allen & Unwin",
    copies: 3,
    image: "https://m.media-amazon.com/images/I/91SZSW8qSsL._SL1500_.jpg"
  },
  {
    id: 20,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    description: "How today's entrepreneurs use continuous innovation to succeed.",
    price: 520,
    year: 2011,
    publication: "Crown Business",
    copies: 7,
    image: "https://m.media-amazon.com/images/I/81vvgZqCskL._SL1500_.jpg"
  },
  {
    id: 21,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Business",
    description: "Classic book on mindset and building wealth.",
    price: 260,
    year: 1937,
    publication: "The Ralston Society",
    copies: 10,
    image: "https://m.media-amazon.com/images/I/71UypkUjStL._SL1500_.jpg"
  },
  {
    id: 22,
    title: "One Piece Vol. 1",
    author: "Eiichiro Oda",
    genre: "Manga",
    description: "Monkey D. Luffy sets sail to become the Pirate King.",
    price: 310,
    year: 1997,
    publication: "Shueisha",
    copies: 14,
    image: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/09/One-Piece-Chapter-1094-Release-Date.jpg?resize=1200,630" },
  {
    id: 23,
    title: "Demon Slayer Vol. 1",
    author: "Koyoharu Gotouge",
    genre: "Manga",
    description: "Tanjiro becomes a demon slayer to avenge his family.",
    price: 330,
    year: 2016,
    publication: "Shueisha",
    copies: 9,
    image: "https://occ-0-3011-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc_IAP39hj-kZ8BSec3IQ3zMRFLQvuxISsTH0WbVmISwOd7_gNPUA19gEwg5EkWJFdPrVyeOrDxhCFi08qjHYzABVNdsJHmlQjpw.jpg?r=920" },
  {
    id: 24,
    title: "The Shining",
    author: "Stephen King",
    genre: "Thriller",
    description: "A family heads to an isolated hotel where evil forces influence the father.",
    price: 390,
    year: 1977,
    publication: "Doubleday",
    copies: 6,
    image: "https://m.media-amazon.com/images/I/71m-MxdJ2WL._SL1500_.jpg"
  },
  {
    id: 25,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "Romance",
    description: "A story about love, pain, and difficult choices.",
    price: 340,
    year: 2016,
    publication: "Atria Books",
    copies: 11,
    image: "https://m.media-amazon.com/images/I/71PNGYHykrL._SL1500_.jpg"
  },
  {
    id: 26,
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Thriller",
    description: "A writer uncovers disturbing secrets while finishing another author's series.",
    price: 360,
    year: 2018,
    publication: "Grand Central Publishing",
    copies: 7,
    image: "https://www.selectedreads.com/wp-content/uploads/2024/01/1-64.png"
  },
  {
    id: 27,
    title: "Can't Hurt Me",
    author: "David Goggins",
    genre: "Self Help",
    description: "A Navy SEAL shares his story of mastering the mind.",
    price: 450,
    year: 2018,
    publication: "Lioncrest Publishing",
    copies: 5,
    image: "https://m.media-amazon.com/images/I/81a4kCNuH+L._SL1500_.jpg"
  },
  {
    id: 28,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    genre: "Tech",
    description: "Deep dive series on core mechanisms of JavaScript.",
    price: 550,
    year: 2014,
    publication: "O'Reilly Media",
    copies: 6,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585414018i/52764087.jpg"
  },
  {
    id: 29,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Business",
    description: "Timeless lessons on wealth, greed, and happiness.",
    price: 399,
    year: 2020,
    publication: "Harriman House",
    copies: 16,
    image: "https://m.media-amazon.com/images/I/81Lb75rUhLL._SL1500_.jpg"
  },
  {
    id: 30,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    description: "A library between life and death offers endless possibilities.",
    price: 410,
    year: 2020,
    publication: "Canongate Books",
    copies: 6,
    image: "https://beffshuff.com/wp-content/uploads/2021/05/DSC_1104-1440x2160.jpg"
  }
];

// ---------------- FILTER + PAGINATION ----------------
let currentGenre = "All";
let currentPage = 1;
const booksPerPage = 6;

function getFilteredBooks() {
  if (currentGenre === "All") return allBooks;
  return allBooks.filter(b => b.genre === currentGenre);
}

function renderBooks() {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  const books = getFilteredBooks();
  const start = (currentPage - 1) * booksPerPage;
  const end = start + booksPerPage;
  const pageBooks = books.slice(start, end);

  if (pageBooks.length === 0) {
    container.innerHTML = "<p>No books found for this filter.</p>";
    return;
  }

  pageBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <div class="book-main" onclick="openBookDetails(${book.id})">
        <img src="${book.image}" alt="${book.title}">
        <div class="book-title">${book.title}</div>
        <div class="book-author">By ${book.author}</div>
        <div class="book-desc">${book.description}</div>
        <div class="book-meta">
          Genre: ${book.genre} &nbsp;|&nbsp;
          Year: ${book.year} &nbsp;|&nbsp;
          ${book.publication}
        </div>
        <div class="book-copies">Available copies: ${book.copies}</div>
        <div class="book-price">₹${book.price}</div>
      </div>
      <button class="wishlist-btn" onclick="event.stopPropagation(); addToWishlist(${book.id})">
        Add to Wishlist
      </button>
    `;

    container.appendChild(card);
  });

  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalBooks = getFilteredBooks().length;
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn" + (i === currentPage ? " active" : "");
    btn.innerText = i;
    btn.onclick = () => {
      currentPage = i;
      renderBooks();
    };
    pagination.appendChild(btn);
  }
}

function filterBooks(genre) {
  currentGenre = genre;
  currentPage = 1;
  renderBooks();
}

function openBookDetails(bookId) {
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return;

  // Save this book to localStorage
  localStorage.setItem("selectedBook", JSON.stringify(book));

  // Go to details page
  window.location.href = "description.html";
}



// ---------------- WISHLIST (localStorage) ----------------
function addToWishlist(bookId) {
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return;

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const exists = wishlist.find(b => b.id === bookId);
  if (exists) {
    alert("Already in wishlist");
    return;
  }
  wishlist.push(book);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Added to wishlist!");
}

// ---------------- INIT ----------------
renderBooks();
