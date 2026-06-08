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

// PROJECT MODAL
const projectData = {
  aircraft: {
    image: "Images/project_iot.png",
    date: "March 2026",
    title: "Real-Time Aircraft Data Tracking System",
    short:
      "A data-focused system that retrieves and displays real-time aircraft information using the OpenSky API.",
    overview:
      "This project focuses on real-time aircraft data retrieval and analysis. It uses API-based data to display aircraft information in a structured way, helping demonstrate data handling, API integration, and technical problem-solving skills.",
    tasks: [
      "Retrieved aircraft data using the OpenSky API.",
      "Processed real-time aviation data into a readable structure.",
      "Worked with Python to handle data fetching and basic analysis.",
      "Improved understanding of API integration and real-time data flow."
    ],
    skills: [
      { name: "Python", icon: null },
      { name: "VS Code", icon: "Images/logo_vscode.png" }
    ]
  },

  twitter: {
    image: "Images/project_figma.jpg",
    date: "November 2025",
    title: "Twitter-X Interface Redesign Project",
    short:
      "A user interface redesign project focused on improving layout, usability, and visual consistency.",
    overview:
      "This project involved redesigning the Twitter-X interface with attention to usability, user flow, and interface clarity. The goal was to improve the user experience while keeping the design clean and familiar.",
    tasks: [
      "Analysed the existing interface and identified areas for improvement.",
      "Created redesigned layouts and interface screens.",
      "Focused on user experience, visual hierarchy, and consistency.",
      "Used Figma to plan and present the interface redesign."
    ],
    skills: [
      { name: "Figma", icon: "Images/logo_figma.png" },
      { name: "Canva", icon: "Images/logo_canva.png" }
    ]
  },

  library: {
    image: "Images/project_library.png",
    date: "March 2025",
    title: "Library Management System Website",
    short:
      "A web-based library system designed to manage book records and basic user interactions.",
    overview:
      "This project focused on developing a simple library management website that helps organise book-related information. It strengthened web development fundamentals including page structure, styling, and front-end interaction.",
    tasks: [
      "Designed and developed the website interface.",
      "Created pages for managing library-related information.",
      "Applied HTML, CSS, and JavaScript for structure, styling, and interaction.",
      "Hosted and tested the project using a web hosting platform."
    ],
    skills: [
      { name: "HTML", icon: null },
      { name: "CSS", icon: null },
      { name: "JavaScript", icon: null },
      { name: "VS Code", icon: "Images/logo_vscode.png" }
    ]
  },

  petclinic: {
    image: "Images/project_petclinic.jpg",
    date: "March 2025",
    title: "Pet Clinic Appointment Management System",
    short:
      "A system concept for managing pet clinic appointments and customer-related records.",
    overview:
      "This project was designed to support appointment management for a pet clinic. It focuses on organising bookings and improving the structure of clinic-related information.",
    tasks: [
      "Designed the system structure for managing appointments.",
      "Created user-friendly screens for appointment-related information.",
      "Applied web development concepts to organise the interface.",
      "Improved understanding of simple management systems."
    ],
    skills: [
      { name: "C#", icon: null },
      { name: "HTML", icon: null },
      { name: "CSS", icon: null },
      { name: "JavaScript", icon: null },
      { name: "VS Code", icon: "Images/logo_vscode.png" }
    ]
  },

  database: {
    image: "Images/project_database.png",
    date: "November 2024",
    title: "Student Attendance Database System",
    short:
      "A database system designed to organise and manage student attendance records.",
    overview:
      "This project focused on database design and structured data management. It was created to record, organise, and manage student attendance information more efficiently.",
    tasks: [
      "Designed database tables for student and attendance records.",
      "Organised information into a structured database format.",
      "Used SQL concepts to manage and retrieve stored data.",
      "Improved understanding of database relationships and data organisation."
    ],
    skills: [
      { name: "SQL", icon: null },
      { name: "Database", icon: null },
      { name: "VS Code", icon: "Images/logo_vscode.png" }
    ]
  },

  leaflink: {
    image: "Images/project_leaflink.png",
    date: "July 2024",
    title: "LeafLink Farmer Social Media Application",
    short:
      "A farmer-focused social media application concept developed during Oh My Code.",
    overview:
      "LeafLink is a social media application concept designed for farmers to connect, share updates, and support agriculture-related communication. The project was developed as part of Oh My Code and encouraged teamwork, creativity, and application development.",
    tasks: [
      "Contributed to the application concept and feature planning.",
      "Helped develop the application using VB.NET.",
      "Worked with teammates to create a functional prototype.",
      "Strengthened teamwork, problem-solving, and presentation skills."
    ],
    skills: [
      { name: "VB.NET", icon: null },
      { name: "Visual Studio", icon: "Images/logo_visualstudio.png" }
    ]
  }
};

