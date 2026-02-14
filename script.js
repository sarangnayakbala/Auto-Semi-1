
// =======================
// ELEMENTS
// =======================

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const memorySection = document.getElementById("memory-section");

// =======================
// ENVELOPE CLICK
// =======================

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// =======================
// NO BUTTON ESCAPE
// =======================

noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});



// =======================
// YES BUTTON CLICK
// =======================

yesBtn.addEventListener("click", () => {

  // Hide letter
  letter.style.display = "none";

  // Show memory scroll
  memorySection.style.display = "block";

  startScrollStory();
});

// =======================
// GSAP SCROLL STORY
// =======================

function startScrollStory() {

  gsap.registerPlugin(ScrollTrigger);

  // Animate MAAO title
  gsap.to(".maao-title", {
    opacity: 1,
    duration: 1
  });

  // Animate each memory section
  document.querySelectorAll(".memory").forEach(section => {

    const img = section.querySelector("img");
    const text = section.querySelector("p");

    // Slight zoom on scroll
    gsap.fromTo(img,
      { scale: 1 },
      {
        scale: 1.05,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 0.6
        }
      }
    );

    // Text fade in
    gsap.to(text, {
      opacity: 1,
      y: -10,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

  });

}

// ===== Footer Anime Text Animation =====

const textWrapper = document.querySelector('.ml12');

if (textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, 
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: true })
    .add({
      targets: '.ml12 .letter',
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el, i) => 300 + 25 * i
    }).add({
      targets: '.ml12 .letter',
      translateY: [0, -20],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 900,
      delay: (el, i) => 50 + 20 * i
    });
}
