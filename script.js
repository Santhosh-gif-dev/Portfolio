// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Typing effect
const textSpan = document.querySelector('.typing-text span');
const words = ["Java", "SQL", "HTML & CSS", "JavaScript"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Typing characters
    textSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }
  } else {
    // Deleting characters
    textSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // move to next word
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();
// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-content');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});
// Animate Bars
function animateBars() {
  document.querySelectorAll('.bar span').forEach(bar => {
    let percent = bar.getAttribute('data-skill');
    bar.style.width = percent + "%";
  });
}

// Animate Circles
function animateCircles() {
  document.querySelectorAll('.circle').forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.background = `conic-gradient(#00e5ff ${percent}%, #222 ${percent}%)`;
  });
}

// Fade-in on scroll
function fadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
      animateBars();
      animateCircles();
    }
  });
}

window.addEventListener('scroll', fadeIn);
// Animate Bars
function animateBars() {
  document.querySelectorAll('.bar span').forEach(bar => {
    let percent = bar.getAttribute('data-skill');
    bar.style.width = percent + "%";
  });
}

// Animate Circles gradually
function animateCircles() {
  document.querySelectorAll('.circle').forEach(circle => {
    let target = parseInt(circle.getAttribute('data-percent'));
    let span = circle.querySelector("span");
    let current = 0;

    let interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        span.textContent = current + "%";
        circle.style.background = `conic-gradient(#00e5ff ${current}%, #222 ${current}%)`;
      }
    }, 20); // speed of animation (lower = faster)
  });
}

// Fade-in + trigger animations
function fadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !el.classList.contains('show')) {
      el.classList.add('show');
      animateBars();
      animateCircles();
    }
  });
}

window.addEventListener('scroll', fadeIn);
// Animate Technical Skill Bars
function animateBars() {
  document.querySelectorAll('.bar span').forEach(bar => {
    let target = parseInt(bar.getAttribute('data-skill'));
    let current = 0;

    let interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        bar.style.width = current + "%";
        bar.textContent = current + "%"; // show inside bar
      }
    }, 20);
  });
}

// Animate Professional Skill Circles
function animateCircles() {
  document.querySelectorAll('.circle').forEach(circle => {
    let target = parseInt(circle.getAttribute('data-percent'));
    let span = circle.querySelector("span");
    let current = 0;

    let interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        span.textContent = current + "%";
        circle.style.background = `conic-gradient(#00e5ff ${current}%, #222 ${current}%)`;
      }
    }, 20);
  });
}

// Reset both bars & circles
function resetSkills() {
  document.querySelectorAll('.bar span').forEach(bar => {
    bar.style.width = "0%";
    bar.textContent = "0%";
  });
  document.querySelectorAll('.circle').forEach(circle => {
    circle.style.background = `conic-gradient(#00e5ff 0%, #222 0%)`;
    circle.querySelector("span").textContent = "0%";
  });
}

// Observe entire skills section
const skillsSection = document.querySelector('#skills');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      animateBars();
      animateCircles();
    } else {
      resetSkills();
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 }); // triggers when 30% of section visible

observer.observe(skillsSection);
document.getElementById("readMoreBtn").addEventListener("click", function() {
  const moreText = document.querySelector(".more-text");
  if (moreText.style.display === "block") {
    moreText.style.display = "none";
    this.textContent = "Read More";
  } else {
    moreText.style.display = "block";
    this.textContent = "Read Less";
  }
});
// =====================
// Certifications Slider
// =====================
function scrollCerts(direction) {
  const certContainer = document.querySelector(".cert-container");
  if (!certContainer) return;
  const scrollAmount = 320; // card width + gap
  certContainer.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth"
  });
}
// =====================
// Project Reference Images Gallery
// =====================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll(".reference-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    currentImages = this.getAttribute("data-images").split(",");
    currentIndex = 0;
    openModal();
  });
});

function openModal() {
  modal.style.display = "block";
  modalImg.src = currentImages[currentIndex];
}

function closeModal() {
  modal.style.display = "none";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
}

closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);