const projectCards = document.querySelectorAll(".project-card");
const projectModal = document.getElementById("projectModal");
const projectModalOverlay = document.getElementById("projectModalOverlay");
const projectModalClose = document.getElementById("projectModalClose");

const modalProjectDate = document.getElementById("modalProjectDate");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectShort = document.getElementById("modalProjectShort");
const modalProjectOverview = document.getElementById("modalProjectOverview");
const modalProjectTasks = document.getElementById("modalProjectTasks");
const modalProjectSkills = document.getElementById("modalProjectSkills");
const modalProjectImage = document.getElementById("modalProjectImage");

function createSkillItem(skill) {
  const skillItem = document.createElement("div");
  skillItem.classList.add("modal-skill-item");

  if (skill.icon) {
    const img = document.createElement("img");
    img.src = skill.icon;
    img.alt = skill.name;
    skillItem.appendChild(img);
  } else {
    const fallback = document.createElement("div");
    fallback.textContent = skill.name.charAt(0);
    fallback.style.width = "34px";
    fallback.style.height = "34px";
    fallback.style.borderRadius = "10px";
    fallback.style.display = "grid";
    fallback.style.placeItems = "center";
    fallback.style.background = "rgba(96, 165, 250, 0.2)";
    fallback.style.color = "#93c5fd";
    fallback.style.fontWeight = "900";
    skillItem.appendChild(fallback);
  }

  const label = document.createElement("span");
  label.textContent = skill.name;
  skillItem.appendChild(label);

  return skillItem;
}

function openProjectModal(projectKey) {
  const project = projectData[projectKey];

  if (!project || !projectModal) {
    return;
  }

    if (modalProjectImage) {
    modalProjectImage.src = project.image;
    modalProjectImage.alt = project.title;
  }

  modalProjectDate.textContent = project.date;
  modalProjectTitle.textContent = project.title;
  modalProjectShort.textContent = project.short;
  modalProjectOverview.textContent = project.overview;

  modalProjectTasks.innerHTML = "";
  project.tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    modalProjectTasks.appendChild(li);
  });

  modalProjectSkills.innerHTML = "";
  project.skills.forEach((skill) => {
    modalProjectSkills.appendChild(createSkillItem(skill));
  });

  projectModal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectKey = card.getAttribute("data-project");
    openProjectModal(projectKey);
  });
});

if (projectModalOverlay) {
  projectModalOverlay.addEventListener("click", closeProjectModal);
}

if (projectModalClose) {
  projectModalClose.addEventListener("click", closeProjectModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectImagePreview();
    closeProjectModal();
  }
});

// PROJECT IMAGE FULL PREVIEW
const projectImagePreview = document.getElementById("projectImagePreview");
const projectImagePreviewImg = document.getElementById("projectImagePreviewImg");
const projectImagePreviewOverlay = document.getElementById("projectImagePreviewOverlay");
const projectImagePreviewClose = document.getElementById("projectImagePreviewClose");

if (modalProjectImage && projectImagePreview && projectImagePreviewImg) {
  modalProjectImage.addEventListener("click", () => {
    if (!modalProjectImage.src) return;

    projectImagePreviewImg.src = modalProjectImage.src;
    projectImagePreviewImg.alt = modalProjectImage.alt;

    projectImagePreview.classList.add("open");
  });
}

function closeProjectImagePreview() {
  if (!projectImagePreview) return;
  projectImagePreview.classList.remove("open");
}

if (projectImagePreviewOverlay) {
  projectImagePreviewOverlay.addEventListener("click", closeProjectImagePreview);
}

if (projectImagePreviewClose) {
  projectImagePreviewClose.addEventListener("click", closeProjectImagePreview);
}

// AKMALBOT PHASE 1 - RANDOM SPEECH BUBBLES
const akmalBotBubble = document.getElementById("akmalBotBubble");

const akmalBotMessages = [
  "Need help exploring the site?",
  "Psst... check out the Projects section 👀",
  "Akmal is looking for an internship from September 2026 to April 2027.",
  "Want to know his skills? The Skills section has the good stuff.",
  "The Aircraft Data Tracking project is worth checking out.",
  "You can download the resume from the Overview section.",
  "Creative Media has some edited videos too 🎬",
  "Looking for contact details? Scroll to the Contact section."
];

