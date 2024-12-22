const moveRandomEl = (elm) => {
  elm.style.position = "absolute";
  const randomPosition = () => Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.top = randomPosition();
  elm.style.left = randomPosition();
};

const moveRandom = document.getElementById("move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", (e) => moveRandomEl(e.target));
}