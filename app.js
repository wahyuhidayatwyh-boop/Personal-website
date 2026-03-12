const navbar = document.querySelector(".navbar-premium");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href.length <= 1) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    mobileMenu.classList.remove("open");
    const top = target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll("#portfolioFilters .filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

const applyPortfolioFilter = (filter) => {
  portfolioItems.forEach((item) => {
    const category = item.getAttribute("data-category");
    const featured = item.getAttribute("data-featured") === "true";
    if (filter === "All") {
      if (featured) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
      return;
    }
    if (filter === category) {
      item.classList.remove("d-none");
    } else {
      item.classList.add("d-none");
    }
  });
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    applyPortfolioFilter(filter);
  });
});

// Ensure "All" filter is applied on first load
applyPortfolioFilter("All");

// Skills animation
const skillBars = document.querySelectorAll(".skill-fill");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const value = el.getAttribute("data-skill");
        el.style.width = `${value}%`;
        skillObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.4 }
);
skillBars.forEach((bar) => skillObserver.observe(bar));

// Testimonials slider
let currentTestimonial = 0;
const track = document.getElementById("testimonialTrack");
const total = track.children.length;
const updateTestimonials = () => {
  track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
};
document.getElementById("prevTestimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial - 1 + total) % total;
  updateTestimonials();
});
document.getElementById("nextTestimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % total;
  updateTestimonials();
});

// AJAX quote fetch
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const refreshQuote = document.getElementById("refreshQuote");

async function loadQuote() {
  quoteText.textContent = "Loading quote...";
  quoteAuthor.textContent = "";

  const sources = [
    async () => {
      const res = await fetch("https://dummyjson.com/quotes/random");
      if (!res.ok) throw new Error(`DummyJSON error: ${res.status}`);
      const data = await res.json();
      return { text: data.quote, author: data.author };
    },
    async () => {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error(`Quotable error: ${res.status}`);
      const data = await res.json();
      return { text: data.content, author: data.author };
    },
    async () => {
      const res = await fetch("https://type.fit/api/quotes");
      if (!res.ok) throw new Error(`Type.fit error: ${res.status}`);
      const list = await res.json();
      const pick = list[Math.floor(Math.random() * list.length)];
      return { text: pick.text, author: pick.author };
    },
  ];

  for (const getQuote of sources) {
    try {
      const result = await getQuote();
      quoteText.textContent = result.text || "Stay positive. Work hard. Make it happen.";
      quoteAuthor.textContent = result.author ? `— ${result.author}` : "— Anonymous";
      return;
    } catch (err) {
      console.warn("Quote source failed:", err);
    }
  }

  quoteText.textContent = "Failed to load quote.";
  quoteAuthor.textContent = "Check your internet or run via local server.";
}

refreshQuote.addEventListener("click", loadQuote);
loadQuote();
