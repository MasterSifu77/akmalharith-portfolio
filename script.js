console.log("Resume website loaded successfully!");

// Typing animation for intro title
const typedText = document.getElementById("typed-text");
const textToType = "Information Technology Student";

let typingIndex = 0;

function typeIntroText() {
  if (!typedText) return;

  if (typingIndex < textToType.length) {
    typedText.textContent += textToType.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeIntroText, 120);
  }
}

typeIntroText();

// Add all slideshow images here
const slideshowImages = [
    "Slideshow/slideshow_mpu4_1.jpeg",
  "Slideshow/slideshow_mpu4_2.jpeg",
  "Slideshow/slideshow_mpu4_3.jpeg",
  "Slideshow/slideshow_mpu4_4.jpeg",
    "Slideshow/slideshow_utp.jpeg",
    "Slideshow/slideshow_hiking1.jpeg",
    "Slideshow/slideshow_mpu4_popbazaar.jpeg",
  "Slideshow/slideshow_absolutecinema.jpeg",
  "Slideshow/slideshow_legoland.jpeg",
  "Slideshow/slideshow_resevoir.jpeg",
];

// Get slideshow container
const slideshow = document.getElementById("slideshow");

// Add images into slideshow automatically from the array
slideshowImages.forEach((imagePath, index) => {
  const img = document.createElement("img");

  img.src = imagePath;
  img.alt = `Portfolio Slideshow ${index + 1}`;
  img.classList.add("slide");

  if (index === 0) {
    img.classList.add("active");
  }

  slideshow.appendChild(img);
});

// Slideshow animation
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);

// Contact section GIF background slideshow without blank flashing
const contactBackgrounds = document.querySelectorAll(".contact-bg");

const contactGifs = [
  {
    file: "Slideshow/gifslideshow_1.gif",
    duration: 2000
  },
  {
    file: "Slideshow/gifslideshow_2.gif",
    duration: 2000
  },
  {
    file: "Slideshow/gifslideshow_3.gif",
    duration: 3000
  },
  {
    file: "Slideshow/gifslideshow_4.gif",
    duration: 2000
  },
  {
    file: "Slideshow/gifslideshow_5.gif",
    duration: 3000
  }
];

let currentGif = 0;
let activeBg = 0;

// Preload all GIFs first
contactGifs.forEach((gif) => {
  const img = new Image();
  img.src = gif.file;
});

// Set first GIF immediately
if (contactBackgrounds.length >= 2) {
  contactBackgrounds[0].style.backgroundImage = `url("${contactGifs[0].file}")`;
  contactBackgrounds[0].classList.add("active-bg");
  currentGif = 1;
}

function showContactGif() {
  if (contactBackgrounds.length < 2) return;

  const current = contactGifs[currentGif];
  const nextBg = activeBg === 0 ? 1 : 0;

  contactBackgrounds[nextBg].style.backgroundImage = `url("${current.file}")`;

  contactBackgrounds[activeBg].classList.remove("active-bg");
  contactBackgrounds[nextBg].classList.add("active-bg");

  activeBg = nextBg;
  currentGif = (currentGif + 1) % contactGifs.length;

  setTimeout(showContactGif, current.duration);
}

if (contactBackgrounds.length >= 2) {
  setTimeout(showContactGif, contactGifs[0].duration);
}

// contact me
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Portfolio Contact Message from " + name);

    const body = encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Message:\n" + message
    );

    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=muhammad_22010886@utp.edu.my" +
      "&su=" + subject +
      "&body=" + body;

    window.open(gmailURL, "_blank");
  });
}

// Creative Media carousel
const mediaCards = document.querySelectorAll(".media-card");
const prevMediaBtn = document.getElementById("prevMedia");
const nextMediaBtn = document.getElementById("nextMedia");

let activeMediaIndex = 0;

function updateMediaCarousel() {
  mediaCards.forEach((card, index) => {
    const video = card.querySelector("video");

    card.classList.remove("active-media", "prev-media", "next-media", "hidden-media");

    if (video) {
      video.pause();
      video.controls = false;
    }

    const prevIndex = (activeMediaIndex - 1 + mediaCards.length) % mediaCards.length;
    const nextIndex = (activeMediaIndex + 1) % mediaCards.length;

    if (index === activeMediaIndex) {
      card.classList.add("active-media");

      if (video) {
        video.controls = true;
      }
    } else if (index === prevIndex) {
      card.classList.add("prev-media");
    } else if (index === nextIndex) {
      card.classList.add("next-media");
    } else {
      card.classList.add("hidden-media");
    }
  });
}

if (nextMediaBtn) {
  nextMediaBtn.addEventListener("click", () => {
    activeMediaIndex = (activeMediaIndex + 1) % mediaCards.length;
    updateMediaCarousel();
  });
}

if (prevMediaBtn) {
  prevMediaBtn.addEventListener("click", () => {
    activeMediaIndex = (activeMediaIndex - 1 + mediaCards.length) % mediaCards.length;
    updateMediaCarousel();
  });
}

updateMediaCarousel();

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Highlight active navbar link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active-link");
    }
  });
});