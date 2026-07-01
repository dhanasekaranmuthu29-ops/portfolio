// ======================================
// TYPING ANIMATION
// ======================================

const words = [
  "Full Stack Developer",
  "Python Programmer",
  "AI Enthusiast",
  "Web Designer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = isDeleting ? 50 : 120;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// ======================================
// STICKY HEADER
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#081b11";
    header.style.boxShadow = "0 0 20px #7CFC00";
  } else {
    header.style.background = "rgba(8,27,17,.85)";
    header.style.boxShadow = "none";
  }
});

// ======================================
// ACTIVE MENU
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ======================================
// SCROLL REVEAL
// ======================================

const revealElements = document.querySelectorAll(
  ".home-content,.home-image,.about,.skills,.projects,.contact",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(60px)";
  element.style.transition = "all 1s ease";

  observer.observe(element);
});

// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#7CFC00";
topBtn.style.color = "#081b11";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 20px #7CFC00";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("Portfolio Website Loaded Successfully");