let akmalBotMessageIndex = 0;

function changeAkmalBotMessage() {
  if (!akmalBotBubble) return;

  akmalBotBubble.style.opacity = "0";
  akmalBotBubble.style.transform = "translateY(8px)";

  setTimeout(() => {
    akmalBotMessageIndex =
      (akmalBotMessageIndex + 1) % akmalBotMessages.length;

    akmalBotBubble.textContent = akmalBotMessages[akmalBotMessageIndex];

    akmalBotBubble.style.opacity = "1";
    akmalBotBubble.style.transform = "translateY(0)";
  }, 300);
}

setInterval(changeAkmalBotMessage, 5000);

// AKMALBOT PHASE 2 - OPEN AND CLOSE CHATBOX
const akmalBotWidget = document.getElementById("akmalBot");
const akmalBotButton = document.getElementById("akmalBotButton");
const akmalBotChatbox = document.getElementById("akmalBotChatbox");
const akmalBotClose = document.getElementById("akmalBotClose");

if (akmalBotButton && akmalBotChatbox && akmalBotClose && akmalBotWidget) {
  akmalBotButton.addEventListener("click", () => {
    akmalBotChatbox.classList.toggle("open");
    akmalBotWidget.classList.toggle("chat-open");
  });

  akmalBotButton.addEventListener("click", () => {
  if (spyderWasHeld) {
    spyderWasHeld = false;
    return;
  }

  if (akmalBotWidget.classList.contains("spyder-disabled")) {
    akmalBotWidget.classList.remove("spyder-disabled");
    return;
  }

  akmalBotChatbox.classList.toggle("open");
  akmalBotWidget.classList.toggle("chat-open");
});
}

// AKMALBOT PHASE 3 - SEND USER MESSAGES
const akmalBotForm = document.getElementById("akmalBotForm");
const akmalBotInput = document.getElementById("akmalBotInput");
const akmalBotChatBody = document.querySelector(".akmalbot-chat-body");

function addAkmalBotMessage(message, sender) {
  if (!akmalBotChatBody) return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("akmalbot-message");

  if (sender === "user") {
    messageDiv.classList.add("user-message");
  } else {
    messageDiv.classList.add("bot-message");
  }

  messageDiv.textContent = message;
  akmalBotChatBody.appendChild(messageDiv);

  akmalBotChatBody.scrollTop = akmalBotChatBody.scrollHeight;
}

if (akmalBotForm && akmalBotInput) {
  akmalBotForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userMessage = akmalBotInput.value.trim();

    if (userMessage === "") return;

    addAkmalBotMessage(userMessage, "user");

    akmalBotInput.value = "";

    const botReply = getAkmalBotReply(userMessage);

    setTimeout(() => {
      addAkmalBotMessage(botReply, "bot");
    }, 500);
  });
}

