// =========================
// CONTACT FORM
// =========================

function sendMessage(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    // Form reset
    event.target.reset();
}


// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

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
        threshold: 0.15
    }
);


// Apply animation to sections

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// =========================
// NAVBAR ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#aaa";
        }

    });

});


// =========================
// SMOOTH MOBILE NAVIGATION
// =========================

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
