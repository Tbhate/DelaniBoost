const cards = document.querySelectorAll(".cays-card");
const prevBtn = document.querySelector(".button-cays.prev");
const nextBtn = document.querySelector(".button-cays.next");

let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

showCard(current);
