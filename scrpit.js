/* ==============================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ==============================
   DARK / LIGHT MODE
================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});


/* ==============================
   CONTACT FORM VALIDATION
================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please complete all fields before submitting.";

        formMessage.style.color = "#ff7777";

        return;

    }


    /* Simple email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "#ff7777";

        return;

    }


    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    formMessage.style.color = "#9be564";

    contactForm.reset();

});