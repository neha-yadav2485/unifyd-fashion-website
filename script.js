/* GLOBAL ELEMENTS */
const sideMenu = document.getElementById("sideMenu");
const menuBtn = document.querySelector(".hamburger");
const body = document.body;

/* MENU TOGGLE */
function menuClick() {
  sideMenu.classList.toggle("active");
}

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
  if (
    sideMenu &&
    !sideMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    sideMenu.classList.remove("active");
  }
});

/* NAVIGATION HANDLERS */
function goHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goTo(section) {
  console.log(`Navigating to ${section}`);

  // You can replace these later with real pages
  switch (section) {
    case "Women":
      scrollToSection(".collections");
      break;

    case "Men":
      scrollToSection(".collections");
      break;

    case "Unisex":
      scrollToSection(".collections");
      break;

    case "Style Guide":
      scrollToSection(".style-guide");
      break;

    default:
      console.warn("Unknown section");
  }

  sideMenu.classList.remove("active");
}

/* SMOOTH SCROLL FUNCTION */
function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth"
  });
}

/* ICON ACTIONS */
function searchClick() {
  console.log("Search clicked");
}

function profileClick() {
  console.log("Profile clicked");
}

function cartClick() {
  console.log("Cart clicked");
}

function callUs() {
  window.location.href = "tel:+911234567890"; // replace with real number
}

/* HERO BUTTONS */
function forHer() {
  goTo("Women");
}

function forHim() {
  goTo("Men");
}

/* OPTIONAL: STICKY NAV ON SCROLL */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
