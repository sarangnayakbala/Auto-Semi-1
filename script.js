const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const memorySection = document.getElementById("memory-section");
const creditSection = document.querySelector(".credit-section");

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  letter.style.display = "none";
  memorySection.style.display = "block";

  animateCredit();
});

function animateCredit() {

  creditSection.style.opacity = "1";

  const textWrapper = document.querySelector('.ml12');

  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false })
    .add({
      targets: '.ml12 .letter',
      translateY: [40, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el, i) => 200 + 20 * i
    });
}
