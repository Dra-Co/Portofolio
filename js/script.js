// Toggle Icon Navbar
let icon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

icon.onclick = () => {
  icon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Line
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
    let header = document.querySelector("header");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      showBtn.style.display = "block";
      window.setTimeout(() => {
        showBtn.style.opacity = 1;
      }, 0);
      header.style.borderBottom = ".2rem solid #0ef";
    } else {
      showBtn.style.opacity = 0;
      window.setTimeout(() => {
        showBtn.style.display = "none";
      }, 300);
      header.style.borderBottom = "none";
    }
  });

  // Remove Toggle Icon and Navbar When Click Navbar Link (Scroll)
  icon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll To Top Button
let showBtn = document.querySelector(".showBtn");
showBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//AOS
AOS.init();

// Typed.js
const typed = new Typed(".multiple-text", {
  strings: ["Data Scientist", "Web Developer", "Scholarship Mentor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Alert Message
document.querySelector(".alert").addEventListener("click", () => {
  iziToast.show({
    title: "Disabled",
    message: "Unfortunately, this feature cannot be used yet.",
    icon: "bx bxs-message-alt-x",
    titleColor: "#a70000",
    messageColor: "#ff5252",
    iconColor: "#a70000",
    backgroundColor: "rgba(255,186,186, .9)",
    displayMode: 1,
    timeout: 2000,
  });
});

// Restriction
document.onkeydown = (e) => {
  if (e.key == 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "I") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "C") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "J") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "U") {
    e.preventDefault();
  }
};
