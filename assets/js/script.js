const animCard1 = document.getElementById("anim-card-1");
const animCard2 = document.getElementById("anim-card-2");

let toggle = false;

setInterval(() => {
  if(toggle) {
    animCard1.classList.add("hidden");
    animCard2.classList.remove("hidden");
  } else {
    animCard1.classList.remove("hidden");
    animCard2.classList.add("hidden");
  }
  toggle = !toggle;
}, 100);

document.getElementById("match-btn").addEventListener("click", () => {
  alert("¡Haz hecho matcha! 🍵");
});