// AKMALBOT PHASE 4 - SMART KEYWORD REPLIES
function getAkmalBotReply(userMessage) {
  const message = userMessage.toLowerCase();

  const hasWord = (word) => {
  return new RegExp("\\b" + word + "\\b").test(message);
};

if (
  hasWord("hello") ||
  hasWord("yo") ||
  hasWord("hey") ||
  hasWord("hi") 
) {
  return "Hi there! I’m Spyder. You can ask me about Akmal’s projects, skills, education, resume, internship, activities, creative media, or contact details.";
}

if (
    message.includes("best project") ||
    message.includes("strongest project") ||
    message.includes("recommend")
  ) {
    return "I recommend checking out the Real-Time Aircraft Data Tracking System. It shows Akmal’s ability to work with APIs, Python, real-time data, and data handling.";
  }

  if (
    message.includes("project") ||
    message.includes("projects") ||
    message.includes("portfolio")
  ) {
    return "Akmal has worked on several projects including a Real-Time Aircraft Data Tracking System, Library Management System Website, Pet Clinic Appointment Management System, Student Attendance Database System, Twitter-X Interface Redesign, and LeafLink, a farmer social media application.";
  }

  if (
    message.includes("aircraft") ||
    message.includes("flight") ||
    message.includes("opensky") ||
    message.includes("tracking")
  ) {
    return "The Real-Time Aircraft Data Tracking System uses the OpenSky API to retrieve aircraft data and display real-time flight information. It is one of Akmal’s strongest data-related projects.";
  }

  if (
    message.includes("skill") ||
    message.includes("skills") ||
    message.includes("technical")
  ) {
    return "Akmal’s technical skills include Python, VB.NET, C++, C#, HTML, CSS, JavaScript, Lua, R Language, and SQL. He also uses tools such as VS Code, Visual Studio, PyCharm, R Studio, eNSP, Wireshark, Figma, Canva, CapCut, and DaVinci Resolve.";
  }

  if (
    message.includes("programming") ||
    message.includes("language") ||
    message.includes("coding")
  ) {
    return "Akmal has experience with Python, VB.NET, C++, C#, HTML, CSS, JavaScript, Lua, R Language, and SQL.";
  }

  if (
    message.includes("education") ||
    message.includes("study") ||
    message.includes("university") ||
    message.includes("utp")
  ) {
    return "Akmal is currently pursuing a Bachelor of Information Technology at Universiti Teknologi PETRONAS. He also completed his Foundation in Information Technology at UTP.";
  }

  if (
    message.includes("internship") ||
    message.includes("intern") ||
    message.includes("placement")
  ) {
    return "Yes, Akmal is seeking an 8-month internship from September 2026 to April 2027, especially in IT-related areas such as software development, data, systems, or technology roles.";
  }

  if (
    message.includes("resume") ||
    message.includes("cv")
  ) {
    return "You can download Akmal’s resume from the Overview section near the top of the website.";
  }

  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("reach")
  ) {
    return "You can contact Akmal through the Contact section at the bottom of the website, or via his UTP email: muhammad_22010886@utp.edu.my.";
  }

  if (
    message.includes("linkedin")
  ) {
    return "Akmal’s LinkedIn profile is linked in the Overview section. You can click the LinkedIn button to visit it directly.";
  }

  if (
    message.includes("creative") ||
    message.includes("media") ||
    message.includes("video") ||
    message.includes("editing")
  ) {
    return "The Creative Media section showcases Akmal’s edited videos, including Celestial Night Run 2026, The Small Wins PSA, and Sportech 2025. The videos were edited using DaVinci Resolve.";
  }

  if (
    message.includes("activity") ||
    message.includes("activities") ||
    message.includes("event") ||
    message.includes("extracurricular") ||
    message.includes("extra-curricular")
  ) {
    return "Akmal has been involved in events such as Suarana: STEM Discovery, Celestial Delights 2026, Celestial Night Run 2026, Pathway to Mossy Heaven, Mobile Legends UTP League Tournament, Sportech 2025, and Gladiators Paintball Arena 2025.";
  }

  if (
    message.includes("data") ||
    message.includes("database") ||
    message.includes("sql")
  ) {
    return "For data-related work, Akmal’s Aircraft Data Tracking System and Student Attendance Database System are worth checking out. They show experience with data handling, databases, and structured systems.";
  }

  if (
    message.includes("website") ||
    message.includes("web") ||
    message.includes("html") ||
    message.includes("css") ||
    message.includes("javascript")
  ) {
    return "Akmal has web development experience through projects such as the Library Management System Website, Pet Clinic Appointment Management System, and this personal portfolio website.";
  }

  if (
    message.includes("who are you") ||
    message.includes("what are you") ||
    message.includes("spyder")
  ) {
    return "I’m Spyder, a small portfolio assistant built to help visitors explore Akmal’s website more easily.";
  }

  if (
    message.includes("thank") ||
    message.includes("thanks")
  ) {
    return "You’re welcome! Feel free to ask me anything else about Akmal’s portfolio.";
  }

  return "I’m not fully sure about that yet, but you can ask me about Akmal’s projects, skills, education, resume, internship, activities, creative media, or contact details.";
}

// SPYDER HOLD TO DISABLE / ENABLE
let spyderHoldTimer;
let spyderWasHeld = false;

if (akmalBotButton && akmalBotWidget && akmalBotChatbox) {
  function startSpyderHold() {
    spyderWasHeld = false;

    spyderHoldTimer = setTimeout(() => {
      spyderWasHeld = true;

      akmalBotWidget.classList.toggle("spyder-disabled");

      akmalBotChatbox.classList.remove("open");
      akmalBotWidget.classList.remove("chat-open");
    }, 900);
  }

  function cancelSpyderHold() {
    clearTimeout(spyderHoldTimer);
  }

  akmalBotButton.addEventListener("mousedown", startSpyderHold);
  akmalBotButton.addEventListener("mouseup", cancelSpyderHold);
  akmalBotButton.addEventListener("mouseleave", cancelSpyderHold);

  akmalBotButton.addEventListener("touchstart", startSpyderHold);
  akmalBotButton.addEventListener("touchend", cancelSpyderHold);
}